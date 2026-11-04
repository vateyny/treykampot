"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AudioPlayerProps {
  title: string;
  khmerTitle?: string;
  duration: string;
  approxSeconds: number;
  transcript: string;
  khmerTranscript?: string;
  narrationText: string;
  khmerNarrationText?: string;
  variant?: "default" | "immersiveCyan";
}

export default function AudioPlayer({
  title,
  khmerTitle,
  duration,
  approxSeconds,
  transcript,
  khmerTranscript,
  narrationText,
  khmerNarrationText,
  variant = "default",
}: AudioPlayerProps) {
  const { language, t } = useLanguage();
  const isKm = language === "km";

  const activeTitle = isKm && khmerTitle ? khmerTitle : title;
  const activeTranscript = isKm && khmerTranscript ? khmerTranscript : transcript;
  const activeNarration = isKm && khmerNarrationText ? khmerNarrationText : narrationText;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [finished, setFinished] = useState(false);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      stopPlayback();
    };
  }, []);

  // When language switches, stop any ongoing playback so text matches
  useEffect(() => {
    stopPlayback();
    setCurrentTimeSec(0);
    setProgress(0);
    setFinished(false);
  }, [language]);

  const stopPlayback = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
  };

  const startTimer = (startSec = 0) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const totalDuration = approxSeconds / playbackRate;
    let elapsed = startSec;

    timerRef.current = setInterval(() => {
      elapsed += 1;
      setCurrentTimeSec(Math.min(elapsed, totalDuration));
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));

      if (elapsed >= totalDuration) {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsPlaying(false);
        setFinished(true);
        setProgress(100);
      }
    }, 1000);
  };

  const handlePlayPause = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.pause();
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      if (synthRef.current.paused) {
        synthRef.current.resume();
        startTimer(currentTimeSec);
        setIsPlaying(true);
      } else {
        synthRef.current.cancel();

        const textToSpeak = activeTranscript || activeNarration;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.rate = isKm ? playbackRate * 0.95 : playbackRate;
        utterance.pitch = 1.0;
        utterance.lang = isKm ? "km-KH" : "en-US";

        const voices = synthRef.current.getVoices();
        const preferredVoice = voices.find(
          (v) =>
            (isKm && (v.lang.startsWith("km") || v.lang.includes("kh"))) ||
            (!isKm &&
              ((v.lang.startsWith("en") && v.name.includes("Natural")) ||
                v.name.includes("Google") ||
                v.name.includes("Samantha")))
        );
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
          setIsPlaying(false);
          setFinished(true);
          setProgress(100);
          if (timerRef.current) clearInterval(timerRef.current);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
          if (timerRef.current) clearInterval(timerRef.current);
        };

        synthRef.current.speak(utterance);
        setFinished(false);
        setCurrentTimeSec(0);
        setProgress(0);
        startTimer(0);
        setIsPlaying(true);
      }
    }
  };

  const handleRestart = () => {
    stopPlayback();
    setCurrentTimeSec(0);
    setProgress(0);
    setFinished(false);
  };

  const handleSpeedToggle = () => {
    const nextRate = playbackRate === 1 ? 1.25 : playbackRate === 1.25 ? 1.5 : 1;
    setPlaybackRate(nextRate);
    if (isPlaying) {
      stopPlayback();
      setTimeout(() => {
        handlePlayPause();
      }, 100);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const isCyan = variant === "immersiveCyan";

  return (
    <div
      className={`${
        isCyan
          ? "bg-[#1A334E] dark:bg-[#18293B] border-2 border-[#38BDF8]/70 shadow-2xl rounded-2xl p-5 sm:p-6 text-white"
          : "bg-[#1A334E] dark:bg-[#18293B] border-2 border-[#DE9D2B]/50 dark:border-[#26486D] rounded-3xl p-5 sm:p-6 shadow-xl transition-all text-[#FEF08A]"
      }`}
    >
      {/* Player Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2.5">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${
              isCyan
                ? "bg-[#14283D] text-[#38BDF8] border-[#38BDF8]/50 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                : "bg-[#14283D] dark:bg-[#132338] text-[#DE9D2B] border-[#DE9D2B]/40"
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isCyan ? "text-[#38BDF8]" : "text-[#DE9D2B]"}`} />
          </div>
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider block ${
                isCyan ? "text-[#38BDF8]" : "text-[#DE9D2B]"
              }`}
            >
              {t("audioGuideLabel")} ({duration})
            </span>
            <h4
              className={`text-sm font-bold truncate max-w-[200px] sm:max-w-md ${
                isCyan ? "text-white" : "text-[#FEF08A]"
              }`}
            >
              {activeTitle}
            </h4>
          </div>
        </div>

        {/* Speed Switcher */}
        <button
          onClick={handleSpeedToggle}
          className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors border ${
            isCyan
              ? "bg-[#14283D] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A] border-[#38BDF8]/40"
              : "bg-[#14283D] dark:bg-[#132338] text-[#FEF08A] hover:bg-[#DE9D2B] hover:text-[#132338] border-[#DE9D2B]/40"
          }`}
          title="Adjust narration speed"
        >
          {playbackRate}x {t("speedLabel")}
        </button>
      </div>

      {/* Progress Bar & Waveform visualizer */}
      <div className="mb-4">
        <div
          className={`w-full h-2.5 rounded-full overflow-hidden relative cursor-pointer border ${
            isCyan
              ? "bg-[#0F172A] border-[#38BDF8]/30"
              : "bg-[#14283D] dark:bg-[#132338] border-[#DE9D2B]/30"
          }`}
        >
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isCyan ? "bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "bg-[#DE9D2B]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div
          className={`flex items-center justify-between text-[11px] font-mono mt-1.5 ${
            isCyan ? "text-white/80" : "text-[#FEF08A]/75"
          }`}
        >
          <span>{formatTime(currentTimeSec)}</span>
          <span className={`font-sans font-medium text-[10px] ${isCyan ? "text-[#38BDF8]" : "text-[#DE9D2B]"}`}>
            {isPlaying
              ? isKm
                ? "សំឡេងមគ្គុទ្ទេសក៍កំពុងរៀបរាប់..."
                : "Historical Audio Playing..."
              : finished
              ? isKm
                ? "បានស្តាប់ចប់"
                : "Completed"
              : isKm
              ? "រួចរាល់សម្រាប់ការស្តាប់ (៣–៥ នាទី)"
              : "Ready to listen (3–5 min)"}
          </span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div
        className={`flex items-center justify-between pt-2 border-t ${
          isCyan ? "border-[#38BDF8]/30" : "border-[#DE9D2B]/30 dark:border-[#26486D]"
        }`}
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePlayPause}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide shadow-md transition-all active:scale-95 ${
              isCyan
                ? "bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] border border-[#38BDF8]"
                : "bg-[#DE9D2B] hover:bg-[#C9881A] text-[#132338] border border-[#DE9D2B]"
            }`}
            aria-label={isPlaying ? t("pauseLabel") : t("playAudioStory")}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>{t("pauseLabel")}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>
                  {currentTimeSec > 0 && !finished
                    ? t("resumeLabel")
                    : isKm ? "ចាក់សំឡេងមគ្គុទ្ទេសក៍ពេញ" : "Play Full Audio Story"}
                </span>
              </>
            )}
          </button>

          <button
            onClick={handleRestart}
            className={`p-2 rounded-full transition-colors border ${
              isCyan
                ? "text-white/80 hover:text-[#38BDF8] hover:bg-[#14283D] border-[#38BDF8]/30"
                : "text-[#FEF08A]/80 hover:text-[#DE9D2B] hover:bg-[#14283D] border-[#DE9D2B]/30"
            }`}
            title="Restart from beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Toggle Transcript */}
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className={`flex items-center space-x-1.5 text-xs font-bold transition-colors py-1.5 px-3 rounded-full border ${
            isCyan
              ? "text-white hover:text-[#38BDF8] bg-[#14283D] border-[#38BDF8]/40"
              : "text-[#FEF08A] hover:text-[#DE9D2B] bg-[#14283D] dark:bg-[#132338] border-[#DE9D2B]/40"
          }`}
        >
          <FileText className={`w-3.5 h-3.5 ${isCyan ? "text-[#38BDF8]" : "text-[#DE9D2B]"}`} />
          <span>{t("writtenTranscript")}</span>
          {showTranscript ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Audio Wave Animated Bars */}
      {isPlaying && (
        <div className="flex items-center justify-center space-x-1 mt-3 py-1">
          <div className={`w-1 h-3 animate-bounce rounded-full ${isCyan ? "bg-[#38BDF8]" : "bg-[#DE9D2B]"}`} style={{ animationDelay: "0ms" }} />
          <div className={`w-1 h-5 animate-bounce rounded-full ${isCyan ? "bg-[#38BDF8]" : "bg-[#DE9D2B]"}`} style={{ animationDelay: "150ms" }} />
          <div className={`w-1 h-4 animate-bounce rounded-full ${isCyan ? "bg-[#38BDF8]" : "bg-[#DE9D2B]"}`} style={{ animationDelay: "300ms" }} />
          <div className={`w-1 h-6 animate-bounce rounded-full ${isCyan ? "bg-[#38BDF8]" : "bg-[#DE9D2B]"}`} style={{ animationDelay: "75ms" }} />
          <div className={`w-1 h-3 animate-bounce rounded-full ${isCyan ? "bg-[#38BDF8]" : "bg-[#DE9D2B]"}`} style={{ animationDelay: "220ms" }} />
          <span className={`text-[11px] ml-2 font-medium ${isCyan ? "text-[#38BDF8]" : "text-[#FEF08A]/80"}`}>
            {isKm ? "សំឡេងមគ្គុទ្ទេសក៍ប្រវត្តិសាស្ត្រកំពុងដំណើរការ..." : "Historical documentary voiceover playing..."}
          </span>
        </div>
      )}

      {/* Expandable Transcript Panel */}
      {showTranscript && (
        <div className={`mt-4 pt-4 border-t text-xs leading-relaxed p-4 sm:p-5 rounded-2xl shadow-inner border animate-in fade-in space-y-2 ${
          isCyan
            ? "border-[#38BDF8]/40 bg-[#0F172A] text-white"
            : "border-[#DE9D2B]/40 bg-[#14283D] dark:bg-[#132338] text-[#FEF08A]"
        }`}>
          <div className={`flex items-center justify-between pb-1.5 border-b ${isCyan ? "border-[#38BDF8]/30" : "border-[#DE9D2B]/30"}`}>
            <span className={`font-bold text-[11px] uppercase tracking-wider ${isCyan ? "text-[#38BDF8]" : "text-[#DE9D2B]"}`}>
              {t("transcriptTitle")}
            </span>
            <span className="text-[10px] opacity-80 font-bold">
              {isKm ? `រយៈពេលរៀបរាប់៖ ${duration}` : `Narration Duration: ${duration}`}
            </span>
          </div>
          <p className="italic opacity-90 whitespace-pre-line leading-relaxed text-xs sm:text-sm font-normal">
            &ldquo;{activeTranscript}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
