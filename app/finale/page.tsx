"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Footprints,
  Clock,
  CheckCircle2,
  Maximize2,
  X,
  ArrowLeft,
  ArrowRight,
  Star,
  Music,
  Play,
  Pause,
  Disc,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TOUR_METRICS, HERITAGE_STOPS } from "@/data/stops";
import { GOLDEN_AGE_SONGS } from "@/data/music";
import { vintagePlayer } from "@/utils/vintageAudioSynthesizer";
import PufferfishMascot from "@/components/PufferfishMascot";

export default function FinalePage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  const [activeModalImage, setActiveModalImage] = useState<{
    url: string;
    title: string;
    caption: string;
    badge: string;
  } | null>(null);

  // Finale Anthem: Snaeha Kampot (Love in Kampot) by Sinn Sisamouth
  const finaleSong = GOLDEN_AGE_SONGS[0];
  const [isPlayingFinale, setIsPlayingFinale] = useState(false);

  // Mark all 6 stops as completed in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const allIds = HERITAGE_STOPS.map((s) => s.id);
        localStorage.setItem("kampot_visited_stops", JSON.stringify(allIds));
      } catch (e) {}
    }
  }, []);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      vintagePlayer.pause();
    };
  }, []);

  const handleToggleFinaleSong = () => {
    if (isPlayingFinale) {
      vintagePlayer.pause();
      setIsPlayingFinale(false);
    } else {
      vintagePlayer.playSong(finaleSong);
      setIsPlayingFinale(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E8D9B8] dark:border-[#455565] text-xs">
        <Link
          href="/stops/entanou-bridge"
          className="inline-flex items-center space-x-1.5 text-[#1F354D] dark:text-[#F5F0E5] hover:text-[#F0A536] font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isKm ? "ត្រឡប់ទៅទីតាំងទី ៦ (ស្ពានឥន្ទធនូ)" : "Back to Stop 06 (Entanou Bridge)"}</span>
        </Link>

        <span className="px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565] font-extrabold uppercase tracking-wider text-[11px]">
          {isKm ? "ដំណើរកម្សាន្តចប់សព្វគ្រប់" : "Walking Tour Completed"}
        </span>
      </div>

      {/* Completion Header with Celebratory Pufferfish Mascot */}
      <div className="text-center space-y-3">
        <div className="flex justify-center pb-1">
          <PufferfishMascot emotion="celebratory" size="xl" />
        </div>
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F0A536] text-[#1F354D] font-extrabold text-xs shadow-md">
          <CheckCircle2 className="w-4 h-4" />
          <span>{isKm ? "សូមអបអរសាទរ! អ្នកបានបញ្ចប់ដំណើរថ្មើរជើង" : "Congratulations! You Completed the Walk"}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5]">
          {isKm ? "រាត្រីសមោសរបិទបញ្ចប់ដំណើរកម្សាន្ត" : "Tour Grand Finale: Kampot by Night"}
        </h1>

        <p className="text-sm sm:text-base text-[#55534B] dark:text-[#C2BBAE] max-w-2xl mx-auto font-normal">
          {isKm
            ? "អ្នកបានដើរកាត់ប្រវត្តិសាស្ត្រមួយសតវត្សរ៍នៃក្រុងកំពត ចាប់ពីរង្វង់មូលធុរេន រហូតដល់ថ្ងៃលិចនៃស្ពានឥន្ទធនូ។ នេះជារូបភាពរាត្រីសមោសរដ៏អស្ចារ្យសម្រាប់បិទបញ្ចប់ដំណើរ។"
            : "You have walked a century of Kampot architectural history from the Durian Roundabout to the sunset of Entanou Bridge. Behold the evening finale over the river and town."}
        </p>

        {/* Route Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs font-bold flex items-center space-x-1.5">
            <Footprints className="w-3.5 h-3.5 text-[#F0A536]" />
            <span><strong>{TOUR_METRICS.totalDistance}</strong> {isKm ? "ចម្ងាយដើរ" : "walked"}</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs font-bold flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F0A536]" />
            <span><strong>{TOUR_METRICS.walkingDuration}</strong> {isKm ? "រយៈពេលសរុប" : "total duration"}</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs font-bold flex items-center space-x-1.5">
            <Star className="w-3.5 h-3.5 text-[#F0A536]" />
            <span><strong>6 / 6</strong> {isKm ? "ទីតាំងបេតិកភណ្ឌ" : "stops explored"}</span>
          </span>
        </div>
      </div>

      {/* THE STANDALONE GRAND FINALE CARD (USER'S NIGHT AERIAL IMAGE ALONE) */}
      <div className="rounded-3xl overflow-hidden border-2 border-[#E8D9B8] dark:border-[#455565] bg-white dark:bg-[#263B4B] shadow-2xl">
        {/* Top Photo */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950 group">
          <img
            src="/images/stops/kampot-night-aerial-finale.jpg"
            alt="Kampot Night Aerial Grand Finale"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Top Left Finale Pill */}
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#1F354D]/90 dark:bg-[#F0A536] text-[#F5F0E5] dark:text-[#1F354D] shadow-lg border border-white/20">
              {isKm ? "បិទបញ្ចប់ដំណើរកម្សាន្ត" : "Tour Grand Finale"}
            </span>
          </div>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={() =>
              setActiveModalImage({
                url: "/images/stops/kampot-night-aerial-finale.jpg",
                title: isKm ? "រាត្រីសមោសរបិទបញ្ចប់ដំណើរកម្សាន្ត" : "Tour Grand Finale: Kampot by Night",
                badge: isKm ? "បិទបញ្ចប់ដំណើរ" : "TOUR FINALE",
                caption: isKm
                  ? "ទិដ្ឋភាពពីលើអាកាសដ៏អស្ចារ្យនៃក្រុងកំពតពេលរាត្រី រំលេចដោយពន្លឺភ្លើងកណ្តាលក្រុង ផ្សារចាស់ ដងព្រែកទឹកឈូ និងស្ពានឥន្ទធនូ ក្រោមម្លប់ជួរភ្នំបូកគោ។"
                  : "Magnificent aerial bird's-eye panorama of Kampot illuminated in evening golden lights: the bustling heritage quarter, Old Market, Preaek Tuek Chhu river, and Entanou Bridge beneath the tranquil shadow of Bokor Mountain."
              })
            }
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur border border-white/20 transition-all shadow cursor-pointer"
            title="View fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Card Content */}
        <div className="p-6 sm:p-8 space-y-3">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] leading-tight">
            {isKm
              ? "រាត្រីសមោសរបិទបញ្ចប់ដំណើរកម្សាន្ត៖ ទិដ្ឋភាពកំពតពេលរាត្រីពីលើអាកាស"
              : "Tour Grand Finale: Illuminated Kampot by Night"}
          </h3>

          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
            {isKm
              ? "ទិដ្ឋភាពពីលើអាកាសដ៏អស្ចារ្យនៃក្រុងកំពតពេលរាត្រី រំលេចដោយពន្លឺភ្លើងកណ្តាលក្រុង ផ្សារចាស់ ដងព្រែកទឹកឈូ និងស្ពានឥន្ទធនូ ក្រោមម្លប់ជួរភ្នំបូកគោ។"
              : "A breathtaking aerial panorama of Kampot by night, illuminated by the golden glow of the town center, Old Market, Preaek Tuek Chhu river, and Entanou Bridge beneath Bokor Mountain."}
          </p>

          {/* Celebratory Finale Audio Anthem */}
          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className={`w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-[#E8D9B8] dark:border-[#455565] shrink-0 relative flex items-center justify-center ${isPlayingFinale ? "ring-2 ring-[#F0A536]" : ""}`}>
                <img
                  src={finaleSong.coverImage || "/images/music/cambodian-golden-age-album.png"}
                  alt="Cambodian Golden Age Anthem"
                  className={`w-full h-full object-cover ${isPlayingFinale ? "animate-spin" : ""}`}
                  style={{ animationDuration: "6s" }}
                />
                <Disc className="absolute w-5 h-5 text-white/80 pointer-events-none" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5">
                  <Music className="w-3.5 h-3.5 text-[#F0A536] shrink-0" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                    {isKm ? "បទចម្រៀងបិទបញ្ចប់ដំណើរ • សម័យមាស" : "Tour Finale Cultural Anthem"}
                  </span>
                  <span className="text-[10px] text-[#55534B] dark:text-[#C2BBAE]">({finaleSong.year})</span>
                </div>
                <h4 className="text-sm font-bold text-[#1F354D] dark:text-[#F5F0E5] truncate">
                  {isKm ? finaleSong.khmerTitle : finaleSong.title} — {isKm ? finaleSong.khmerArtist : finaleSong.artist}
                </h4>
                <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] line-clamp-1">
                  {isKm ? finaleSong.khmerDescription : finaleSong.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={handleToggleFinaleSong}
                className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-extrabold shadow-md transition-all shrink-0 cursor-pointer ${
                  isPlayingFinale
                    ? "bg-[#1F354D] text-[#F0A536] border border-[#F0A536]"
                    : "bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] border border-[#F0A536] hover:scale-105"
                }`}
              >
                {isPlayingFinale ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlayingFinale ? (isKm ? "ផ្អាកភ្លេង" : "Pause Anthem") : (isKm ? "ស្តាប់សំនៀង" : "Play Anthem")}</span>
              </button>
              <a
                href={finaleSong.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] hover:bg-[#E8D9B8] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] transition-all"
                title="Open audio source on YouTube"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Compact Audio Player for Finale Anthem */}
          {isPlayingFinale && (
            <div className="pt-2 space-y-2 animate-in fade-in">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8D9B8] dark:border-[#455565] bg-black aspect-[16/9] sm:aspect-[21/9] max-h-48 shadow-md">
                <iframe
                  key={finaleSong.youtubeId}
                  src={`https://www.youtube.com/embed/${finaleSong.youtubeId}?autoplay=1&enablejsapi=1&playsinline=1`}
                  title={`${finaleSong.title} audio stream`}
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
                  href={finaleSong.youtubeUrl}
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

          {/* 6 Explored Landmarks Timeline Recap */}
          <div className="pt-2 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536] block">
              {isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦ ដែលបានបញ្ចប់ដំណើរ៖" : "6 Explored Heritage Landmarks Recap:"}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {HERITAGE_STOPS.map((s) => (
                <Link
                  key={s.id}
                  href={`/stops/${s.id}`}
                  className="p-2.5 rounded-xl bg-[#F5F0E5]/80 dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536] transition-all text-center flex flex-col items-center justify-between group"
                >
                  <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Stop 0{s.order}</span>
                  </span>
                  <span className="text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5] group-hover:text-[#F0A536] truncate max-w-full pt-1">
                    {isKm ? s.khmerTitle : s.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8D9B8] dark:border-[#455565] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/map"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09425] text-[#1F354D] font-bold text-xs shadow-md transition-all hover:scale-102"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isKm ? "មើលផែនទីសង្ខេបឡើងវិញ" : "Explore Walking Map"}</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] font-bold text-xs shadow-xs hover:border-[#F0A536] transition-all"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{isKm ? "ត្រឡប់ទៅទំព័រដើម" : "Back to Home"}</span>
              </Link>
            </div>

            <Link
              href="/about"
              className="text-xs font-bold text-[#F0A536] hover:underline"
            >
              {isKm ? "អំពីគម្រោង និងឯកសារយោង →" : "About & Archival Sources →"}
            </Link>
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-black/70 text-white hover:bg-[#F0A536] hover:text-[#1F354D] transition-all border border-white/20 shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={activeModalImage.url}
                alt={activeModalImage.title}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-2xl"
              />
            </div>
            <div className="mt-4 text-center text-white space-y-1 max-w-2xl px-4">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F0A536] text-[#1F354D] shadow mb-1">
                {activeModalImage.badge}
              </div>
              <h4 className="text-base sm:text-lg font-bold">{activeModalImage.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{activeModalImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
