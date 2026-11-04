"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  MapPin,
  Clock,
  ArrowRight,
  Headphones,
  Footprints,
  Sparkles,
  ExternalLink,
  Navigation,
  Compass
} from "lucide-react";
import { HERITAGE_STOPS, TOUR_METRICS } from "@/data/stops";
import { useLanguage } from "@/context/LanguageContext";
import SeahorseGuide from "@/components/SeahorseGuide";

export default function StopsPage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      
      {/* 1. TOP MINIMAL NAVIGATION */}
      <nav className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565] text-xs">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-[#1F354D] dark:text-[#F5F0E5]/90 hover:text-[#F0A536] dark:hover:text-[#F0A536] font-semibold transition-colors"
        >
          <span>{isKm ? "← ត្រឡប់ទៅទំព័រដើម" : "← Back to Home"}</span>
        </Link>

        <div className="flex items-center space-x-2">
          <Link
            href="/map"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] shadow-xs hover:border-[#F0A536] transition-all"
          >
            <MapPin className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "ផែនទីដើរ" : "Walking Map"}</span>
          </Link>

          <Link
            href="/itinerary"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#F0A536] text-[#1F354D] shadow-xs hover:bg-[#e09426] transition-all"
          >
            <Footprints className="w-3.5 h-3.5" />
            <span>{isKm ? "តារាងដំណើរ" : "Itinerary"}</span>
          </Link>
        </div>
      </nav>

      {/* 2. SECTION HEADER (matching screenshot title and description) */}
      <header className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565] text-xs font-bold uppercase tracking-wider">
          <Landmark className="w-3.5 h-3.5 text-[#F0A536]" />
          <span>{isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦" : "All 6 Curated Heritage Stops"}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5] leading-tight">
          {isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦ តាមគន្លងផ្លូវថ្មើរជើង" : "All 6 Heritage Stops Along the Trail"}
        </h1>

        <p className="text-sm sm:text-base text-[#55534B] dark:text-[#C2BBAE] font-normal max-w-3xl leading-relaxed">
          {isKm
            ? "ចុចលើទីតាំងនីមួយៗខាងក្រោមដើម្បីស្វែងយល់ពីរឿងរ៉ាវស្ថាបត្យកម្ម ប្រវត្តិសាស្ត្រ និងការប្រៀបធៀបរូបថតដើម និងការកែច្នៃបច្ចុប្បន្ន។"
            : "Tap any landmark below to explore its architectural story, historical narrative, archival photos, and modern restoration."}
        </p>
      </header>

      {/* MASCOT GUIDE BANNER */}
      <section>
        <SeahorseGuide variant="banner" persona="explorer" />
      </section>

      {/* 3. 6 STOPS GRID WITH RICH LOCATION INFORMATION */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {HERITAGE_STOPS.map((stop) => {
          const stopImage =
            stop.archivalComparison.modernImageUrl || stop.archivalComparison.archivalImageUrl;

          return (
            <div
              key={stop.id}
              className="group rounded-3xl overflow-hidden border border-[#E8D9B8] dark:border-[#455565] bg-[#FFFFFF] dark:bg-[#263B4B] shadow-xs hover:shadow-xl hover:border-[#F0A536] dark:hover:border-[#F0A536] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={stopImage}
                  alt={isKm ? stop.khmerTitle : stop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Stop Order Number Badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#1F354D] text-[#FFFFFF] font-extrabold text-xs flex items-center justify-center border border-[#E8D9B8] shadow-md">
                  0{stop.order}
                </div>

                {/* Walking Time Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1F354D]/90 backdrop-blur-md text-[10px] font-bold text-[#FFFFFF] border border-[#E8D9B8] shadow-md">
                  {isKm ? stop.khmerWalkingTimeFromPrev : stop.walkingTimeFromPrev}
                </div>

                {/* Role pill on image */}
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-[#F5F0E5] font-semibold truncate drop-shadow">
                  {isKm ? stop.khmerRole : stop.role}
                </div>
              </div>

              {/* Card Body with Rich Location Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider">
                    <span className="text-[#B77B5B] dark:text-[#F0A536]">
                      {isKm ? stop.khmerPlaceCategory : stop.placeCategory}
                    </span>
                    <span className="text-[#55534B] dark:text-[#C2BBAE]">
                      {stop.distanceFromPrev}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F354D] dark:text-[#F5F0E5] group-hover:text-[#F0A536] transition-colors leading-snug">
                    {isKm ? stop.khmerTitle : stop.title}
                  </h3>

                  <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] line-clamp-3 leading-relaxed">
                    {isKm ? stop.khmerSummary : stop.summary}
                  </p>
                </div>

                {/* Location Meta Details */}
                <div className="pt-3 border-t border-[#E8D9B8] dark:border-[#455565] space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#55534B] dark:text-[#C2BBAE]">
                    <span className="font-medium truncate max-w-[170px]">
                      📍 {isKm ? stop.khmerAddress : stop.address}
                    </span>
                    <span className="text-[#F0A536] font-bold flex items-center space-x-1 shrink-0">
                      <Headphones className="w-3 h-3" />
                      <span>{stop.audioGuide.duration}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/stops/${stop.id}`}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#1F354D] dark:bg-[#F0A536] hover:bg-[#F0A536] hover:text-[#1F354D] text-white dark:text-[#1F354D] text-xs font-extrabold text-center shadow-xs transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>{isKm ? "មើលរឿងរ៉ាវលម្អិត" : "Explore Location"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={stop.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] hover:border-[#F0A536] hover:text-[#F0A536] transition-colors"
                      title="Google Maps Walking Directions"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. FOOTER CALLOUT TO START WALK */}
      <section className="pt-6 border-t border-[#E8D9B8] dark:border-[#455565]">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1F354D] dark:bg-[#263B4B] text-[#F5F0E5] flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#E8D9B8]/40 dark:border-[#455565] shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#F0A536] uppercase tracking-wider">
              {isKm ? "ចាប់ផ្តើមដំណើរកម្សាន្ត" : "Ready to Start?"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              {isKm ? "ចាប់ផ្តើមដើរពីទីតាំងទី ០១៖ រង្វង់មូលធុរេន" : "Begin at Stop 01: Durian Roundabout"}
            </h3>
            <p className="text-xs sm:text-sm text-[#C2BBAE] max-w-lg">
              {isKm
                ? "ដំណើរកម្សាន្តថ្មើរជើងដោយខ្លួនឯងប្រវែង ១.៨ គីឡូម៉ែត្រ ឆ្លងកាត់ស្ថាបត្យកម្មប្រវត្តិសាស្ត្រជាងមួយសតវត្សរ៍នៃក្រុងកំពត។"
                : "A self-guided 1.8 km heritage stroll exploring over a century of colonial and modernist architectural history."}
            </p>
          </div>

          <Link
            href="/stops/durian-roundabout"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all shrink-0 hover:scale-102 border border-[#F0A536]"
          >
            <span>{isKm ? "ចាប់ផ្តើមដើរឥឡូវនេះ →" : "Start Walk Now →"}</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
