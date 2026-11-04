"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeritageStop, HERITAGE_STOPS } from "@/data/stops";
import { GOLDEN_AGE_SONGS, GoldenAgeSong } from "@/data/music";
import { vintagePlayer } from "@/utils/vintageAudioSynthesizer";
import WalkingAndMusicExperience from "@/components/WalkingAndMusicExperience";
import AudioPlayer from "@/components/AudioPlayer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SeahorseGuide from "@/components/SeahorseGuide";
import PufferfishMascot, { PufferfishEmotion } from "@/components/PufferfishMascot";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Compass,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Camera,
  DoorOpen,
  Sparkles,
  CheckCircle,
  CheckCircle2,
  BookOpen,
  Star,
  Footprints,
  Clock,
  Navigation,
  Bed,
  Waves,
  Utensils,
  Wine,
  Maximize2,
  X,
  History,
  Calendar,
  Columns2,
  SlidersHorizontal,
  Images,
  Music,
  Headphones,
  Disc,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Layers,
  ShieldCheck
} from "lucide-react";

interface StopDetailViewProps {
  stop: HeritageStop;
  prevStop: HeritageStop | null;
  nextStop: HeritageStop | null;
}

export default function StopDetailView({
  stop,
  prevStop,
  nextStop,
}: StopDetailViewProps) {
  const { language, t } = useLanguage();
  const isKm = language === "km";
  const [compareMode, setCompareMode] = useState<"sideBySide" | "slider">("sideBySide");
  const [galleryFilter, setGalleryFilter] = useState<"all" | "before" | "after">("all");
  const [isCitationsOpen, setIsCitationsOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<{
    url: string;
    title: string;
    caption: string;
    badge: string;
  } | null>(null);

  // Recommended Golden Age song for this specific stop
  const pairedSong: GoldenAgeSong =
    GOLDEN_AGE_SONGS.find((s) => s.recommendedStopId === stop.id) ||
    GOLDEN_AGE_SONGS[0];

  const [isSongPlaying, setIsSongPlaying] = useState(false);

  // Auto record stop as visited in localStorage for Walking Journey tracking
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("kampot_visited_stops");
        const list: string[] = saved ? JSON.parse(saved) : [];
        if (!list.includes(stop.id)) {
          const updated = [...list, stop.id];
          localStorage.setItem("kampot_visited_stops", JSON.stringify(updated));
        }
      } catch (e) {}
    }
  }, [stop.id]);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      vintagePlayer.pause();
    };
  }, []);

  const handleToggleSong = () => {
    if (isSongPlaying) {
      vintagePlayer.pause();
      setIsSongPlaying(false);
    } else {
      vintagePlayer.playSong(pairedSong);
      setIsSongPlaying(true);
    }
  };

  const title = isKm ? stop.khmerTitle : stop.title;
  const subtitle = isKm ? stop.khmerSubtitle : stop.subtitle;
  const role = isKm ? stop.khmerRole : stop.role;
  const summary = isKm ? stop.khmerSummary : stop.summary;
  const era = isKm ? stop.khmerHistoricalEra : stop.historicalEra;
  const address = isKm ? stop.khmerAddress : stop.address;
  const accessStatus = isKm ? stop.khmerAccessStatus : stop.accessStatus;
  const accessNotes = isKm ? stop.khmerAccessNotes : stop.accessNotes;
  const photoNotes = isKm ? stop.khmerPhotographyNotes : stop.photographyNotes;
  const story = isKm ? stop.khmerHistoricalStory : stop.historicalStory;
  const storyFocus = isKm ? stop.khmerStoryFocus : stop.storyFocus;
  const walkingDist = isKm ? `${stop.distanceFromPrev} ពីទីតាំងមុន` : `${stop.distanceFromPrev} from prev.`;
  const walkingTime = isKm ? stop.khmerWalkingTimeFromPrev : stop.walkingTimeFromPrev;
  const visitTime = isKm ? stop.khmerEstimatedVisitTime : stop.estimatedVisitTime;

  const primaryPhoto =
    stop.archivalComparison.modernImageUrl || stop.archivalComparison.archivalImageUrl;

  // Archival (Before) images FIRST, then Modern/Interior (After) images SECOND
  const archivalItems = (stop.archivalGallery || []).map((item) => ({
    ...item,
    phase: "before" as const,
    phaseBadge: isKm ? "មុន (សម័យដើម)" : "BEFORE",
    badgeLabel: isKm
      ? `មុន • ${item.khmerTag || item.tag || "បណ្ណសារ"}`
      : `BEFORE • ${item.tag || "ARCHIVAL"}`,
  }));

  const modernItems = (stop.interiorGallery || []).map((item) => ({
    ...item,
    phase: "after" as const,
    phaseBadge: isKm ? "ក្រោយ (បច្ចុប្បន្នភាព)" : "AFTER",
    badgeLabel: isKm
      ? `ក្រោយ • ${item.khmerTag || item.tag || "បច្ចុប្បន្ន"}`
      : `AFTER • ${item.tag || "RESTORED"}`,
  }));

  const allGalleryItems = [...archivalItems, ...modernItems];
  const displayedGalleryItems =
    galleryFilter === "before"
      ? archivalItems
      : galleryFilter === "after"
      ? modernItems
      : allGalleryItems;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 sm:space-y-14 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* 1. TOP MINIMAL NAVIGATION                                 */}
      {/* ========================================================= */}
      <nav className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565] text-xs">
        <Link
          href="/map"
          className="inline-flex items-center space-x-1.5 text-[#1F354D] dark:text-[#F5F0E5]/85 hover:text-[#B77B5B] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("backToMap")}</span>
        </Link>

        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline-flex items-center space-x-1 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isKm ? `ទីតាំងទី ០${stop.order} នៃ ${HERITAGE_STOPS.length}` : `Stop 0${stop.order} of ${HERITAGE_STOPS.length}`}</span>
          </span>

          <a
            href={stop.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] shadow-xs hover:border-[#F0A536] transition-all"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "ទិសដៅ Google Maps" : "Google Maps"}</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* 2. HEADER: CLEAN & OPEN ON LIGHT BACKGROUND (NO BOX)     */}
      {/* ========================================================= */}
      <header className="space-y-4">
        {/* Category Pill & Tour Position */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
            <span>{isKm ? `ទីតាំងទី ០${stop.order} នៃ ${HERITAGE_STOPS.length}` : `Stop 0${stop.order} of ${HERITAGE_STOPS.length}`}</span>
            <span>•</span>
            <span>{isKm ? stop.khmerPlaceCategory : stop.placeCategory}</span>
          </div>

          <Link
            href="/journey"
            className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold hover:scale-102 transition-transform"
            title="View your connected Walking & Music Experience"
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>{isKm ? `កត់ត្រាក្នុងដំណើរថ្មើរជើង (ទីតាំងទី ០${stop.order}) • មើលដំណើរ →` : `Logged in Walking Journey (Stop 0${stop.order}) • View Journey →`}</span>
          </Link>
        </div>

        {/* Title */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5] leading-tight ${
            isKm ? "font-khmer" : "font-serif-heading"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-light max-w-3xl">
          {subtitle}
        </p>

        {/* Inline Metadata Row on Light Background */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-[#1F354D] dark:text-[#F5F0E5]/85 font-medium">
          <span className="inline-flex items-center space-x-1">
            <Footprints className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{walkingDist}</span>
          </span>
          <span>•</span>
          <span className="inline-flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{walkingTime}</span>
          </span>
          <span>•</span>
          <span>{isKm ? `រយៈពេលទស្សនា៖ ${visitTime}` : `Visit ~${visitTime}`}</span>
          <span>•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] text-emerald-700 dark:text-emerald-400 font-bold shadow-xs">
            {accessStatus}
          </span>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2B. LIVE WALKING LOCATION TRACK & SOUNDTRACK COMPANION    */}
      {/* ========================================================= */}
      <section className="p-4 sm:p-5 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-md space-y-4">
        {/* Top Status & Next Leg Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0A536] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B77B5B] dark:text-[#F0A536]">
                {isKm ? `ទីតាំងដើរទី ០${stop.order} នៃ ${HERITAGE_STOPS.length} • កំពុងដំណើរការ` : `LIVE LOCATION TRACK • STOP 0${stop.order} OF 06`}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F0A536] font-bold">
                {Math.round((stop.order / HERITAGE_STOPS.length) * 100)}% {isKm ? "នៃផ្លូវដើរ" : "of walk"}
              </span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-medium">
              {nextStop
                ? isKm
                  ? `ទីតាំងបន្ទាប់៖ ${nextStop.khmerTitle} (${nextStop.distanceFromPrev} • ${nextStop.khmerWalkingTimeFromPrev})`
                  : `Next walking leg: ${nextStop.title} (${nextStop.distanceFromPrev} • ${nextStop.walkingTimeFromPrev})`
                : isKm
                ? "ទីតាំងចុងក្រោយនៃដំណើរថ្មើរជើង! ត្រៀមទស្សនារាត្រីសមោសរបិទបញ្ចប់ដំណើរ"
                : "Final stop of the walking route! Ready for Tour Grand Finale: Kampot by Night"}
            </p>
          </div>

          {/* Quick Step Advance Button */}
          {nextStop ? (
            <Link
              href={`/stops/${nextStop.id}`}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1F354D] dark:bg-[#F0A536] text-white dark:text-[#182A39] hover:bg-[#162738] dark:hover:bg-[#e09426] text-xs font-extrabold shadow-sm hover:scale-102 transition-all shrink-0 self-start sm:self-auto border border-[#1F354D] dark:border-[#F0A536]"
            >
              <span>{isKm ? `ដើរទៅកាន់ទីតាំងបន្ទាប់ (${nextStop.order}) →` : `Walk to Stop 0${nextStop.order} →`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              href="/finale"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] text-xs font-extrabold shadow-md hover:scale-105 transition-all shrink-0 self-start sm:self-auto border border-[#F0A536]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isKm ? "ទស្សនារាត្រីសមោសរបិទបញ្ចប់ដំណើរ →" : "View Tour Grand Finale →"}</span>
            </Link>
          )}
        </div>

        {/* Interactive 6-Stop Route Track Progress Bar */}
        <div className="pt-1">
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {HERITAGE_STOPS.map((s) => {
              const isPast = s.order < stop.order;
              const isCurrent = s.order === stop.order;
              return (
                <Link
                  key={s.id}
                  href={`/stops/${s.id}`}
                  className={`p-2 rounded-xl border text-center transition-all group flex flex-col items-center justify-between ${
                    isCurrent
                      ? "bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] border-[#1F354D] dark:border-[#F0A536] shadow-md ring-2 ring-[#F0A536]/40"
                      : isPast
                      ? "bg-[#E8D9B8]/60 dark:bg-[#263B4B]/80 text-[#1F354D] dark:text-[#F5F0E5] border-[#BBA77E]/60 dark:border-[#455565] hover:border-[#F0A536]"
                      : "bg-[#F5F0E5]/50 dark:bg-[#182A39]/50 text-[#55534B]/60 dark:text-[#C2BBAE]/50 border-dashed border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536]"
                  }`}
                  title={`${s.order}. ${isKm ? s.khmerTitle : s.title}`}
                >
                  <span className="text-[10px] font-black">
                    {isPast ? "✓ 0" + s.order : "0" + s.order}
                  </span>
                  <span className="text-[9px] font-semibold truncate max-w-full hidden sm:block pt-0.5">
                    {isKm ? s.khmerTitle.split(" ")[0] : s.title.split(" ")[0]}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Integrated Walking Soundtrack Player for this stop */}
        <div className="pt-2 border-t border-[#E8D9B8] dark:border-[#455565] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F5F0E5]/60 dark:bg-[#182A39]/60 p-3 sm:p-3.5 rounded-2xl">
          <div className="flex items-center space-x-3 min-w-0">
            <div className={`w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-[#E8D9B8] dark:border-[#455565] shrink-0 relative flex items-center justify-center ${isSongPlaying ? "ring-2 ring-[#F0A536]" : ""}`}>
              <img
                src={pairedSong.coverImage || "/images/music/cambodian-golden-age-album.png"}
                alt="Vinyl record cover"
                className={`w-full h-full object-cover ${isSongPlaying ? "animate-spin" : ""}`}
                style={{ animationDuration: "6s" }}
              />
              <Disc className="absolute w-4 h-4 text-white/80 pointer-events-none" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center space-x-1.5">
                <Music className="w-3.5 h-3.5 text-[#F0A536] shrink-0" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                  {isKm ? "តន្ត្រីសម្រាប់ដំណើរថ្មើរជើងទីតាំងនេះ" : "Soundtrack for this walking leg"}
                </span>
                <span className="text-[10px] text-[#55534B] dark:text-[#C2BBAE]">({pairedSong.year})</span>
              </div>
              <p className="text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5] truncate pt-0.5">
                {isKm ? pairedSong.khmerTitle : pairedSong.title} — {isKm ? pairedSong.khmerArtist : pairedSong.artist}
              </p>
              <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] truncate hidden sm:block">
                {isKm ? pairedSong.khmerWalkRecommendation : pairedSong.walkRecommendation}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={handleToggleSong}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-extrabold shadow-sm transition-all cursor-pointer ${
                isSongPlaying
                  ? "bg-[#1F354D] text-[#F0A536] border border-[#F0A536]"
                  : "bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] border border-[#F0A536]"
              }`}
            >
              {isSongPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isSongPlaying ? (isKm ? "ផ្អាកសំនៀង" : "Pause Audio") : (isKm ? "ស្តាប់សំនៀង" : "Play Sound")}</span>
            </button>
            <a
              href={pairedSong.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] hover:bg-[#E8D9B8] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] transition-all"
              title="Open audio source on YouTube"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Compact Audio Player for Paired Walking Track */}
        {isSongPlaying && (
          <div className="pt-2 space-y-2 animate-in fade-in">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8D9B8] dark:border-[#455565] bg-black aspect-[16/9] sm:aspect-[21/9] max-h-48 shadow-md">
              <iframe
                key={pairedSong.youtubeId}
                src={`https://www.youtube.com/embed/${pairedSong.youtubeId}?autoplay=1&enablejsapi=1&playsinline=1`}
                title={`${pairedSong.title} audio stream`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#55534B] dark:text-[#C2BBAE] px-1">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isKm ? "កំពុងចាក់សំនៀងដើមពី YouTube" : "Streaming official audio from YouTube"}</span>
              </span>
              <a
                href={pairedSong.youtubeUrl}
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
      </section>

      {/* ========================================================= */}
      {/* 3. HERO IMAGE: DRAMATIC FULL-BLEED (NO NAVY CARD/BORDER)  */}
      {/* ========================================================= */}
      <section className="space-y-2">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group bg-slate-950 aspect-[16/10] sm:aspect-[21/9]">
          <img
            src={primaryPhoto}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
          />
          {/* Subtle bottom gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

          {/* Fullscreen Viewer Button */}
          <button
            type="button"
            onClick={() =>
              setActiveModalImage({
                url: primaryPhoto,
                title: title,
                caption: summary,
                badge: isKm ? `ទីតាំងទី ០${stop.order}` : `Stop 0${stop.order}`
              })
            }
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-[#B77B5B] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer"
            title={isKm ? "ពង្រីកពេញអេក្រង់" : "View Fullscreen"}
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Bottom Floating Architecture Label */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-semibold drop-shadow flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
              {role}
            </span>
            <span className="text-[11px] opacity-80 hidden sm:inline-block">
              {isKm ? "ចុចដើម្បីពង្រីករូបថត" : "Tap to expand architectural photo"}
            </span>
          </div>
        </div>

        {/* Narrative Caption directly on Light Background */}
        <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] italic pt-1 leading-relaxed">
          {summary}
        </p>
      </section>

      {/* ========================================================= */}
      {/* 4. NARRATIVE & INTEGRATED AUDIO FLOW                      */}
      {/* ========================================================= */}
      <section className="space-y-6">
        <div className="space-y-2 border-b border-[#E8D9B8] dark:border-[#455565] pb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B77B5B] dark:text-[#F0A536]">
            {isKm ? "ប្រវត្តិសាស្ត្រ និងរឿងរ៉ាវ" : "Historical Narrative"}
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] ${
              isKm ? "font-khmer" : "font-serif-heading"
            }`}
          >
            {storyFocus}
          </h2>
        </div>

        {/* Opening Narrative Paragraph on Light Canvas */}
        {story.length > 0 && (
          <p className="text-base sm:text-lg text-[#1F354D]/90 dark:text-[#F5F0E5]/90 leading-relaxed font-normal">
            {story[0]}
          </p>
        )}

        {/* ========================================================= */}
        {/* PROMINENT AUDIO PLAYER BANNER (SOFT CYAN ACCENTS #38BDF8) */}
        {/* ========================================================= */}
        <div className="my-6">
          <AudioPlayer
            title={stop.audioGuide.title}
            khmerTitle={stop.audioGuide.khmerTitle}
            duration={stop.audioGuide.duration}
            approxSeconds={stop.audioGuide.approxSeconds}
            transcript={stop.audioGuide.transcript}
            khmerTranscript={stop.audioGuide.khmerTranscript}
            narrationText={stop.audioGuide.narrationText}
            khmerNarrationText={stop.audioGuide.khmerNarrationText}
            variant="immersiveCyan"
          />

          {/* Music Recommendation Callout below Audio */}
          <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] flex items-center justify-between text-xs text-[#1F354D] dark:text-[#F5F0E5]">
            <div className="flex items-center space-x-2.5 min-w-0">
              <Music className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <div className="truncate">
                <span className="font-bold text-[#B77B5B] dark:text-[#F0A536] mr-1.5">
                  {isKm ? "សំនៀងសម័យមាសណែនាំ៖" : "Walk pairing:"}
                </span>
                <span className="font-medium truncate">
                  {isKm ? pairedSong.khmerTitle : pairedSong.title} — {isKm ? pairedSong.khmerArtist : pairedSong.artist}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleSong}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1F354D] text-[#38BDF8] border border-[#38BDF8]/40 hover:bg-[#38BDF8] hover:text-[#0F172A] text-xs font-bold transition-all shrink-0 ml-2"
            >
              {isSongPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isSongPlaying ? (isKm ? "ផ្អាក" : "Pause") : isKm ? "ចាក់ចម្រៀង" : "Play song"}</span>
            </button>
          </div>
        </div>

        {/* Subsequent Narrative Paragraphs on Light Canvas */}
        {story.length > 1 && (
          <div className="space-y-4 text-base sm:text-lg text-[#1F354D]/90 dark:text-[#F5F0E5]/90 leading-relaxed font-normal">
            {story.slice(1).map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* 5A. HISTORICAL TIMELINE FIRST (FULL-WIDTH LAYOUT)         */}
      {/* ========================================================= */}
      <section className="space-y-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
            <History className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
            <span>{isKm ? "បន្ទាត់ពេលវេលាប្រវត្តិសាស្ត្រ" : "Historical Timeline & Evolution"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? `ដំណាក់កាលប្រវត្តិសាស្ត្រសំខាន់ៗនៃ ${title}` : `Key Eras & Architectural Milestones`}
          </h2>
          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] font-normal">
            {isKm
              ? "ដំណើរវិវត្តន៍តាមសម័យកាលចាប់ពីដើមកំណើត សម័យអាណានិគម រហូតដល់បច្ចុប្បន្នភាព"
              : "Tracing origins, colonial planning, urban transformations, and sensitive modern reuse"}
          </p>
        </div>

        {/* Full-width Architectural Timeline Card */}
        <div className="rounded-3xl bg-[#1F354D] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] p-6 sm:p-8 shadow-xl text-[#F5F0E5] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F0A536]">
                {isKm ? "កាលប្បវត្តិបេតិកភណ្ឌ" : "Heritage Chronology"}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {title}
              </h3>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#182A39] border border-white/20 text-xs font-semibold text-[#F0A536]">
              <span>{(stop.historicalTimeline || []).length} {isKm ? "ដំណាក់កាលកត់ត្រា" : "Documented Eras"}</span>
            </div>
          </div>

          {/* Full-width Responsive Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {(stop.historicalTimeline || []).map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#182A39]/80 border border-white/10 hover:border-[#F0A536] transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-[#F0A536] text-[#1F354D] shadow-xs group-hover:scale-105 transition-transform">
                      {isKm ? item.khmerYear : item.year}
                    </span>
                    <span className="text-[10px] font-bold text-[#F0A536] uppercase tracking-wider text-right">
                      {isKm ? item.khmerEra : item.era}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug pt-1">
                    {isKm ? item.khmerTitle : item.title}
                  </h4>
                  <p className="text-xs text-[#C2BBAE] leading-relaxed font-normal">
                    {isKm ? item.khmerDescription : item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 text-[10px] text-[#F0A536]/80 font-medium flex items-center justify-between">
                  <span>Milestone 0{idx + 1}</span>
                  <span>•</span>
                  <span>{isKm ? "ផ្ទៀងផ្ទាត់" : "Verified"}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between text-xs text-[#C2BBAE] gap-2">
            <span className="text-[#F0A536] font-semibold flex items-center space-x-1.5">
              <span>✓</span>
              <span>{isKm ? "ផ្ទៀងផ្ទាត់ដោយបណ្ណសារប្រវត្តិសាស្ត្រផ្លូវការ និងកំណត់ត្រាមន្ទីរបេតិកភណ្ឌ" : "Verified by municipal, colonial & cultural archives"}</span>
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5B. THEN & NOW COMPARISON LATER: FULL-WIDTH IMAGE SHOWCASE */}
      {/* ========================================================= */}
      <section className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
              <Columns2 className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
              <span>{isKm ? "ការប្រៀបធៀបស្ថាបត្យកម្ម" : "Archival vs. Modern Facade"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "មុន និងក្រោយការកែច្នៃ (Then & Now)" : "Then & Now Comparison: Archival vs. Present"}
            </h2>
            <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] font-normal">
              {isKm
                ? "ប្រៀបធៀបរូបថតបណ្ណសារប្រវត្តិសាស្ត្រ ជាមួយនឹងទិដ្ឋភាពអភិរក្ស និងកែច្នៃជាក់ស្តែងបច្ចុប្បន្ន"
                : "Large-format visual comparison between colonial-era streetscapes and modern preservation"}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setCompareMode("sideBySide")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                compareMode === "sideBySide"
                  ? "bg-[#1F354D] text-[#F5F0E5] dark:bg-[#F0A536] dark:text-[#1F354D] shadow-xs"
                  : "text-[#1F354D] dark:text-[#F5F0E5] hover:text-[#F0A536]"
              }`}
            >
              {isKm ? "ទន្ទឹមគ្នា (Side-by-Side)" : "Side-by-Side"}
            </button>
            <button
              type="button"
              onClick={() => setCompareMode("slider")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                compareMode === "slider"
                  ? "bg-[#1F354D] text-[#F5F0E5] dark:bg-[#F0A536] dark:text-[#1F354D] shadow-xs"
                  : "text-[#1F354D] dark:text-[#F5F0E5] hover:text-[#F0A536]"
              }`}
            >
              {isKm ? "អូសប្រៀបធៀប (Interactive Slider)" : "Interactive Slider"}
            </button>
          </div>
        </div>

        {/* Full-Width Large Image Container Card */}
        <div className="rounded-3xl bg-[#1F354D] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] p-5 sm:p-8 shadow-xl space-y-5 text-[#F5F0E5]">
          
          {compareMode === "sideBySide" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Archival Before (Full Column Width!) */}
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/15 aspect-[16/11] sm:aspect-[4/3] group shadow-lg">
                  <img
                    src={stop.archivalComparison.archivalImageUrl}
                    alt={stop.archivalComparison.archivalYear}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold bg-[#F0A536] text-[#1F354D] shadow-md tracking-wider">
                    {isKm ? "មុន (សម័យដើម)" : "BEFORE • ARCHIVAL"}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveModalImage({
                        url: stop.archivalComparison.archivalImageUrl,
                        title: isKm ? stop.archivalComparison.khmerArchivalYear : stop.archivalComparison.archivalYear,
                        caption: isKm ? stop.archivalComparison.khmerArchivalCaption : stop.archivalComparison.archivalCaption,
                        badge: "BEFORE • ARCHIVAL"
                      })
                    }
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur shadow-md transition-all cursor-pointer"
                    title={isKm ? "ពង្រីក" : "Expand"}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-black/75 backdrop-blur-sm px-3 py-2 rounded-xl text-white font-medium">
                    {isKm ? stop.archivalComparison.khmerArchivalYear : stop.archivalComparison.archivalYear}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#C2BBAE] leading-relaxed pt-1">
                  {isKm ? stop.archivalComparison.khmerArchivalCaption : stop.archivalComparison.archivalCaption}
                </p>
              </div>

              {/* Modern After (Full Column Width!) */}
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/15 aspect-[16/11] sm:aspect-[4/3] group shadow-lg">
                  <img
                    src={stop.archivalComparison.modernImageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-md tracking-wider">
                    {isKm ? "ក្រោយ (បច្ចុប្បន្នភាព)" : "AFTER • PRESENT DAY"}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveModalImage({
                        url: stop.archivalComparison.modernImageUrl,
                        title: title,
                        caption: isKm ? stop.archivalComparison.khmerModernCaption : stop.archivalComparison.modernCaption,
                        badge: "AFTER • PRESENT DAY"
                      })
                    }
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur shadow-md transition-all cursor-pointer"
                    title={isKm ? "ពង្រីក" : "Expand"}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-black/75 backdrop-blur-sm px-3 py-2 rounded-xl text-white font-medium">
                    {isKm ? "ទិដ្ឋភាពបច្ចុប្បន្នភាព" : "Present Day Preservation"}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#C2BBAE] leading-relaxed pt-1">
                  {isKm ? stop.archivalComparison.khmerModernCaption : stop.archivalComparison.modernCaption}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-white/20 my-2">
              <BeforeAfterSlider
                archivalImageUrl={stop.archivalComparison.archivalImageUrl}
                archivalYear={stop.archivalComparison.archivalYear}
                khmerArchivalYear={stop.archivalComparison.khmerArchivalYear}
                archivalCaption={stop.archivalComparison.archivalCaption}
                khmerArchivalCaption={stop.archivalComparison.khmerArchivalCaption}
                modernImageUrl={stop.archivalComparison.modernImageUrl}
                modernCaption={stop.archivalComparison.modernCaption}
                khmerModernCaption={stop.archivalComparison.khmerModernCaption}
                transformationNote={stop.archivalComparison.transformationNote}
                khmerTransformationNote={stop.archivalComparison.khmerTransformationNote}
                heightClass="h-72 sm:h-96 lg:h-[460px]"
              />
            </div>
          )}

          {/* Transformation Architectural Note */}
          <div className="pt-3 border-t border-white/15 text-xs sm:text-sm text-[#C2BBAE] leading-relaxed">
            <strong className="text-[#F0A536] font-bold">
              {isKm ? "កំណត់សម្គាល់ស្ថាបត្យកម្ម & ការកែច្នៃ៖ " : "Architectural Transformation Note: "}
            </strong>
            <span>
              {isKm ? stop.archivalComparison.khmerTransformationNote : stop.archivalComparison.transformationNote}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BEFORE & AFTER GALLERY: ARCHIVAL FIRST, THEN RESTORED  */}
      {/* ========================================================= */}
      {allGalleryItems.length > 0 && (
        <section className="space-y-5 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-[#E8D9B8] dark:border-[#455565]">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B77B5B] dark:text-[#F0A536]">
                {isKm ? "កម្រងរូបថតមុន និងក្រោយ • Before & After" : "Archival & Restored Gallery • Before & After"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                {isKm ? `ទិដ្ឋភាពប្រវត្តិសាស្ត្រ និងការកែច្នៃនៃ ${title}` : `Inside ${title}: Before & After Showcase`}
              </h2>
              <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] font-normal">
                {isKm
                  ? "រូបថតដើមពីបណ្ណសារ (មុន) បង្ហាញជាមុន បន្ទាប់មកជារូបភាពស្ថាបត្យកម្មកែច្នៃបច្ចុប្បន្នភាព (ក្រោយ)"
                  : "Archival documentary photos (Before) displayed first, followed by modern restored architectural details (After)."}
              </p>
            </div>

            {/* Before / After Filter Controls */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] shadow-xs self-start sm:self-auto text-xs font-bold">
              <button
                type="button"
                onClick={() => setGalleryFilter("all")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  galleryFilter === "all"
                    ? "bg-[#1F354D] text-white dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs"
                    : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#1F354D]"
                }`}
              >
                {isKm ? `ទាំងអស់ (${allGalleryItems.length})` : `All (${allGalleryItems.length})`}
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter("before")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  galleryFilter === "before"
                    ? "bg-[#F0A536] text-[#1F354D] shadow-xs font-extrabold"
                    : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#F0A536]"
                }`}
              >
                {isKm ? `មុន • Archival (${archivalItems.length})` : `Before: Archival (${archivalItems.length})`}
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter("after")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  galleryFilter === "after"
                    ? "bg-emerald-600 text-white shadow-xs font-extrabold"
                    : "text-[#55534B] dark:text-[#C2BBAE] hover:text-emerald-600"
                }`}
              >
                {isKm ? `ក្រោយ • Restored (${modernItems.length})` : `After: Restored (${modernItems.length})`}
              </button>
            </div>
          </div>

          {/* Masonry / Showcase Grid directly on Light Canvas (No Navy Box!) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {displayedGalleryItems.map((item, idx) => {
              const isBefore = item.phase === "before";
              return (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden border border-[#E8D9B8] dark:border-[#455565] bg-white dark:bg-[#263B4B] shadow-xs hover:shadow-md transition-all flex flex-col cursor-pointer"
                  onClick={() =>
                    setActiveModalImage({
                      url: item.url,
                      title: isKm ? item.khmerTitle : item.title,
                      caption: isKm ? item.khmerCaption : item.caption,
                      badge: item.badgeLabel
                    })
                  }
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.url}
                      alt={isKm ? item.khmerTitle : item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Prominent BEFORE or AFTER Tag */}
                    <div
                      className={`absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md border ${
                        isBefore
                          ? "bg-[#F0A536] text-[#1F354D] border-[#F0A536]"
                          : "bg-emerald-600 text-white border-white/20"
                      }`}
                    >
                      {item.badgeLabel}
                    </div>

                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur shadow opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="p-3.5 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10px] font-extrabold uppercase tracking-wider">
                      <span className={isBefore ? "text-[#B77B5B] dark:text-[#F0A536]" : "text-emerald-600 dark:text-emerald-400"}>
                        {isBefore ? (isKm ? "● សម័យដើម" : "● Archival Historical") : (isKm ? "● បច្ចុប្បន្នភាព" : "● Modern Adaptive Reuse")}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#1F354D] dark:text-[#F5F0E5] group-hover:text-[#F0A536] transition-colors">
                      {isKm ? item.khmerTitle : item.title}
                    </h4>
                    <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] leading-relaxed line-clamp-2">
                      {isKm ? item.khmerCaption : item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hotel Booking Card if applicable */}
          {stop.bookingCallout && stop.bookingCallout.canBook && (
            <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-[#1F354D] dark:bg-[#263B4B] text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-[#F5F0E5]">
                  {isKm ? stop.bookingCallout.khmerTitle : stop.bookingCallout.title}
                </h4>
                <p className="text-xs text-[#F0A536]">
                  {isKm ? stop.bookingCallout.khmerTagline : stop.bookingCallout.tagline}
                </p>
              </div>
              <a
                href={stop.bookingCallout.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#F0A536] hover:bg-[#e09425] text-[#1F354D] font-bold text-xs shadow transition-all self-start sm:self-auto shrink-0"
              >
                <Bed className="w-3.5 h-3.5" />
                <span>{isKm ? "កក់បន្ទប់ / ផែនទី" : "Book Room"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </section>
      )}

      {/* ========================================================= */}
      {/* 7. WHAT TO NOTICE ON-SITE & PRACTICAL VISITOR GUIDE       */}
      {/* ========================================================= */}
      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B77B5B] dark:text-[#F0A536]">
            {isKm ? "ចំណុចស្ថាបត្យកម្មគួរកត់សម្គាល់" : "What to Notice on Site"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {t("architecturalSectionTitle")}
          </h2>
        </div>

        {/* 3 Clean Feature Cards on Light Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stop.architecturalHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] space-y-2 shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1F354D] text-[#F0A536] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1F354D] dark:text-[#F5F0E5]">
                {isKm && feat.khmerTitle ? feat.khmerTitle : feat.title}
              </h3>
              <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
                {isKm && feat.khmerDescription ? feat.khmerDescription : feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pufferfish Mascot Emotional Reaction for this stop */}
        <div className="flex items-center justify-center py-2">
          <PufferfishMascot
            emotion={
              stop.id === "durian-roundabout"
                ? "playful"
                : stop.id === "hotel-old-cinema"
                ? "pure-bliss"
                : stop.id === "cai-coffee"
                ? "content"
                : stop.id === "phsar-kronat"
                ? "cheerful"
                : stop.id === "starbucks-kampot"
                ? "delighted"
                : stop.id === "entanou-bridge"
                ? "overjoyed"
                : "cheerful"
            }
            size="lg"
            badge={true}
          />
        </div>

        {/* Practical Visitor Guide Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565] gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B77B5B] dark:text-[#F0A536]">
                {isKm ? "ការណែនាំពេលចុះទស្សនាជាក់ស្តែង" : "Practical Visitor Guide"}
              </span>
              <h3 className="text-lg font-bold text-[#1F354D] dark:text-[#F5F0E5]">
                {t("visitorSectionTitle")}
              </h3>
            </div>

            <a
              href={stop.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#1F354D] hover:bg-[#F0A536] text-white hover:text-[#1F354D] text-xs font-bold transition-all shadow-xs self-start sm:self-auto"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "បើកផែនទី Google" : "Open in Google Maps"}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#1F354D] dark:text-[#F5F0E5]/90">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 font-bold text-[#1F354D] dark:text-[#F5F0E5]">
                <DoorOpen className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
                <span>{t("accessPermissionsLabel")}</span>
              </div>
              <p className="leading-relaxed font-normal text-[#55534B] dark:text-[#C2BBAE]">{accessNotes}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 font-bold text-[#1F354D] dark:text-[#F5F0E5]">
                <Camera className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
                <span>{t("photoTipsLabel")}</span>
              </div>
              <p className="leading-relaxed font-normal text-[#55534B] dark:text-[#C2BBAE]">{photoNotes}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E8D9B8] dark:border-[#455565] flex flex-wrap items-center justify-between text-xs text-[#55534B] dark:text-[#C2BBAE] gap-2">
            <span>
              <strong className="text-[#1F354D] dark:text-[#F5F0E5]">{isKm ? "អាសយដ្ឋាន៖ " : "Address: "}</strong>
              {address}
            </span>
            <span>
              <strong className="text-[#1F354D] dark:text-[#F5F0E5]">{isKm ? "សម័យកាល៖ " : "Historical Era: "}</strong>
              {era}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. PREVIOUS / NEXT STOP NAVIGATION                        */}
      {/* ========================================================= */}
      <nav className="pt-6 border-t border-[#E8D9B8] dark:border-[#455565] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevStop ? (
          <Link
            href={`/stops/${prevStop.id}`}
            className="p-4 rounded-2xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536] transition-all flex items-center space-x-3 group shadow-xs"
          >
            <div className="w-9 h-9 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] flex items-center justify-center group-hover:bg-[#1F354D] group-hover:text-white transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase font-bold text-[#F0A536] block">
                {isKm ? "ទីតាំងមុន" : "Previous Stop"}
              </span>
              <h4 className="text-sm font-bold text-[#1F354D] dark:text-[#F5F0E5] truncate">
                {isKm ? prevStop.khmerTitle : prevStop.title}
              </h4>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextStop ? (
          <Link
            href={`/stops/${nextStop.id}`}
            className="p-4 rounded-2xl bg-[#1F354D] dark:bg-[#263B4B] text-white hover:bg-[#162738] transition-all flex items-center justify-between group shadow-sm border border-[#1F354D] dark:border-[#455565]"
          >
            <div className="truncate text-left">
              <span className="text-[10px] uppercase font-bold text-[#F0A536] block">
                {isKm ? "ទីតាំងបន្ទាប់" : "Next Stop"}
              </span>
              <h4 className="text-sm font-bold text-white truncate">
                {isKm ? nextStop.khmerTitle : nextStop.title}
              </h4>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#F0A536] group-hover:text-[#1F354D] transition-colors shrink-0 ml-3">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          /* When on Stop 6 (final curated walking stop), feature the Tour Grand Finale card! */
          <Link
            href="/finale"
            className="p-5 sm:p-6 rounded-3xl bg-[#1F354D] dark:bg-[#263B4B] text-white hover:brightness-105 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-xl border-2 border-[#F0A536]"
          >
            <div className="space-y-1.5 text-left">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F0A536] text-[#1F354D]">
                  {isKm ? "បញ្ចប់ទីតាំងទាំង ៦ • ១០០%" : "6 OF 6 STOPS COMPLETED"}
                </span>
                <span className="text-xs text-[#F0A536] font-bold">
                  {isKm ? "វគ្គបិទបញ្ចប់ដំណើរ" : "Tour Grand Finale Unlocked"}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                {isKm ? "រាត្រីសមោសរបិទបញ្ចប់ដំណើរកម្សាន្ត៖ កំពតពេលរាត្រី" : "Tour Grand Finale: Kampot by Night"}
              </h4>
              <p className="text-xs text-[#C2BBAE] leading-relaxed max-w-xl font-normal">
                {isKm
                  ? "អ្នកបានដើរកាត់ប្រវត្តិសាស្ត្រមួយសតវត្សរ៍នៃក្រុងកំពត ចាប់ពីរង្វង់មូលធុរេន រហូតដល់ថ្ងៃលិចនៃស្ពានឥន្ទធនូ។ នេះជារូបភាពរាត្រីសមោសរដ៏អស្ចារ្យសម្រាប់បិទបញ្ចប់ដំណើរ។"
                  : "You have walked a century of Kampot architectural history from the Durian Roundabout to the sunset of Entanou Bridge. Behold the evening finale over the river and town."}
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#F0A536] text-[#1F354D] font-extrabold text-xs shadow-md shrink-0 self-start sm:self-auto group-hover:scale-105 transition-transform">
              <span>{isKm ? "ទស្សនារូបភាពបិទបញ្ចប់ →" : "View Tour Grand Finale →"}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        )}
      </nav>

      {/* ========================================================= */}
      {/* FULLSCREEN IMAGE MODAL                                    */}
      {/* ========================================================= */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              type="button"
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-[#B77B5B] text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeModalImage.url}
              alt={activeModalImage.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            <div className="mt-3 text-center text-white space-y-1 max-w-2xl px-4">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D2B77E] text-[#182A39] mb-1">
                {activeModalImage.badge}
              </div>
              <h3 className="text-base sm:text-lg font-bold">{activeModalImage.title}</h3>
              <p className="text-xs text-white/80 leading-relaxed font-normal">{activeModalImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
