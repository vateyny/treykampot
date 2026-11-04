"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Footprints,
  MapPin,
  Route,
  Clock,
  Share2,
  Music,
  Disc,
  Headphones,
  Play,
  Pause,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  X,
  Volume2,
  ExternalLink,
  Sparkles,
  Info,
  SkipForward,
  SkipBack,
  Radio
} from "lucide-react";
import { HERITAGE_STOPS } from "@/data/stops";
import { GOLDEN_AGE_SONGS, FEATURED_ARTISTS, GoldenAgeSong, FeaturedArtist } from "@/data/music";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { vintagePlayer } from "@/utils/vintageAudioSynthesizer";

interface WalkingAndMusicExperienceProps {
  className?: string;
  initialMode?: "sample" | "live";
  section?: "all" | "track" | "music";
}

export default function WalkingAndMusicExperience({
  className = "",
  initialMode = "sample",
  section = "all"
}: WalkingAndMusicExperienceProps) {
  const { language } = useLanguage();
  const { songs } = useContent();
  const playlist = songs && songs.length > 0 ? songs : GOLDEN_AGE_SONGS;
  const isKm = language === "km";

  // Mode: "sample" (exact 2,450 steps / 1.8 km / 2 of 6 / 33% from the design) or "live" (visitor's real progress)
  const [dataMode, setDataMode] = useState<"sample" | "live">(initialMode);

  // Visited stops tracking (stored in localStorage)
  const [visitedStopIds, setVisitedStopIds] = useState<string[]>(["durian-roundabout", "hotel-old-cinema"]);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  // Music Player State (Audio Sound Only, No Video)
  const [currentSong, setCurrentSong] = useState<GoldenAgeSong>(playlist[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Modal for Featured Artists
  const [isArtistsModalOpen, setIsArtistsModalOpen] = useState(false);

  // Share Feedback
  const [shareToast, setShareToast] = useState<string | null>(null);

  // Load visited stops from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("kampot_visited_stops");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setVisitedStopIds(parsed);
          }
        }
      } catch (e) {
        // ignore storage errors
      }
    }
  }, []);

  // Toggle stop completion
  const toggleStopVisited = (stopId: string) => {
    const updated = visitedStopIds.includes(stopId)
      ? visitedStopIds.filter((id) => id !== stopId)
      : [...visitedStopIds, stopId];

    setVisitedStopIds(updated);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("kampot_visited_stops", JSON.stringify(updated));
      } catch (e) {}
    }
    // Automatically switch to live mode when user customizes
    setDataMode("live");
  };

  // Metrics calculation
  const totalStops = HERITAGE_STOPS.length; // 6
  const completedCount = dataMode === "sample" ? 2 : visitedStopIds.length;
  const progressPercent = Math.round((completedCount / totalStops) * 100);

  // In sample mode: exact 2,450 steps and 1.8 km as in mockup. In live mode: dynamic
  const stepsTaken =
    dataMode === "sample"
      ? "2,450"
      : (completedCount * 820).toLocaleString();

  const distanceKm =
    dataMode === "sample"
      ? "1.8 km"
      : `${(completedCount * 0.35 + 0.1).toFixed(1)} km`;

  const walkingTime =
    dataMode === "sample"
      ? "35 min"
      : `${completedCount * 12 + 5} min`;

  // Stop synthesizer audio when component unmounts
  useEffect(() => {
    return () => {
      vintagePlayer.pause();
    };
  }, []);

  // Select / Play Song (Dual Audio: Web Audio immediate sound + YouTube stream)
  const handleSelectSong = (song: GoldenAgeSong) => {
    if (currentSong.id === song.id) {
      if (isPlaying) {
        vintagePlayer.pause();
        setIsPlaying(false);
      } else {
        vintagePlayer.playSong(song);
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(song);
      vintagePlayer.playSong(song);
      setIsPlaying(true);
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      vintagePlayer.pause();
      setIsPlaying(false);
    } else {
      vintagePlayer.playSong(currentSong);
      setIsPlaying(true);
    }
  };

  const handleNextSong = () => {
    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    const nextSong = playlist[nextIndex];
    setCurrentSong(nextSong);
    vintagePlayer.playSong(nextSong);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    const prevSong = playlist[prevIndex];
    setCurrentSong(prevSong);
    vintagePlayer.playSong(prevSong);
    setIsPlaying(true);
  };

  // Share handler
  const handleShare = async () => {
    const shareTitle = isKm
      ? "ដំណើរថ្មើរជើង និងតន្ត្រីបេតិកភណ្ឌកំពត"
      : "My Kampot Heritage Walking & Music Journey";

    const shareText = isKm
      ? `ខ្ញុំបានទស្សនាទីតាំងបេតិកភណ្ឌ ${completedCount}/${totalStops} នៅក្រុងកំពត (${stepsTaken} ជំហាន, ${distanceKm}) ខណៈកំពុងស្តាប់សំនៀងសម័យមាសខ្មែរ "${currentSong.khmerTitle}" ដោយ ${currentSong.khmerArtist}!`
      : `I've explored ${completedCount} of 6 colonial heritage stops in Kampot (${stepsTaken} steps, ${distanceKm}) while listening to "${currentSong.title}" by ${currentSong.artist}!`;

    const shareUrl = typeof window !== "undefined" ? window.location.href : "https://kampot-through-time.com";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl
        });
      } catch (err) {
        // user cancelled share
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${shareTitle}\n${shareText}\n${shareUrl}`);
        setShareToast(isKm ? "បានចម្លងព័ត៌មានដំណើរទៅកាន់ clipboard!" : "Walking journey stats copied to clipboard!");
        setTimeout(() => setShareToast(null), 3500);
      } catch (err) {
        setShareToast(isKm ? "ចែករំលែក៖ " + shareUrl : "Share link: " + shareUrl);
        setTimeout(() => setShareToast(null), 3500);
      }
    }
  };

  return (
    <section className={`space-y-6 ${className}`}>
      {/* Outer Card with Rounded Parchment Styling */}
      <div className="bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] rounded-3xl shadow-xl overflow-hidden text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
        
        {/* ========================================================= */}
        {/* 1. YOUR WALKING JOURNEY (Rendered when section !== 'music') */}
        {/* ========================================================= */}
        {section !== "music" && (
        <div className="p-5 sm:p-7 space-y-5">
          {/* Section Heading & In Progress Tag */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "ដំណើរថ្មើរជើងរបស់អ្នក" : "YOUR WALKING JOURNEY"}
            </h3>

            {/* In Progress Status Pill */}
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/40">
              {isKm ? "កំពុងដំណើរការ" : "IN PROGRESS"}
            </span>
          </div>

          {/* 3 Metric Columns matching the user's design */}
          <div className="grid grid-cols-3 gap-4 pt-1">
            {/* Steps Taken */}
            <div className="space-y-1">
              <Footprints className="w-4 h-4 text-[#55534B] dark:text-[#C2BBAE] stroke-[1.75]" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] tracking-tight">
                {stepsTaken}
              </div>
              <div className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-medium">
                {isKm ? "ជំហានដែលបានដើរ" : "Steps taken"}
              </div>
            </div>

            {/* Distance Walked */}
            <div className="space-y-1">
              <Route className="w-4 h-4 text-[#55534B] dark:text-[#C2BBAE] stroke-[1.75]" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] tracking-tight">
                {distanceKm}
              </div>
              <div className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-medium">
                {isKm ? "ចម្ងាយដែលបានដើរ" : "Distance walked"}
              </div>
            </div>

            {/* Stops Visited */}
            <div className="space-y-1">
              <MapPin className="w-4 h-4 text-[#55534B] dark:text-[#C2BBAE] stroke-[1.75]" />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] tracking-tight">
                {completedCount} / {totalStops}
              </div>
              <div className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-medium">
                {isKm ? "ទីតាំងដែលបានទៅដល់" : "Stops visited"}
              </div>
            </div>
          </div>

          {/* Thin divider line */}
          <div className="border-t border-[#E8D9B8]/70 dark:border-[#455565] my-2" />

          {/* Segmented Route Progress Bar */}
          <div className="space-y-2">
            <span className="block text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "វឌ្ឍនភាពនៃផ្លូវដើរ" : "Your route progress"}
            </span>

            {/* 6 Segmented Pill Bars */}
            <div className="grid grid-cols-6 gap-2 my-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i < completedCount
                      ? "bg-[#1F354D] dark:bg-[#F0A536]"
                      : "bg-[#E8D9B8]/70 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#55534B] dark:text-[#C2BBAE] pt-0.5">
              <span>
                {isKm
                  ? `${completedCount} ក្នុងចំណោម ${totalStops} ទីតាំងបេតិកភណ្ឌបានបញ្ចប់`
                  : `${completedCount} of ${totalStops} heritage stops completed`}
              </span>
              <span className="font-extrabold text-[#1F354D] dark:text-[#F5F0E5] text-sm">
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* Centered Circle Arrow Down Sitting on Divider Line */}
          <div className="relative my-3 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E8D9B8]/70 dark:border-[#455565]" />
            </div>
            <button
              type="button"
              onClick={() => setIsChecklistOpen(!isChecklistOpen)}
              className="relative w-8 h-8 rounded-full border border-[#E8D9B8] dark:border-[#455565] bg-white dark:bg-[#263B4B] flex items-center justify-center text-xs text-[#1F354D] dark:text-[#F5F0E5] shadow-xs hover:scale-105 transition-all cursor-pointer"
              title={isChecklistOpen ? "Collapse Checklist" : "Expand Visited Stops Checklist"}
            >
              {isChecklistOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Interactive Checklist Accordion */}
          {isChecklistOpen && (
            <div className="p-3.5 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2 animate-in fade-in duration-200">
              <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] pb-1">
                {isKm
                  ? "ចុចលើប្រអប់ដើម្បីធីកទីតាំងដែលអ្នកបានដើរដល់ក្នុងក្រុងកំពត៖"
                  : "Tap to toggle which colonial stops you've visited on your walk:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {HERITAGE_STOPS.map((stop) => {
                  const isChecked = visitedStopIds.includes(stop.id);
                  return (
                    <button
                      key={stop.id}
                      type="button"
                      onClick={() => toggleStopVisited(stop.id)}
                      className={`flex items-center space-x-2 p-2 rounded-lg text-left transition-colors cursor-pointer border ${
                        isChecked
                          ? "bg-[#E8D9B8] dark:bg-[#263B4B] border-[#F0A536] text-[#1F354D] dark:text-[#F5F0E5]"
                          : "bg-white dark:bg-[#182A39] border-[#E8D9B8] dark:border-[#455565] text-[#55534B] dark:text-[#C2BBAE]"
                      }`}
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-[#F0A536] shrink-0 fill-current/20" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#BBA77E] dark:text-[#455565] shrink-0" />
                      )}
                      <span className="truncate font-medium">
                        0{stop.order}. {isKm ? stop.khmerTitle : stop.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Share Your Journey Row */}
          <button
            type="button"
            onClick={handleShare}
            className="w-full flex items-center justify-between text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5] hover:text-[#F0A536] transition-colors pt-1 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Share2 className="w-4 h-4 text-[#F0A536]" />
              <span>{isKm ? "ចែករំលែកដំណើររបស់អ្នក" : "Share your journey"}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>
        )}

        {/* ========================================================= */}
        {/* SUBTLE CARD SECTION DIVIDER (only when showing both)      */}
        {/* ========================================================= */}
        {section === "all" && (
          <div className="border-t border-[#E8D9B8] dark:border-[#455565]" />
        )}

        {/* ========================================================= */}
        {/* 2. SOUNDS OF KAMPOT — AUDIO PLAYLIST ONLY (SOUND ONLY)    */}
        {/* ========================================================= */}
        {section !== "track" && (
        <div className="p-5 sm:p-6 space-y-6">
          {/* Header row with 1960s–1970s badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Radio className="w-5 h-5 text-[#F0A536]" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                {isKm ? "សំនៀងក្រុងកំពត (Sounds of Kampot)" : "Sounds of Kampot"}
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#1F354D] dark:text-[#F0A536] bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565]">
              {isKm ? "៨ បទ • តន្ត្រីសំនៀងសុទ្ធ" : "8 Songs • Audio Playlist"}
            </span>
          </div>

          {/* Intro Description */}
          <div className="space-y-2 bg-[#F5F0E5]/60 dark:bg-[#182A39]/60 p-4 rounded-2xl border border-[#E8D9B8] dark:border-[#455565]">
            <h4 className="text-sm font-bold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm
                ? "កម្រងចម្រៀងដែលនាំមកនូវសំនៀង និងការចងចាំនៃក្រុងកំពតសម័យមុន។"
                : "A collection of songs that brings back the sounds and memories of an earlier Kampot."}
            </h4>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed">
              {isKm
                ? "សូមចំណាយពេលមួយភ្លែតដើម្បីស្តាប់តន្ត្រីនៃសម័យកាលមុន។ រួមបញ្ចូលនូវបទចម្រៀងខ្មែរឆ្នើមៗដែលផ្សារភ្ជាប់ជាមួយនឹងប្រវត្តិសាស្ត្រ ទេសភាព និងការចងចាំនៃខេត្តកំពត កម្រងចម្រៀងនេះផ្តល់នូវទិដ្ឋភាពដ៏រស់រវើកនៃសំនៀងពីអតីតកាល។"
                : "Take a moment to listen to the music of another time. Featuring selected Cambodian songs that connect with Kampot's history, landscapes and memories, this collection offers a little glimpse into the sounds of the past."}
            </p>
            <p className="text-xs font-bold text-[#F0A536]">
              {isKm ? "ស្តាប់ ចងចាំ និងស្វែងយល់ពីកំពតតាមរយៈតន្ត្រី។" : "Listen, remember and discover Kampot through music."}
            </p>
          </div>

          {/* ========================================================= */}
          {/* NOW PLAYING SOUND BAR (VINTAGE AUDIO CONTROLS)            */}
          {/* ========================================================= */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#1F354D] dark:bg-[#182A39] text-[#F5F0E5] shadow-lg border border-[#E8D9B8]/40 dark:border-[#455565] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Album Art + Title + Sound Equalizer */}
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className={`w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-[#F0A536] shrink-0 relative flex items-center justify-center ${isPlaying ? "ring-2 ring-[#F0A536]" : ""}`}>
                  <img
                    src="/images/music/cambodian-golden-age-album.png"
                    alt="Vinyl record cover"
                    className={`w-full h-full object-cover ${isPlaying ? "animate-spin" : ""}`}
                    style={{ animationDuration: "6s" }}
                  />
                  <Disc className="absolute w-5 h-5 text-white/80 pointer-events-none" />
                </div>

                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F0A536]">
                      {isPlaying ? (isKm ? "កំពុងចាក់សំនៀង" : "Now Playing Sound") : (isKm ? "ជ្រើសរើសបទចម្រៀង" : "Select a Song")}
                    </span>
                    {isPlaying && (
                      <span className="flex items-center space-x-0.5 h-3">
                        <span className="w-0.5 h-3 bg-[#F0A536] animate-pulse" />
                        <span className="w-0.5 h-2 bg-[#F0A536] animate-pulse delay-75" />
                        <span className="w-0.5 h-3.5 bg-[#F0A536] animate-pulse delay-150" />
                        <span className="w-0.5 h-1.5 bg-[#F0A536] animate-pulse delay-100" />
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#F5F0E5] truncate">
                    {isKm ? currentSong.khmerTitle : currentSong.title}
                  </h4>
                  <p className="text-xs text-[#C2BBAE] truncate">
                    {isKm ? currentSong.khmerArtist : currentSong.artist} • ({currentSong.year})
                  </p>
                </div>
              </div>

              {/* Audio Controls: Prev, Play/Pause, Next */}
              <div className="flex items-center space-x-2 shrink-0 self-center sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrevSong}
                  className="w-9 h-9 rounded-full bg-[#182A39] hover:bg-[#263B4B] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                  title="Previous track"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="w-12 h-12 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] flex items-center justify-center shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 font-bold"
                  title={isPlaying ? "Pause music" : "Play music"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNextSong}
                  className="w-9 h-9 rounded-full bg-[#182A39] hover:bg-[#263B4B] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                  title="Next track"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recommendation info pill */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C2BBAE]">
              <span className="truncate">
                📍 {isKm ? currentSong.khmerWalkRecommendation : currentSong.walkRecommendation}
              </span>
              <a
                href={currentSong.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F0A536] transition-colors flex items-center space-x-1 shrink-0 ml-2"
                title="View original audio source"
              >
                <span>YouTube</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Compact Audio Player (Plays real audio without taking over the page) */}
            {isPlaying && (
              <div className="pt-2 animate-in fade-in space-y-2">
                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black aspect-[16/9] sm:aspect-[21/9] max-h-48 shadow-lg">
                  <iframe
                    key={currentSong.youtubeId}
                    src={`https://www.youtube.com/embed/${currentSong.youtubeId}?autoplay=1&enablejsapi=1&playsinline=1`}
                    title={`${currentSong.title} audio stream`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#C2BBAE] px-1">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isKm ? "កំពុងចាក់សំនៀងដើម៖" : "Streaming official audio:"} {currentSong.title}</span>
                  </span>
                  <a
                    href={currentSong.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F0A536] hover:underline font-bold inline-flex items-center space-x-1"
                  >
                    <span>{isKm ? "ស្តាប់ពេញលេញលើ YouTube" : "Listen on YouTube"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* THE 8-TRACK SOUND PLAYLIST (DIRECT IN-PAGE LIST)           */}
          {/* ========================================================= */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                {isKm ? "បញ្ជីចម្រៀងទាំង ៨ បទ (ចុចដើម្បីស្តាប់ភ្លេង)" : "8-Song Playlist (Tap any song to play)"}
              </span>
              <button
                type="button"
                onClick={() => setIsArtistsModalOpen(true)}
                className="text-xs font-semibold text-[#1F354D] dark:text-[#F0A536] hover:underline cursor-pointer flex items-center space-x-1"
              >
                <Disc className="w-3.5 h-3.5" />
                <span>{isKm ? "អំពីតារាចម្រៀង" : "Featured Artists"}</span>
              </button>
            </div>

            <div className="divide-y divide-[#E8D9B8]/50 dark:divide-[#455565] border border-[#E8D9B8] dark:border-[#455565] rounded-2xl overflow-hidden bg-white dark:bg-[#182A39]/80 shadow-xs">
              {playlist.map((song, idx) => {
                const isSelected = currentSong.id === song.id;
                const isCurrentlyPlaying = isSelected && isPlaying;

                return (
                  <div
                    key={song.id}
                    onClick={() => handleSelectSong(song)}
                    className={`p-3 sm:p-3.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#E8D9B8]/40 dark:bg-[#263B4B]/80 text-[#1F354D] dark:text-[#F5F0E5]"
                        : "hover:bg-[#F5F0E5]/60 dark:hover:bg-[#263B4B]/40"
                    }`}
                  >
                    {/* Track Number & Title */}
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isCurrentlyPlaying
                          ? "bg-[#F0A536] text-[#1F354D]"
                          : "bg-[#F5F0E5] dark:bg-[#263B4B] text-[#55534B] dark:text-[#C2BBAE]"
                      }`}>
                        {isCurrentlyPlaying ? (
                          <span className="flex items-center space-x-0.5 h-2.5">
                            <span className="w-0.5 h-2.5 bg-[#1F354D] animate-pulse" />
                            <span className="w-0.5 h-1.5 bg-[#1F354D] animate-pulse delay-75" />
                            <span className="w-0.5 h-2 bg-[#1F354D] animate-pulse delay-150" />
                          </span>
                        ) : (
                          <span>{idx + 1}</span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className={`font-bold text-xs sm:text-sm truncate ${
                            isSelected ? "text-[#B77B5B] dark:text-[#F0A536]" : "text-[#1F354D] dark:text-[#F5F0E5]"
                          }`}>
                            {idx + 1}. {isKm ? song.khmerTitle : song.title}
                          </span>
                          <span className="text-[10px] text-[#55534B] dark:text-[#C2BBAE] hidden sm:inline">
                            ({song.year})
                          </span>
                        </div>
                        <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] truncate">
                          {isKm ? song.khmerArtist : song.artist} • {isKm ? song.khmerGenre : song.genre}
                        </p>
                      </div>
                    </div>

                    {/* Play/Pause Button on Right */}
                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="text-[10px] text-[#55534B] dark:text-[#C2BBAE] font-mono hidden md:inline">
                        {song.duration}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectSong(song);
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-105 cursor-pointer ${
                          isCurrentlyPlaying
                            ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
                            : "bg-[#F5F0E5] dark:bg-[#263B4B] hover:bg-[#F0A536] hover:text-[#1F354D] text-[#1F354D] dark:text-[#F5F0E5]"
                        }`}
                        title={isCurrentlyPlaying ? "Pause" : "Play sound"}
                      >
                        {isCurrentlyPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        )}

        {/* ========================================================= */}
        {/* SUBTLE CARD SECTION DIVIDER                               */}
        {/* ========================================================= */}
        <div className="border-t border-[#E8D9B8] dark:border-[#455565]" />

        {/* ========================================================= */}
        {/* 3. SHARE YOUR JOURNEY                                     */}
        {/* ========================================================= */}
        <button
          type="button"
          onClick={handleShare}
          className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-xs font-semibold text-[#1F354D] dark:text-[#F5F0E5] hover:bg-[#E8D9B8]/30 dark:hover:bg-[#182A39]/50 transition-colors group cursor-pointer"
        >
          <div className="flex items-center space-x-2.5">
            <Share2 className="w-4 h-4 text-[#F0A536] stroke-[1.75]" />
            <span className="group-hover:text-[#F0A536] transition-colors">
              {isKm ? "ចែករំលែកដំណើររបស់អ្នក" : "Share your journey"}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#55534B]/60 dark:text-[#C2BBAE]/60 group-hover:text-[#F0A536] transition-colors" />
        </button>
      </div>

      {/* Share Toast */}
      {shareToast && (
        <div className="p-3 rounded-xl bg-[#1F354D] text-[#F5F0E5] border border-[#F0A536] text-xs shadow-lg text-center animate-in fade-in duration-200">
          {shareToast}
        </div>
      )}

      {/* Footnote below Card */}
      <div className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] flex items-center justify-between px-1">
        <span>
          {dataMode === "sample"
            ? isKm
              ? "ការបង្ហាញគំរូជាមួយនឹងទិន្នន័យដើរគំរូ។"
              : "Illustrative design with sample walking data."
            : isKm
            ? "ទិន្នន័យដំណើរពិតប្រាកដរបស់អ្នក រក្សាទុកក្នុង browser។"
            : "Live tracking mode: your progress is saved locally on your device."}
        </span>
        <button
          type="button"
          onClick={() => setDataMode(dataMode === "sample" ? "live" : "sample")}
          className="hover:underline font-semibold text-[#1F354D] dark:text-[#F0A536] cursor-pointer"
        >
          {dataMode === "sample" ? (isKm ? "ប្តូរទៅជាក់ស្តែង" : "Switch to live") : isKm ? "ប្តូរទៅគំរូ" : "Switch to sample"}
        </button>
      </div>

      {/* ========================================================= */}
      {/* MODAL: FEATURED ARTISTS                                   */}
      {/* ========================================================= */}
      {isArtistsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F0E5] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl p-5 sm:p-6 space-y-4 text-[#1F354D] dark:text-[#F5F0E5]">
            <div className="flex items-center justify-between border-b border-[#E8D9B8] dark:border-[#455565] pb-3">
              <div className="flex items-center space-x-2">
                <Disc className="w-5 h-5 text-[#F0A536]" />
                <h3 className="text-base sm:text-lg font-bold">
                  {isKm ? "តារាចម្រៀងសម័យមាសកម្ពុជា" : "Legends of the Cambodian Golden Age"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsArtistsModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white dark:bg-[#182A39] flex items-center justify-center text-[#1F354D] dark:text-[#F5F0E5] hover:opacity-80 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5">
              {FEATURED_ARTISTS.map((artist) => (
                <div
                  key={artist.id}
                  className="p-4 rounded-xl bg-white dark:bg-[#18293B] border border-[#E8D9B8] dark:border-[#455565] space-y-2.5 shadow-xs"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-900 border border-[#F0A536] shrink-0">
                      <img
                        src={artist.photoUrl}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1F354D] dark:text-[#F5F0E5]">
                        {isKm ? artist.khmerName : artist.name}
                      </h4>
                      <p className="text-xs text-[#B77B5B] dark:text-[#F0A536] font-semibold">
                        {isKm ? artist.khmerTitle : artist.title} ({artist.activeYears})
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
                    {isKm ? artist.khmerBio : artist.bio}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                    <span className="font-semibold text-[#55534B] dark:text-[#C2BBAE]">
                      {isKm ? "បទល្បីៗ៖" : "Notable tracks:"}
                    </span>
                    {artist.notableTracks.map((trk, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full bg-[#E8D9B8] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5]"
                      >
                        {trk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E8D9B8] dark:border-[#455565] text-center">
              <button
                type="button"
                onClick={() => setIsArtistsModalOpen(false)}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#1F354D] dark:bg-[#F0A536] text-white dark:text-[#1F354D] hover:bg-[#F0A536] hover:text-[#1F354D] transition-colors cursor-pointer"
              >
                {isKm ? "រួចរាល់" : "Done"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
