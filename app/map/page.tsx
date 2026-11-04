"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { HERITAGE_STOPS, HeritageStop, TOUR_METRICS } from "@/data/stops";
import { MapPin, Compass, Footprints, Info, ChevronRight, ExternalLink, Star, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import WalkingAndMusicExperience from "@/components/WalkingAndMusicExperience";
import PufferfishMascot from "@/components/PufferfishMascot";

const DynamicMap = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[740px] lg:h-[860px] bg-white dark:bg-[#263B4B] rounded-3xl flex flex-col items-center justify-center space-y-3 border border-[#E8D9B8] dark:border-[#455565] shadow-md">
      <Compass className="w-8 h-8 text-[#F0A536] animate-spin" />
      <p className="text-xs font-semibold text-[#1F354D] dark:text-[#F5F0E5] uppercase tracking-wider">
        Loading Google Maps Walking Route...
      </p>
    </div>
  ),
});

export default function MapPage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  const [activeStop, setActiveStop] = useState<HeritageStop>(HERITAGE_STOPS[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-[#1F354D] dark:text-[#F5F0E5]">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E8D9B8] dark:border-[#455565]">
        <div className="flex items-start justify-between gap-4 w-full md:w-auto">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#B77B5B] dark:text-[#F0A536] mb-1">
              <MapPin className="w-4 h-4 text-[#F0A536]" />
              <span>{isKm ? "មគ្គុទ្ទេសក៍ផែនទីថ្មើរជើង" : "Interactive Walking Guide"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "ផ្លូវបេតិកភណ្ឌថ្មើរជើងក្រុងកំពត" : "Kampot Heritage Walking Route"}
            </h1>
            <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] mt-1 max-w-2xl font-normal">
              {isKm ? (
                <>
                  ដើរតាមគន្លងផ្លូវ <strong>{TOUR_METRICS.khmerTotalDistance}</strong> ({TOUR_METRICS.khmerWalkingDuration}) ចាប់ពី <strong>រង្វង់មូលធុរេន</strong> ឆ្លងកាត់តំបន់ពាណិជ្ជកម្មបុរាណ និងតំបន់រដ្ឋបាលបារាំង រហូតដល់ <strong>ស្ពានឥន្ទធនូ</strong>។
                </>
              ) : (
                <>
                  Follow the <strong>{TOUR_METRICS.totalDistance}</strong> walking trail ({TOUR_METRICS.walkingDuration}) from the <strong>Durian Statue of Kampot</strong> through the historic commercial streets to the <strong>Entanou Bridge</strong>.
                </>
              )}
            </p>
          </div>
          <div className="shrink-0 pt-1">
            <PufferfishMascot emotion="excited" size="lg" title="Explorer Pufferfish" />
          </div>
        </div>

        {/* Quick Legend & Google Maps Full Tour Link */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={TOUR_METRICS.fullRouteGoogleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#F0A536] hover:bg-[#e09425] text-[#1F354D] shadow-sm transition-all"
            title="Open complete route in Google Maps app"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{isKm ? "បើកផ្លូវក្នុង Google Maps" : "Open in Google Maps"}</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="flex items-center space-x-3 text-xs bg-white dark:bg-[#263B4B] px-4 py-2 rounded-xl border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] shadow-xs">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#F0A536] border border-[#1F354D] inline-block" />
              <span className="font-bold">{isKm ? `${TOUR_METRICS.totalStops} ទីតាំង` : `${TOUR_METRICS.totalStops} Stops`}</span>
            </div>
            <span className="text-[#55534B]/40 dark:text-[#C2BBAE]/40">•</span>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-0.5 bg-[#1F354D] dark:bg-[#F0A536] border-dashed border-t-2 border-[#1F354D] dark:border-[#F0A536] inline-block" />
              <span className="text-[#55534B] dark:text-[#C2BBAE]">
                {isKm ? "ផ្លូវដើរ" : "Walking Path"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Expanded Big Map (7 or 8 cols) + Rich Accessible Sidebar (4 or 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Expanded Big Map Canvas (8 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-4">
          <DynamicMap
            initialStopId={activeStop.id}
            onSelectStop={(stop) => setActiveStop(stop)}
            className="h-[640px] sm:h-[760px] lg:h-[860px] w-full"
          />

          <div className="p-4 rounded-2xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs flex items-start space-x-3 text-xs text-[#55534B] dark:text-[#C2BBAE]">
            <Info className="w-4 h-4 text-[#F0A536] flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1F354D] dark:text-[#F5F0E5]">{isKm ? "ការណែនាំដើរ៖" : "Walking tip:"}</strong>{" "}
              {isKm
                ? "ចុចលើទីតាំងណាមួយនៅលើផែនទី ឬក្នុងរបារចំហៀងដើម្បីបង្ហាញរូបថត ឈ្មោះ និងព័ត៌មានលម្អិត។ អ្នកអាចប្តូររវាង Google Map ធម្មតា និងរូបភាពពីផ្កាយរណបពិតប្រាកដ (Realistic Satellite) ឬចុច 'Open now' ដើម្បីបើកការណែនាំទិសដៅផ្ទាល់នៅលើទូរសព្ទរបស់អ្នក។"
                : "Click on any pin on the map or select any stop from the sidebar to center and pop up full details. Toggle between standard Google Map and Realistic Satellite aerial imagery, or click 'Open now' to launch turn-by-turn walking navigation."}
            </p>
          </div>
        </div>

        {/* Right Column: Informative Accessible Sidebar (5 or 4 cols) */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 space-y-4">
          <div className="bg-white dark:bg-[#263B4B] rounded-3xl border border-[#E8D9B8] dark:border-[#455565] shadow-md p-5 flex flex-col max-h-[calc(100vh-120px)] overflow-hidden">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E8D9B8] dark:border-[#455565] mb-3 flex-shrink-0">
              <div>
                <h3 className="text-lg font-extrabold text-[#1F354D] dark:text-[#F5F0E5] flex items-center space-x-2">
                  <Footprints className="w-4 h-4 text-[#F0A536]" />
                  <span>{isKm ? "ទីតាំងតាមលំដាប់លំដោយ" : "Tour Stops in Order"}</span>
                </h3>
                <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium mt-0.5">
                  {isKm ? "ចុចដើម្បីមើលលើផែនទី និងទិសដៅ" : "Select to inspect & center on map"}
                </p>
              </div>
              <span className="text-[11px] text-[#1F354D] dark:text-[#F0A536] font-bold bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] px-2.5 py-1 rounded-full whitespace-nowrap">
                {isKm ? `សរុប ${TOUR_METRICS.khmerTotalDistance}` : `${TOUR_METRICS.totalDistance} Total`}
              </span>
            </div>

            {/* Scrollable Stops List */}
            <div className="space-y-3 overflow-y-auto pr-1 flex-1 scrollbar-thin">
              {HERITAGE_STOPS.map((stop) => {
                const isSelected = stop.id === activeStop.id;
                const stopImage =
                  stop.archivalComparison.modernImageUrl || stop.archivalComparison.archivalImageUrl;

                return (
                  <div
                    key={stop.id}
                    onClick={() => setActiveStop(stop)}
                    className={`cursor-pointer p-3 sm:p-3.5 rounded-2xl border transition-all text-left ${
                      isSelected
                        ? "bg-[#E8D9B8]/40 dark:bg-[#354858] border-[#F0A536] shadow-sm ring-2 ring-[#F0A536]/50"
                        : "bg-white dark:bg-[#263B4B] hover:bg-[#F5F0E5] dark:hover:bg-[#354858]/60 border-[#E8D9B8] dark:border-[#455565]"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Real Photo Thumbnail */}
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100 dark:bg-slate-800 border border-[#E8D9B8] dark:border-[#455565]">
                        <img
                          src={stopImage}
                          alt={stop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div
                          className={`absolute top-1 left-1 w-5 h-5 rounded-full font-bold text-[10px] flex items-center justify-center shadow-xs ${
                            isSelected
                              ? "bg-[#F0A536] text-[#1F354D]"
                              : "bg-[#1F354D] text-white"
                          }`}
                        >
                          {stop.order}
                        </div>
                      </div>

                      {/* Stop Info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs sm:text-sm font-extrabold text-[#1F354D] dark:text-[#F5F0E5] truncate">
                            {stop.order}. {isKm ? stop.khmerTitle : stop.title}
                          </p>
                        </div>

                        <p className="text-[11px] text-[#B77B5B] dark:text-[#F0A536] font-bold mt-0.5 truncate">
                          {isKm ? stop.khmerRole : stop.role}
                        </p>

                        <div className="flex items-center space-x-2 text-[10px] text-[#55534B] dark:text-[#C2BBAE] mt-1">
                          <span className="flex items-center text-[#F0A536] font-bold">
                            <Star className="w-2.5 h-2.5 fill-[#F0A536] mr-0.5" />
                            {stop.rating}
                          </span>
                          <span>•</span>
                          <span className="truncate">
                            {isKm ? stop.khmerWalkingTimeFromPrev : stop.walkingTimeFromPrev}
                          </span>
                          <span>•</span>
                          <span className="truncate">{stop.distanceFromPrev}</span>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 self-center transition-transform shrink-0 ${
                          isSelected ? "text-[#F0A536] translate-x-0.5" : "text-[#55534B]/40 dark:text-[#C2BBAE]/40"
                        }`}
                      />
                    </div>

                    {/* Expanded Accessible Information for the Active Stop */}
                    {isSelected && (
                      <div className="mt-3 pt-2.5 border-t border-[#E8D9B8] dark:border-[#455565] space-y-2 animate-in fade-in duration-200">
                        <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] leading-relaxed line-clamp-2">
                          {isKm ? stop.khmerSummary : stop.summary}
                        </p>

                        <div className="text-[10px] text-[#55534B] dark:text-[#C2BBAE] flex items-center">
                          <span>📍 {isKm ? stop.khmerAddress : stop.address}</span>
                        </div>

                        <div className="pt-1 flex items-center gap-2">
                          <Link
                            href={`/stops/${stop.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 py-1.5 px-3 rounded-xl bg-[#1F354D] dark:bg-[#F0A536] hover:bg-[#F0A536] hover:text-[#1F354D] text-white dark:text-[#1F354D] text-[11px] font-extrabold text-center shadow-xs transition-colors"
                          >
                            {isKm ? "មើលលម្អិតទីតាំង" : "View Stop Details"} →
                          </Link>
                          <a
                            href={stop.googleMapsDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536] text-[11px] font-bold text-center transition-colors inline-flex items-center space-x-1"
                          >
                            <Navigation className="w-3 h-3 text-[#F0A536]" />
                            <span>{isKm ? "ផែនទី" : "Directions"}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Walking Track Section Under the Walking Map */}
      <section className="pt-6 border-t border-[#E8D9B8] dark:border-[#455565] space-y-3">
        <WalkingAndMusicExperience section="track" />
      </section>
    </div>
  );
}
