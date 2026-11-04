"use client";

import React from "react";
import Link from "next/link";
import {
  Footprints,
  MapPin,
  Clock,
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
  Music,
  ExternalLink,
  Navigation
} from "lucide-react";
import { HERITAGE_STOPS, TOUR_METRICS } from "@/data/stops";
import { useLanguage } from "@/context/LanguageContext";
import WalkingAndMusicExperience from "@/components/WalkingAndMusicExperience";
import SeahorseGuide from "@/components/SeahorseGuide";

export default function ItineraryPage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      
      {/* 1. TOP MINIMAL NAVIGATION */}
      <nav className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565] text-xs">
        <Link
          href="/stops/durian-roundabout"
          className="inline-flex items-center space-x-1.5 text-[#1F354D] dark:text-[#F5F0E5]/90 hover:text-[#F0A536] dark:hover:text-[#F0A536] font-semibold transition-colors"
        >
          <span>{isKm ? "← ចាប់ផ្តើមដើរពីទីតាំងទី ០១" : "← Start Walking from Stop 01"}</span>
        </Link>

        <Link
          href="/map"
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] shadow-xs hover:border-[#F0A536] transition-all"
        >
          <MapPin className="w-3.5 h-3.5 text-[#F0A536]" />
          <span>{isKm ? "មើលលើផែនទីដើរ" : "View on Walking Map"}</span>
        </Link>
      </nav>

      {/* 2. SECTION HEADER */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565] text-xs font-bold uppercase tracking-wider">
            <Footprints className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "តារាងដំណើរថ្មើរជើងលម្អិត" : "Self-Guided Walking Itinerary"}</span>
          </span>

          <span className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isKm ? `សរុប ${TOUR_METRICS.khmerTotalDistance} • ${TOUR_METRICS.khmerWalkingDuration}` : `Total ${TOUR_METRICS.totalDistance} • ${TOUR_METRICS.walkingDuration}`}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5] leading-tight">
          {isKm ? "តារាងដំណើរទស្សនកិច្ចបេតិកភណ្ឌកំពត" : "Tour Itinerary & Music Companion"}
        </h1>

        <p className="text-sm sm:text-base text-[#55534B] dark:text-[#C2BBAE] leading-relaxed max-w-3xl font-normal">
          {isKm
            ? "ដើរតាមលំដាប់លំដោយនៃទីតាំងបេតិកភណ្ឌទាំង ៦ ចាប់ពីរង្វង់មូលធុរេនកណ្តាលក្រុង កាត់តាមផ្ទះល្វែង និងអគារប្រវត្តិសាស្ត្រ រហូតដល់ស្ពានឥន្ទធនូមាត់ព្រែក អមដោយសំនៀងសម័យមាសខ្មែរទសវត្សរ៍ឆ្នាំ ១៩៦០-៧០។"
            : "Follow the 6 curated heritage stops step-by-step from the central Durian Roundabout through colonial shophouse corridors to the historic Entanou Bridge, accompanied by vintage Cambodian Golden Age music."}
        </p>
      </header>

      {/* MASCOT STORYTELLER GUIDE TIP */}
      <section>
        <SeahorseGuide variant="tip" persona="storyteller" />
      </section>

      {/* 3. STEP-BY-STEP ITINERARY TIMELINE */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#E8D9B8] dark:border-[#455565]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? "ជំហានទាំង ៦ នៃដំណើរកម្សាន្ត" : "The 6 Curated Walking Legs"}
          </h2>
          <span className="text-xs font-bold text-[#F0A536]">
            {isKm ? "៦ ទីតាំង • ៦ ជំហាន" : "6 Stops in Order"}
          </span>
        </div>

        <div className="space-y-4">
          {HERITAGE_STOPS.map((stop, idx) => {
            const stopImage = stop.archivalComparison.modernImageUrl || stop.archivalComparison.archivalImageUrl;

            return (
              <div
                key={stop.id}
                className="p-4 sm:p-5 rounded-2xl border border-[#E8D9B8] dark:border-[#455565] bg-white dark:bg-[#263B4B] shadow-xs hover:border-[#F0A536] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                {/* Left: Image & Info */}
                <div className="flex items-start sm:items-center space-x-4 min-w-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-[#E8D9B8] dark:border-[#455565]">
                    <img
                      src={stopImage}
                      alt={isKm ? stop.khmerTitle : stop.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-[#1F354D] text-[#FFFFFF] text-[10px] font-extrabold flex items-center justify-center border border-white/20">
                      0{stop.order}
                    </div>
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                        {isKm ? stop.khmerPlaceCategory : stop.placeCategory}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] font-semibold">
                        {isKm ? stop.khmerWalkingTimeFromPrev : stop.walkingTimeFromPrev}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1F354D] dark:text-[#F5F0E5] leading-snug">
                      {isKm ? stop.khmerTitle : stop.title}
                    </h3>

                    <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] line-clamp-1">
                      {isKm ? stop.khmerSummary : stop.summary}
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-[#E8D9B8]/40 dark:border-[#455565]">
                  <Link
                    href={`/stops/${stop.id}`}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-[#1F354D] hover:bg-[#F0A536] hover:text-[#1F354D] text-white transition-all shadow-xs"
                  >
                    <span>{isKm ? "ព័ត៌មានទីតាំង" : "View Stop"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={stop.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] hover:border-[#F0A536] hover:text-[#F0A536] transition-colors"
                    title="Walking Directions"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. MUSIC UNDER ITINERARY: SOUNDS OF KAMPOT */}
      <section className="pt-4 border-t border-[#E8D9B8] dark:border-[#455565] space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
            <Music className="w-4 h-4 text-[#F0A536]" />
            <span>{isKm ? "សំនៀងក្រុងកំពត" : "Sounds of Kampot"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? "សំនៀងក្រុងកំពត (Sounds of Kampot)" : "Sounds of Kampot"}
          </h2>
          <p className="text-sm font-semibold text-[#1F354D] dark:text-[#F0A536]">
            {isKm
              ? "កម្រងចម្រៀងដែលនាំមកនូវសំនៀង និងការចងចាំនៃក្រុងកំពតសម័យមុន។"
              : "A collection of songs that brings back the sounds and memories of an earlier Kampot."}
          </p>
          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] leading-relaxed max-w-3xl">
            {isKm
              ? "សូមចំណាយពេលមួយភ្លែតដើម្បីស្តាប់តន្ត្រីនៃសម័យកាលមុន។ រួមបញ្ចូលនូវបទចម្រៀងខ្មែរឆ្នើមៗដែលផ្សារភ្ជាប់ជាមួយនឹងប្រវត្តិសាស្ត្រ ទេសភាព និងការចងចាំនៃខេត្តកំពត កម្រងចម្រៀងនេះផ្តល់នូវទិដ្ឋភាពដ៏រស់រវើកនៃសំនៀងពីអតីតកាល។"
              : "Take a moment to listen to the music of another time. Featuring selected Cambodian songs that connect with Kampot's history, landscapes and memories, this collection offers a little glimpse into the sounds of the past."}
          </p>
          <p className="text-xs font-bold text-[#F0A536]">
            {isKm ? "ស្តាប់ ចងចាំ និងស្វែងយល់ពីកំពតតាមរយៈតន្ត្រី។" : "Listen, remember and discover Kampot through music."}
          </p>
        </div>

        {/* Music Experience Component (Section="music") */}
        <WalkingAndMusicExperience section="music" />
      </section>

      {/* 5. TOUR GRAND FINALE BANNER */}
      <section className="pt-6 border-t border-[#E8D9B8] dark:border-[#455565]">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1F354D] dark:bg-[#263B4B] border-2 border-[#E8D9B8]/40 dark:border-[#455565] shadow-xl text-[#F5F0E5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-[#F0A536] uppercase tracking-wider">
              {isKm ? "វគ្គបិទបញ្ចប់ដំណើរ" : "Tour Grand Finale"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F0E5]">
              {isKm ? "រាត្រីសមោសរក្រុងកំពត (Kampot by Night)" : "Kampot by Night: Grand Finale"}
            </h3>
            <p className="text-xs sm:text-sm text-[#C2BBAE] max-w-xl">
              {isKm
                ? "ទស្សនាទិដ្ឋភាពពីលើអាកាសពេលរាត្រីនៃដងព្រែកទឹកឈូ ផ្សារចាស់ និងស្ពានឥន្ទធនូ រំលេចដោយពន្លឺភ្លើងពណ៌មាស។"
                : "Complete your experience with breathtaking night aerial panoramas of Kampot's illuminated riverfront and heritage town center."}
            </p>
          </div>

          <Link
            href="/finale"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all shrink-0 hover:scale-102 border border-[#F0A536]"
          >
            <span>{isKm ? "ទស្សនារូបភាពបិទបញ្ចប់ →" : "View Grand Finale →"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
