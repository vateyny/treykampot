"use client";

import React from "react";
import Link from "next/link";
import { Compass, BookOpen, MapPin } from "lucide-react";
import { HERITAGE_STOPS } from "@/data/stops";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isKm = language === "km";

  return (
    <footer className="bg-[#1F354D] dark:bg-[#182A39] text-[#F5F0E5] border-t-2 border-[#E8D9B8]/40 dark:border-[#455565] mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#182A39] dark:bg-[#263B4B] border border-[#F0A536]/40 flex items-center justify-center text-[#F0A536] shadow-xs overflow-hidden p-1">
                <img
                  src="/images/mascot/pufferfish/excited.png"
                  alt="Trey Kampot Explorer"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold text-[#F5F0E5] block leading-tight">
                  {isKm ? "ត្រីកំពត" : "Trey Kampot"}
                </span>
                <span className="text-[11px] font-bold text-[#F0A536]">
                  @treykampotexplorer
                </span>
              </div>
            </div>
            <p className="text-xs text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ដំណើរបេតិកភណ្ឌឌីជីថលដោយខ្លួនឯងឥតគិតថ្លៃ ស្វែងយល់ពីស្ថាបត្យកម្មសម័យអាណានិគមបារាំង ផ្ទះល្វែងពាណិជ្ជកម្ម និងសំណង់មាត់ព្រែកប្រវត្តិសាស្ត្រនៃក្រុងកំពត ប្រទេសកម្ពុជា ជាមួយ ត្រីកំពត អ្នករុករក (@treykampotexplorer)។"
                : "A free, mobile-friendly digital heritage walk exploring the surviving French colonial-era architecture, commercial shophouse traditions, and riverside landmarks of Kampot, Cambodia with Trey Kampot Explorer (@treykampotexplorer)."}
            </p>
            <div className="text-[11px]">
              <span className="inline-block px-3 py-1 rounded-full bg-[#182A39] text-[#F0A536] border border-[#F0A536]/30 font-bold">
                @treykampotexplorer • {isKm ? "ត្រីកំពត" : "Trey Kampot"}
              </span>
            </div>
          </div>

          {/* Column 2: The Walking Route */}
          <div>
            <h3 className="text-xs font-bold text-[#F5F0E5] uppercase tracking-wider mb-4 flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦" : "The 6 Heritage Stops"}</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {HERITAGE_STOPS.map((stop) => (
                <li key={stop.id}>
                  <Link
                    href={`/stops/${stop.id}`}
                    className="text-[#C2BBAE] hover:text-[#F0A536] transition-colors flex items-center space-x-2 font-medium"
                  >
                    <span className="text-[10px] text-[#F0A536] font-bold w-4">
                      0{stop.order}
                    </span>
                    <span className="truncate">{isKm ? stop.khmerTitle : stop.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold text-[#F5F0E5] uppercase tracking-wider mb-4 flex items-center space-x-2">
              <BookOpen className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "ទំព័ររុករក" : "Navigation & Info"}</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#C2BBAE] font-medium">
              <li>
                <Link href="/" className="hover:text-[#F0A536] transition-colors">
                  {isKm ? "ទំព័រដើម & ទិដ្ឋភាពទូទៅ" : "Home & Walk Overview"}
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-[#F0A536] transition-colors">
                  {isKm ? "ផែនទីថ្មើរជើងអន្តរកម្ម" : "Interactive Walking Map"}
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-[#F0A536] transition-colors">
                  {isKm ? "ដំណើរថ្មើរជើង & តន្ត្រីសម័យមាស" : "Walking & Music Experience"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F0A536] transition-colors">
                  {isKm ? "អំពីគម្រោង & វិធីសាស្ត្រ" : "About Project & Methodology"}
                </Link>
              </li>
              <li>
                <Link href="/about#bibliography" className="hover:text-[#F0A536] transition-colors">
                  {isKm ? "ឯកសារយោង & បណ្ណសារ" : "References & Archival Sources"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Archival Citations & Ethics */}
          <div>
            <h3 className="text-xs font-bold text-[#F5F0E5] uppercase tracking-wider mb-4">
              {isKm ? "ឯកសារយោង & ការទទួលស្គាល់" : "Citations & Acknowledgments"}
            </h3>
            <p className="text-xs text-[#C2BBAE] leading-relaxed mb-3">
              {isKm
                ? "ការស្រាវជ្រាវត្រូវបានចងក្រងពីឯកសារបេតិកភណ្ឌផ្លូវការ Wander-Lush, Kampot Old Quarter Walking Guide, Leighton Travels, Evendo និង IntoCambodia។"
                : "Research synthesized from peer-reviewed heritage records, Wander-Lush, Kampot Old Quarter Walking Guide, Leighton Travels, Evendo, and IntoCambodia."}
            </p>
            <div className="pt-2">
              <Link
                href="/about#bibliography"
                className="inline-flex items-center space-x-1.5 text-xs text-[#F0A536] hover:underline font-bold"
              >
                <span>{isKm ? "មើលគន្ថនិទ្ទេសទាំងមូល →" : "View Full Bibliography →"}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C2BBAE]/70 gap-4">
          <p>© {new Date().getFullYear()} {isKm ? "ត្រីកំពត (Trey Kampot)" : "Trey Kampot"} • Mascot: {isKm ? "ត្រីកំពត អ្នករុករក" : "Trey Kampot Explorer"} • <span className="text-[#F0A536]">@treykampotexplorer</span></p>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-[#F0A536] transition-colors">
              {isKm ? "ទំព័រដើម" : "Home"}
            </Link>
            <span>•</span>
            <Link href="/map" className="hover:text-[#F0A536] transition-colors">
              {isKm ? "ផែនទី" : "Map"}
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-[#F0A536] transition-colors">
              {isKm ? "ប្រភព" : "Sources"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
