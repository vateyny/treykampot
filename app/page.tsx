"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Clock,
  Footprints,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Maximize2,
  Columns2,
  SlidersHorizontal,
  X,
  ChevronRight,
  Headphones,
  Music,
  Landmark,
  Building2,
  CheckCircle2
} from "lucide-react";
import { HERITAGE_STOPS, TOUR_METRICS } from "@/data/stops";
import { useLanguage } from "@/context/LanguageContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SeahorseGuide from "@/components/SeahorseGuide";
import FeedbackAndQA from "@/components/FeedbackAndQA";

export default function HomePage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  const [compareMode, setCompareMode] = useState<"sideBySide" | "slider">("sideBySide");
  const [activeModalImage, setActiveModalImage] = useState<{
    url: string;
    title: string;
    caption: string;
    badge: string;
  } | null>(null);

  // Riverfront & Entanou Bridge Transformation (Before & After)
  const riverfrontTransformation = {
    title: "Kampot Riverfront & Entanou Bridge",
    khmerTitle: "ដងព្រែកក្រុងកំពត និងស្ពានឥន្ទធនូ",
    subtitle: "Original 1920s Archival Aerial vs. Present-Day Sunset Panorama",
    khmerSubtitle: "ទិដ្ឋភាពពីលើអាកាសសម័យបារាំង ១៩២០ និងទិដ្ឋភាពថ្ងៃលិចបច្ចុប្បន្ន",
    archivalImageUrl: "/images/stops/kampot-riverfront-historic.png",
    archivalHeading: "Historic Kampot River 1920s Archival Photograph",
    khmerArchivalHeading: "រូបថតបណ្ណសារប្រវត្តិសាស្ត្រដងព្រែកកំពតទសវត្សរ៍ ១៩២០",
    archivalYear: "1920s French Indochina Era",
    khmerArchivalYear: "ទសវត្សរ៍ឆ្នាំ ១៩២០ (សម័យបារាំង)",
    archivalCaption:
      "Original black-and-white aerial photograph of the Kampot River ('La rivière Kampot à Kampot'), featuring the historic French steel river crossing, early colonial riverside villas, unpaved avenues, and the misty silhouette of Bokor Mountain.",
    khmerArchivalCaption:
      "រូបថតបណ្ណសារស-ខ្មៅដើមពីលើអាកាសនៃដងព្រែកកំពត ('La rivière Kampot à Kampot') បង្ហាញពីស្ពានដែកសម័យដើម វីឡាបារាំងមាត់ព្រែក ដងផ្លូវដី និងជួរភ្នំបូកគោ។",
    modernImageUrl: "/images/stops/kampot-riverfront-modern.jpg",
    modernHeading: "Present-Day Kampot Riverfront & Entanou Bridge",
    khmerModernHeading: "វិថីមាត់ព្រែកក្រុងកំពត និងស្ពានឥន្ទធនូបច្ចុប្បន្ន",
    modernYear: "Present Day Sunset Panorama",
    khmerModernYear: "ទិដ្ឋភាពថ្ងៃលិចបច្ចុប្បន្ន",
    modernCaption:
      "Present-day bird's-eye perspective from the same vantage point, showing the restored white Entanou Bridge, bustling evening riverside promenade, colorful colonial shophouses, and vibrant evening life.",
    khmerModernCaption:
      "ទិដ្ឋភាពពីលើអាកាសបច្ចុប្បន្នពីចំណុចដដែល រំលេចដោយស្ពានឥន្ទធនូពណ៌ស ក្បួនយានយន្តដ៏អ៊ូអរ វិថីមាត់ព្រែក ជួរផ្ទះល្វែងបុរាណ និងជីវភាពរស់នៅដ៏រស់រវើក។",
    transformationNote:
      "A century of architectural survival: from a quiet colonial protectorate port into Cambodia's most beloved riverside walking destination.",
    khmerTransformationNote:
      "ការវិវត្តន៍ស្ថាបត្យកម្មជាងមួយសតវត្សរ៍៖ ពីកំពង់ផែស្ងប់ស្ងាត់សម័យអាណានិគម មកជាទីក្រុងមាត់ព្រែកដ៏ទាក់ទាញបំផុតសម្រាប់អ្នកដំណើរថ្មើរជើង។",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 sm:space-y-16 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION: SHORT, SIMPLE & DIRECT                   */}
      {/* ========================================================= */}
      <section className="space-y-6 sm:space-y-8">
        
        {/* Simple & Direct Headline Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F354D] text-[#FFFFFF] dark:bg-[#263B4B] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "ដំណើរបេតិកភណ្ឌស្ថាបត្យកម្ម • ១.៦ គ.ម" : "Curated Heritage Walk • 1.6 km"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5] leading-[1.12]">
              {isKm
                ? "ដំណើរថ្មើរជើងកាត់ប្រវត្តិសាស្ត្រអាណានិគមក្រុងកំពត"
                : "A Little Walk Through Kampot’s Colonial Past"}
            </h1>

            <p className="text-sm sm:text-base text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ស្វែងយល់ពីសំណង់បេតិកភណ្ឌសម័យបារាំងសំខាន់ៗទាំង ៦ នៅកណ្តាលក្រុងកំពត និងមាត់ព្រែកទឹកឈូ។"
                : "Explore six preserved French colonial landmarks across Kampot's riverside town center."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Golden Yellow Start Walking Button with Navy Text */}
            <Link
              href="/stops/durian-roundabout"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-105 border border-[#F0A536]"
            >
              <Footprints className="w-3.5 h-3.5" />
              <span>{isKm ? "ចាប់ផ្តើមដើរទស្សនា →" : "Start Walking Tour →"}</span>
            </Link>

            <Link
              href="/map"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] hover:bg-[#E8D9B8] dark:hover:bg-[#354858] text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-xs border border-[#E8D9B8] dark:border-[#455565] shadow-xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "ផែនទីថ្មើរជើង" : "Interactive Map"}</span>
            </Link>
          </div>
        </div>

        {/* Dramatic Full-Bleed Panoramic Hero Cover Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E8D9B8] dark:border-[#455565] bg-[#1F354D] group aspect-[16/9] sm:aspect-[21/9] w-full">
          <img
            src="/images/stops/kampot-homepage-cover.jpg"
            alt="A Little Walk Through Kampot's Colonial Past"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

          {/* Bottom Floating Pill */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-semibold drop-shadow">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
              {isKm
                ? "ដងព្រែកទឹកឈូ ស្ពានប្រវត្តិសាស្ត្រ និងជួរភ្នំបូកគោនាពេលព្រលប់"
                : "Preaek Tuek Chhu River, Historic Bridges & Bokor Mountain at Dusk"}
            </span>

            <button
              type="button"
              onClick={() =>
                setActiveModalImage({
                  url: "/images/stops/kampot-homepage-cover.jpg",
                  title: isKm ? "ដំណើរថ្មើរជើងកាត់ប្រវត្តិសាស្ត្រអាណានិគមក្រុងកំពត" : "A Little Walk Through Kampot’s Colonial Past",
                  badge: isKm ? "ទិដ្ឋភាពកំពត" : "KAMPOT AT DUSK",
                  caption: isKm
                    ? "ទិដ្ឋភាពពីលើអាកាសដ៏ស្រស់ស្អាតនៃដងព្រែកទឹកឈូ ស្ពានប្រវត្តិសាស្ត្រ និងជួរភ្នំបូកគោនាពេលព្រលប់។"
                    : "Aerial bird's-eye panorama of Kampot's Preaek Tuek Chhu river, historic bridges, and evening glow beneath Bokor Mountain.",
                })
              }
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur border border-white/20 transition-all shadow cursor-pointer shrink-0"
              title="View fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean 4-Column Minimal Metrics Bar on White Surfaces */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs flex items-center space-x-2.5">
            <Footprints className="w-4 h-4 text-[#F0A536] shrink-0" />
            <div>
              <span className="font-extrabold text-[#1F354D] dark:text-[#F5F0E5] block">1.6 km</span>
              <span className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium">{isKm ? "ចម្ងាយដើរ" : "pedestrian route"}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs flex items-center space-x-2.5">
            <Clock className="w-4 h-4 text-[#F0A536] shrink-0" />
            <div>
              <span className="font-extrabold text-[#1F354D] dark:text-[#F5F0E5] block">45–60 min</span>
              <span className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium">{isKm ? "រយៈពេលដើរ" : "walking pace"}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs flex items-center space-x-2.5">
            <Landmark className="w-4 h-4 text-[#F0A536] shrink-0" />
            <div>
              <span className="font-extrabold text-[#1F354D] dark:text-[#F5F0E5] block">6 Stops</span>
              <span className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium">{isKm ? "ទីតាំងបេតិកភណ្ឌ" : "curated sites"}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs flex items-center space-x-2.5">
            <Music className="w-4 h-4 text-[#F0A536] shrink-0" />
            <div>
              <span className="font-extrabold text-[#1F354D] dark:text-[#F5F0E5] block">100% Free</span>
              <span className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium">{isKm ? "សំនៀងសម័យមាស" : "audio & 60s music"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. KAMPOT RIVERFRONT & ENTANOU BRIDGE (BEFORE & AFTER)    */}
      {/*    PLACED BEFORE THE 6 CURATED HERITAGE STOPS             */}
      {/* ========================================================= */}
      <section className="bg-[#1F354D] dark:bg-[#263B4B] rounded-3xl border-2 border-[#E8D9B8]/40 dark:border-[#455565] p-6 sm:p-8 lg:p-10 shadow-xl space-y-6 text-[#F5F0E5] transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-[#E8D9B8]/20 dark:border-[#455565]">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#182A39] border border-[#F0A536]/40 text-[#F0A536] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "រូបថតដើម និងបច្ចុប្បន្នភាពនៃដងព្រែក" : "Archival vs. Present-Day Aerial"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F5F0E5]">
              {isKm ? riverfrontTransformation.khmerTitle : riverfrontTransformation.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#C2BBAE] font-normal">
              {isKm ? riverfrontTransformation.khmerSubtitle : riverfrontTransformation.subtitle}
            </p>
          </div>

          {/* Toggle View Mode: Side-by-Side vs. Interactive Slider */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#182A39] border border-[#E8D9B8]/30 dark:border-[#455565] self-start sm:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setCompareMode("sideBySide")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                compareMode === "sideBySide"
                  ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
                  : "text-[#F5F0E5] hover:text-[#F0A536]"
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>{isKm ? "ទន្ទឹមគ្នា" : "Side-by-Side"}</span>
            </button>
            <button
              type="button"
              onClick={() => setCompareMode("slider")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                compareMode === "slider"
                  ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
                  : "text-[#F5F0E5] hover:text-[#F0A536]"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{isKm ? "អូសប្រៀបធៀប" : "Interactive Slider"}</span>
            </button>
          </div>
        </div>

        {compareMode === "sideBySide" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {/* PHOTO 1: BEFORE (1920s ARCHIVAL) */}
            <div className="p-4 rounded-2xl bg-[#182A39] border border-[#E8D9B8]/30 dark:border-[#455565] shadow-md flex flex-col space-y-3 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E8D9B8]/30 bg-slate-900 shadow-md">
                <img
                  src={riverfrontTransformation.archivalImageUrl}
                  alt={isKm ? riverfrontTransformation.khmerArchivalHeading : riverfrontTransformation.archivalHeading}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1F354D]/95 text-[#F5F0E5] shadow-lg border border-[#E8D9B8]/50">
                  {isKm ? "មុន (រូបថតដើម ១៩២០)" : "BEFORE (1920s ARCHIVAL)"}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveModalImage({
                      url: riverfrontTransformation.archivalImageUrl,
                      title: isKm ? riverfrontTransformation.khmerArchivalHeading : riverfrontTransformation.archivalHeading,
                      caption: isKm ? riverfrontTransformation.khmerArchivalCaption : riverfrontTransformation.archivalCaption,
                      badge: isKm ? "រូបថតដើម" : "BEFORE (1920s ARCHIVAL)",
                    })
                  }
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur border border-white/20 transition-all shadow cursor-pointer"
                  title="View fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-[#F5F0E5]">
                  {isKm ? riverfrontTransformation.khmerArchivalHeading : riverfrontTransformation.archivalHeading}
                </h4>
                <div className="text-[11px] font-bold text-[#F0A536] uppercase tracking-wider">
                  {isKm ? riverfrontTransformation.khmerArchivalYear : riverfrontTransformation.archivalYear}
                </div>
                <p className="text-xs text-[#C2BBAE] leading-relaxed font-normal">
                  {isKm ? riverfrontTransformation.khmerArchivalCaption : riverfrontTransformation.archivalCaption}
                </p>
              </div>
            </div>

            {/* PHOTO 2: AFTER (PRESENT DAY) */}
            <div className="p-4 rounded-2xl bg-[#182A39] border border-[#E8D9B8]/30 dark:border-[#455565] shadow-md flex flex-col space-y-3 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E8D9B8]/30 bg-slate-900 shadow-md">
                <img
                  src={riverfrontTransformation.modernImageUrl}
                  alt={isKm ? riverfrontTransformation.khmerModernHeading : riverfrontTransformation.modernHeading}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#F0A536] text-[#1F354D] shadow-lg border border-white/20">
                  {isKm ? "ក្រោយ (បច្ចុប្បន្នភាព)" : "AFTER (PRESENT DAY)"}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveModalImage({
                      url: riverfrontTransformation.modernImageUrl,
                      title: isKm ? riverfrontTransformation.khmerModernHeading : riverfrontTransformation.modernHeading,
                      caption: isKm ? riverfrontTransformation.khmerModernCaption : riverfrontTransformation.modernCaption,
                      badge: isKm ? "រូបថតបច្ចុប្បន្ន" : "AFTER (PRESENT DAY)",
                    })
                  }
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#F0A536] text-white hover:text-[#1F354D] flex items-center justify-center backdrop-blur border border-white/20 transition-all shadow cursor-pointer"
                  title="View fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-[#F5F0E5]">
                  {isKm ? riverfrontTransformation.khmerModernHeading : riverfrontTransformation.modernHeading}
                </h4>
                <div className="text-[11px] font-bold text-[#F0A536] uppercase tracking-wider">
                  {isKm ? riverfrontTransformation.khmerModernYear : riverfrontTransformation.modernYear}
                </div>
                <p className="text-xs text-[#C2BBAE] leading-relaxed font-normal">
                  {isKm ? riverfrontTransformation.khmerModernCaption : riverfrontTransformation.modernCaption}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-[#E8D9B8]/30 dark:border-[#455565] shadow-md">
            <BeforeAfterSlider
              archivalImageUrl={riverfrontTransformation.archivalImageUrl}
              archivalYear={riverfrontTransformation.archivalYear}
              khmerArchivalYear={riverfrontTransformation.khmerArchivalYear}
              archivalCaption={riverfrontTransformation.archivalCaption}
              khmerArchivalCaption={riverfrontTransformation.khmerArchivalCaption}
              modernImageUrl={riverfrontTransformation.modernImageUrl}
              modernCaption={riverfrontTransformation.modernCaption}
              khmerModernCaption={riverfrontTransformation.khmerModernCaption}
              transformationNote={riverfrontTransformation.transformationNote}
              khmerTransformationNote={riverfrontTransformation.khmerTransformationNote}
              heightClass="h-[420px] sm:h-[520px]"
            />
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* 2B. MASCOT GUIDE: MEET TREY KAMPOT (PUFFERFISH GUIDE)     */}
      {/*     MATCHING SCREENSHOT LAYOUT BEFORE THE 6 STOPS         */}
      {/* ========================================================= */}
      <section>
        <SeahorseGuide variant="banner" persona="greeter" />
      </section>

      {/* ========================================================= */}
      {/* 3. THE 6 CURATED HERITAGE STOPS (WHITE SURFACES)          */}
      {/* ========================================================= */}
      <section id="stops-grid" className="space-y-6 pt-4 border-t border-[#E8D9B8] dark:border-[#455565]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
              {isKm ? "គោលដៅបេតិកភណ្ឌ" : "Curated Heritage Sites"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦ ក្នុងដំណើរនេះ" : "The 6 Curated Heritage Stops"}
            </h2>
            <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] font-normal">
              {isKm
                ? "ចុចលើទីតាំងនីមួយៗដើម្បីស្វែងយល់ពីរឿងរ៉ាវប្រវត្តិសាស្ត្រ ស្ថាបត្យកម្ម និងរូបភាពប្រៀបធៀប"
                : "Select any stop below to explore its architectural narrative, timeline, and before/after comparisons."}
            </p>
          </div>

          <Link
            href="/stops/durian-roundabout"
            className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#1F354D] dark:text-[#F0A536] hover:text-[#F0A536] transition-colors self-start sm:self-auto shrink-0"
          >
            <span>{isKm ? "ចាប់ផ្តើមពីទីតាំងទី ១ →" : "Start from Stop 01 →"}</span>
          </Link>
        </div>

        {/* 3-Column Minimal Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HERITAGE_STOPS.map((stop) => {
            const stopImage =
              stop.archivalComparison.modernImageUrl || stop.archivalComparison.archivalImageUrl;

            return (
              <Link
                key={stop.id}
                href={`/stops/${stop.id}`}
                className="group rounded-3xl overflow-hidden border border-[#E8D9B8] dark:border-[#455565] bg-[#FFFFFF] dark:bg-[#263B4B] shadow-xs hover:shadow-xl hover:border-[#F0A536] dark:hover:border-[#F0A536] transition-all duration-300 flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={stopImage}
                    alt={isKm ? stop.khmerTitle : stop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Stop Number Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#1F354D] text-[#FFFFFF] font-extrabold text-xs flex items-center justify-center border border-[#E8D9B8] shadow-md">
                    0{stop.order}
                  </div>

                  {/* Walking Time Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1F354D]/95 backdrop-blur-md text-[10px] font-bold text-[#FFFFFF] border border-[#E8D9B8] shadow-md">
                    {isKm ? stop.khmerWalkingTimeFromPrev : stop.walkingTimeFromPrev}
                  </div>

                  {/* Role pill */}
                  <div className="absolute bottom-3 left-3 right-3 text-[11px] text-[#F5F0E5] font-semibold truncate drop-shadow">
                    {isKm ? stop.khmerRole : stop.role}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                      {isKm ? stop.khmerPlaceCategory : stop.placeCategory}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#1F354D] dark:text-[#F5F0E5] group-hover:text-[#F0A536] transition-colors leading-snug">
                      {isKm ? stop.khmerTitle : stop.title}
                    </h3>
                    <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] line-clamp-2 leading-relaxed">
                      {isKm ? stop.khmerSummary : stop.summary}
                    </p>
                  </div>

                  {/* Footer link row */}
                  <div className="pt-2 border-t border-[#E8D9B8] dark:border-[#455565] flex items-center justify-between text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5]">
                    <span className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium truncate max-w-[180px]">
                      {isKm ? stop.khmerHistoricalEra : stop.historicalEra}
                    </span>
                    <span className="inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform text-[#B77B5B] dark:text-[#F0A536]">
                      <span>{isKm ? "មើលលម្អិត" : "Explore"}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. NEXT SECTION: WALKING & MUSIC EXPERIENCE               */}
      {/* ========================================================= */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#E8D9B8] dark:bg-[#263B4B] border-2 border-[#BBA77E]/60 dark:border-[#455565] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F0A536] text-xs font-bold uppercase tracking-wider border border-[#BBA77E]/60 dark:border-[#455565]">
            <Footprints className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "វគ្គបន្ទាប់ • NEXT SECTION" : "NEXT SECTION • WALKING & MUSIC"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? "បទពិសោធន៍ថ្មើរជើង & សំនៀងសម័យមាស" : "Walking & Music Experience"}
          </h3>
          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] max-w-xl">
            {isKm
              ? "បន្តដំណើរទៅកាន់ទំព័រ layout ថ្មីបន្ទាប់ពីទីតាំងបេតិកភណ្ឌទាំង ៦៖ តាមដានជំហាន ចម្ងាយ វឌ្ឍនភាព និងចាក់ចម្រៀងសម័យមាសកម្ពុជាទសវត្សរ៍ ១៩៦០–១៩៧០ (ស៊ីន ស៊ីសាមុត រស់ សេរីសុទ្ធា ប៉ែន រ៉ន)។"
              : "Continue to the dedicated new layout section following the 6 curated stops: track your steps, distance, route progress, and immerse yourself in 1960s–1970s Cambodian Golden Age recordings."}
          </p>
        </div>

        <Link
          href="/journey"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-sm shadow-md transition-all shrink-0 hover:scale-105 border border-[#F0A536] cursor-pointer"
        >
          <span>{isKm ? "ចូលទៅកាន់វគ្គបន្ទាប់ →" : "Continue to Next Section →"}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ========================================================= */}
      {/* 4B. VISITOR FEEDBACK & Q&A SECTION (TREY KAMPOT GUIDE)    */}
      {/* ========================================================= */}
      <FeedbackAndQA />

      {/* ========================================================= */}
      {/* 5. LAST: TOUR GRAND FINALE (KAMPOT BY NIGHT)               */}
      {/*    WITH CELEBRATORY PUFFERFISH MASCOT CELEBRATING TOUR END */}
      {/* ========================================================= */}
      <section className="space-y-4">
        {/* Celebratory Pufferfish Mascot Celebrating the Night Photo */}
        <div className="flex items-center justify-between p-4 sm:p-5 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-md">
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-16 sm:w-16 sm:h-20 shrink-0">
              <img
                src="/images/mascot/pufferfish/celebratory.png"
                alt={isKm ? "ត្រីកំពត អ្នករុករក អបអរសាទរ" : "Celebratory Trey Kampot Explorer Mascot"}
                className="w-full h-full object-contain filter drop-shadow hover:scale-110 transition-transform"
              />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#F0A536]/20 text-[#1F354D] dark:text-[#F0A536] text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#F0A536]" />
                <span>{isKm ? "មគ្គុទ្ទេសក៍ ត្រីកំពត អ្នករុករក • @treykampotexplorer" : "Trey Kampot Explorer • @treykampotexplorer"}</span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                {isKm
                  ? "អបអរសាទរ! អ្នកបានមកដល់ទីបញ្ចប់នៃដំណើរបេតិកភណ្ឌកំពតហើយ 🎉"
                  : "Hurray! You've reached the glorious finale of the Kampot Heritage Walk 🎉"}
              </h4>
              <p className="text-xs text-[#55534B] dark:text-[#C2BBAE]">
                {isKm
                  ? "គយគន់ទិដ្ឋភាពក្រុងកំពតពេលរាត្រីពីលើអាកាស ដងព្រែកទឹកឈូ និងស្ពានឥន្ទធនូភ្លឺចិញ្ចាចក្រោមជួរភ្នំបូកគោ។"
                  : "Enjoy the breathtaking twilight aerial panorama of Kampot town, the illuminated Preaek Tuek Chhu, and glowing Entanou Bridge."}
              </p>
            </div>
          </div>

          <Link
            href="/finale"
            className="hidden sm:inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-105 shrink-0"
          >
            <span>{isKm ? "ទស្សនាជំពូករាត្រី →" : "Explore Finale →"}</span>
          </Link>
        </div>

        {/* Night Aerial Photo Card */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#E8D9B8] dark:border-[#455565] bg-[#1F354D] dark:bg-[#18293B] shadow-2xl text-[#F5F0E5]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-950 group">
            <img
              src="/images/stops/kampot-night-aerial-finale.jpg"
              alt="Kampot Night Aerial Grand Finale"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#F0A536] text-[#1F354D] shadow-lg border border-white/20">
                {isKm ? "បិទបញ្ចប់ដំណើរទស្សនា" : "Tour Grand Finale"}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                  {isKm ? "ទិដ្ឋភាពក្រុងកំពតពេលរាត្រីពីលើអាកាស" : "Illuminated Kampot by Night"}
                </h3>
                <p className="text-xs text-[#C2BBAE] max-w-xl hidden sm:block">
                  {isKm
                    ? "ទិដ្ឋភាពពីលើអាកាសដ៏អស្ចារ្យនៃក្រុងកំពតពេលរាត្រី រំលេចដោយពន្លឺភ្លើងកណ្តាលក្រុង ផ្សារចាស់ ដងព្រែកទឹកឈូ និងស្ពានឥន្ទធនូ។"
                    : "Bird's-eye nocturnal panorama of Kampot's illuminated riverfront, Old Market quarter, and historic bridges beneath Bokor Mountain."}
                </p>
              </div>

              <Link
                href="/finale"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all shrink-0 self-start sm:self-auto"
              >
                <span>{isKm ? "ទស្សនារូបភាពរាត្រី →" : "View Night Tour Chapter →"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-[#182A39]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#FFFFFF] dark:bg-[#263B4B] rounded-3xl overflow-hidden border-2 border-[#E8D9B8] dark:border-[#455565] shadow-2xl text-[#1F354D] dark:text-[#F5F0E5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#E8D9B8] dark:border-[#455565] flex items-center justify-between text-[#1F354D] dark:text-[#F5F0E5] bg-[#F5F0E5] dark:bg-[#182A39]">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs">
                {activeModalImage.badge}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="w-8 h-8 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] hover:bg-[#F0A536] hover:text-[#1F354D] text-[#1F354D] dark:text-[#F5F0E5] flex items-center justify-center transition-colors border border-[#E8D9B8] dark:border-[#455565] shadow-xs cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2">
              <img
                src={activeModalImage.url}
                alt={activeModalImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-4 border-t border-[#E8D9B8] dark:border-[#455565] text-xs text-[#1F354D] dark:text-[#F5F0E5] bg-[#F5F0E5] dark:bg-[#182A39]">
              <p className="leading-relaxed">{activeModalImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
