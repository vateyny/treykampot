"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Headphones,
  Footprints,
  Sparkles,
  Music,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import WalkingAndMusicExperience from "@/components/WalkingAndMusicExperience";
import SeahorseGuide from "@/components/SeahorseGuide";

export default function JourneyPage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      
      {/* 1. TOP MINIMAL NAVIGATION */}
      <nav className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565] text-xs">
        <Link
          href="/stops/entanou-bridge"
          className="inline-flex items-center space-x-1.5 text-[#1F354D] dark:text-[#F5F0E5]/90 hover:text-[#F0A536] dark:hover:text-[#F0A536] font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isKm ? "← ត្រឡប់ទៅទីតាំងទី ៦ (ស្ពានឥន្ទធនូ)" : "← Back to Stop 06 (Entanou Bridge)"}</span>
        </Link>

        <Link
          href="/map"
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] shadow-xs hover:border-[#F0A536] transition-all"
        >
          <MapPin className="w-3.5 h-3.5 text-[#F0A536]" />
          <span>{isKm ? "មើលផែនទីទាំងមូល" : "View Walking Map"}</span>
        </Link>
      </nav>

      {/* 2. SECTION HEADER */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "បទពិសោធន៍បន្ទាប់ពីដំណើរថ្មើរជើង" : "Next Section • Post-Walk Experience"}</span>
          </span>

          <span className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isKm ? "បានឆ្លងកាត់ទីតាំងបេតិកភណ្ឌទាំង ៦" : "Following the 6 Curated Stops"}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5] leading-tight">
          {isKm ? "ដំណើរថ្មើរជើង & សំនៀងសម័យមាស" : "Walking & Music Experience"}
        </h1>

        <p className="text-sm sm:text-base text-[#55534B] dark:text-[#C2BBAE] leading-relaxed max-w-3xl font-normal">
          {isKm
            ? "ផ្ទៀងផ្ទាត់ជំហាន ចម្ងាយ និងវឌ្ឍនភាពនៃទីតាំងបេតិកភណ្ឌទាំង ៦ ដែលអ្នកបានទស្សនាក្នុងក្រុងកំពត ខណៈកំពុងរីករាយជាមួយសំនៀងបុរាណខ្មែរទសវត្សរ៍ឆ្នាំ ១៩៦០–១៩៧០ របស់លោក ស៊ីន ស៊ីសាមុត អ្នកស្រី រស់ សេរីសុទ្ធា និងអ្នកស្រី ប៉ែន រ៉ន។"
            : "Review your completed walking activity across Kampot's 6 curated colonial stops while experiencing legendary Cambodian music from the 1960s and early 1970s by Sinn Sisamouth, Ros Serey Sothea, and Pen Ron."}
        </p>
      </header>

      {/* MASCOT STORYTELLER GUIDE TIP */}
      <section>
        <SeahorseGuide variant="tip" persona="storyteller" />
      </section>

      {/* 3. THE INTERACTIVE WALKING & MUSIC DASHBOARD */}
      <section className="pt-2">
        <WalkingAndMusicExperience />
      </section>

      {/* 4. TRANSITION TO GRAND FINALE */}
      <section className="pt-6 border-t border-[#E8D9B8] dark:border-[#455565] space-y-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1F354D] dark:bg-[#263B4B] border-2 border-[#E8D9B8]/40 dark:border-[#455565] shadow-xl text-[#F5F0E5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-[#F0A536] uppercase tracking-wider">
              {isKm ? "វគ្គបិទបញ្ចប់ដំណើរ" : "Final Tour Chapter"}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F0E5]">
              {isKm ? "ទស្សនារូបភាពរាត្រីសមោសរបិទបញ្ចប់ដំណើរ" : "Kampot by Night: The Tour Grand Finale"}
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
