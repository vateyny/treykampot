// Web Audio API Synthesizer for Cambodian Golden Age Music
// Emulates warm 1960s acoustic tones (vibraphone / electric piano / organ chimes) with gentle vibrato and vinyl warmth.

import { GOLDEN_AGE_SONGS, GoldenAgeSong } from "@/data/music";

class VintageAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentSong: GoldenAgeSong | null = null;
  private currentTime: number = 0;
  private timerId: any = null;
  private noteTimeouts: any[] = [];
  private volume: number = 0.75;
  private onTimeUpdateCallback?: (currentTime: number, duration: number) => void;
  private onStateChangeCallback?: (isPlaying: boolean) => void;
  private onSongEndCallback?: () => void;

  constructor() {
    this.currentSong = GOLDEN_AGE_SONGS[0];
  }

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public setCallbacks(
    onTimeUpdate: (currentTime: number, duration: number) => void,
    onStateChange: (isPlaying: boolean) => void,
    onSongEnd: () => void
  ) {
    this.onTimeUpdateCallback = onTimeUpdate;
    this.onStateChangeCallback = onStateChange;
    this.onSongEndCallback = onSongEnd;
  }

  public getCurrentSong(): GoldenAgeSong {
    return this.currentSong || GOLDEN_AGE_SONGS[0];
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public playSong(song: GoldenAgeSong, startTime = 0) {
    this.initContext();
    this.stopPlayback();

    this.currentSong = song;
    this.currentTime = startTime;
    this.isPlaying = true;
    this.onStateChangeCallback?.(true);

    this.startMelodyLoop();
    this.startTimeTracker();
  }

  public togglePlayPause(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      if (this.currentSong) {
        this.playSong(this.currentSong, this.currentTime);
      } else {
        this.playSong(GOLDEN_AGE_SONGS[0], 0);
      }
      return true;
    }
  }

  public pause() {
    this.isPlaying = false;
    this.stopPlayback();
    this.onStateChangeCallback?.(false);
  }

  public seek(seconds: number) {
    const wasPlaying = this.isPlaying;
    const song = this.currentSong || GOLDEN_AGE_SONGS[0];
    const clamped = Math.max(0, Math.min(seconds, song.durationSeconds));
    this.currentTime = clamped;
    this.onTimeUpdateCallback?.(this.currentTime, song.durationSeconds);

    if (wasPlaying) {
      this.playSong(song, this.currentTime);
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  private stopPlayback() {
    this.noteTimeouts.forEach((t) => clearTimeout(t));
    this.noteTimeouts = [];
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private startTimeTracker() {
    this.timerId = setInterval(() => {
      if (!this.isPlaying || !this.currentSong) return;

      this.currentTime += 1;
      this.onTimeUpdateCallback?.(this.currentTime, this.currentSong.durationSeconds);

      if (this.currentTime >= this.currentSong.durationSeconds) {
        this.stopPlayback();
        this.isPlaying = false;
        this.currentTime = 0;
        this.onStateChangeCallback?.(false);
        this.onSongEndCallback?.();
      }
    }, 1000);
  }

  private startMelodyLoop() {
    if (!this.ctx || !this.currentSong || !this.isPlaying) return;

    const notes = this.currentSong.melodyNotes || [
      [392.0, 1.0], [440.0, 1.0], [523.25, 1.5], [392.0, 1.0]
    ];

    let delay = 0;
    const bpm = 80;
    const beatSec = 60 / bpm;

    const scheduleSequence = () => {
      if (!this.isPlaying || !this.ctx) return;

      let seqTime = 0;
      notes.forEach(([freq, beats]) => {
        const timeout = setTimeout(() => {
          if (this.isPlaying && this.ctx) {
            this.playTone(freq, beats * beatSec * 0.9);
          }
        }, seqTime * 1000);
        this.noteTimeouts.push(timeout);
        seqTime += beats * beatSec;
      });

      // Loop sequence
      const loopTimeout = setTimeout(() => {
        if (this.isPlaying) {
          scheduleSequence();
        }
      }, seqTime * 1000);
      this.noteTimeouts.push(loopTimeout);
    };

    scheduleSequence();
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Master tone oscillator
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Sub-harmonic oscillator for vintage acoustic fullness
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();

      // Vintage tone warm filter (low pass removes harsh high digital frequencies)
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2200, now);

      // Vibrato LFO for analog warm drift
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.setValueAtTime(4.5, now); // 4.5 Hz vintage vibrato
      vibratoGain.gain.setValueAtTime(3.5, now);
      vibrato.connect(osc.frequency);
      vibrato.start(now);
      vibrato.stop(now + duration + 0.3);

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      subOsc.type = "triangle";
      subOsc.frequency.setValueAtTime(freq / 2, now);

      // Acoustic envelope: quick gentle attack, warm decay, soft release
      const baseVol = 0.22 * this.volume;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(baseVol, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(baseVol * 0.65, now + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      subGain.gain.setValueAtTime(0.0001, now);
      subGain.gain.exponentialRampToValueAtTime(baseVol * 0.35, now + 0.05);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      subOsc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      subOsc.start(now);

      osc.stop(now + duration + 0.1);
      subOsc.stop(now + duration + 0.1);
    } catch (e) {
      // Audio context may be closed or locked
    }
  }
}

// Export singleton instance
export const vintagePlayer = new VintageAudioPlayer();
