"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X, MessageCircle, MapPin, Compass, BookOpen, Music, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type TreyKampotPersona = "explorer" | "scholar" | "storyteller" | "greeter" | "bliss" | "celebratory";

interface TreyKampotGuideProps {
  variant?: "floating" | "banner" | "card" | "tip";
  persona?: TreyKampotPersona | "main";
  speech?: string;
  khmerSpeech?: string;
  className?: string;
}

export default function SeahorseGuide({
  variant = "floating",
  persona = "greeter",
  speech,
  khmerSpeech,
  className = "",
}: TreyKampotGuideProps) {
  const { language } = useLanguage();
  const isKm = language === "km";

  const [isOpen, setIsOpen] = useState(false);
  const initialPersona: TreyKampotPersona = persona === "main" ? "greeter" : persona;
  const [activePersona, setActivePersona] = useState<TreyKampotPersona>(initialPersona);

  const personaDetails: Record<
    TreyKampotPersona,
    {
      name: string;
      role: string;
      image: string;
      defaultSpeech: string;
      icon: string;
      emotionLabel: string;
    }
  > = {
    greeter: {
      name: isKm ? "ត្រីកំពត អ្នករុករក • អ្នកទទួលភ្ញៀវ" : "Trey Kampot Explorer — The Greeter",
      role: isKm ? "រួសរាយ • រាក់ទាក់" : "Friendly • Welcome Companion",
      image: "/images/mascot/pufferfish/cheerful.png",
      defaultSpeech: isKm
        ? "សូមស្វាគមន៍មកកាន់ក្រុងកំពត! ខ្ញុំឈ្មោះ ត្រីកំពត អ្នករុករក (@treykampotexplorer)។ សូមរីករាយជាមួយស្ថាបត្យកម្មពណ៌លឿងបុរាណ ម្ហូបឆ្ងាញ់ និងខ្យល់អាកាសមាត់ព្រែកទឹកឈូ។"
        : "Welcome to Kampot! I'm Trey Kampot Explorer (@treykampotexplorer), your friendly pufferfish guide. Take your time, enjoy the weathered yellow facades, pepper aroma, and gentle river breeze.",
      icon: "👋",
      emotionLabel: isKm ? "ស្រស់ស្រាយ" : "Cheerful"
    },
    explorer: {
      name: isKm ? "ត្រីកំពត អ្នករុករក • នាំផ្លូវ" : "Trey Kampot Explorer — Trail Finder",
      role: isKm ? "ចង់ដឹងចង់ឃើញ • នាំផ្លូវ" : "Curious • Trail Finder",
      image: "/images/mascot/pufferfish/excited.png",
      defaultSpeech: isKm
        ? "ផ្លូវថ្មើរជើងនេះមានប្រវែង ១.៦ គីឡូម៉ែត្រ (៤៥–៦០ នាទី)។ តាមដាន @treykampotexplorer ហើយពាក់ស្បែកជើងងាយស្រួលដើរ យកទឹកផឹកតាមខ្លួន និងដើរលើចិញ្ចើមផ្លូវដែលមានម្លប់!"
        : "The trail covers 1.6 km (45–60 mins). Follow @treykampotexplorer, wear comfy shoes, carry drinking water, and enjoy the tree-shaded colonial boulevards!",
      icon: "🧭",
      emotionLabel: isKm ? "រំភើប" : "Excited"
    },
    scholar: {
      name: isKm ? "ត្រីកំពត អ្នករុករក • អ្នកប្រាជ្ញបណ្ណសារ" : "Trey Kampot Explorer — The Scholar",
      role: isKm ? "ស្រាវជ្រាវ • បណ្ណសារ" : "Studious • Archival Historian",
      image: "/images/mascot/pufferfish/smug.png",
      defaultSpeech: isKm
        ? "រាល់កាលបរិច្ឆេទ និងទិន្នន័យស្ថាបត្យកម្មទាំងអស់ត្រូវបានផ្ទៀងផ្ទាត់ដោយបណ្ណសារអាណានិគមបារាំង (Travaux Publics) និងកំណត់ត្រាប្រវត្តិសាស្ត្រជាតិ។"
        : "Every date and architectural milestone is cross-referenced with French protectorate archives and Cambodian cultural heritage records.",
      icon: "📜",
      emotionLabel: isKm ? "ពេញចិត្ត" : "Smug"
    },
    storyteller: {
      name: isKm ? "ត្រីកំពត អ្នករុករក • អ្នកនិទានរឿង" : "Trey Kampot Explorer — The Storyteller",
      role: isKm ? "រីករាយ • តន្ត្រីសម័យមាស" : "Enthusiastic • Golden Age Music",
      image: "/images/mascot/pufferfish/playful.png",
      defaultSpeech: isKm
        ? "កុំភ្លេចស្តាប់សំនៀងសម័យមាសទសវត្សរ៍ ១៩៦០–១៩៧០ របស់លោក ស៊ីន ស៊ីសាមុត និងអ្នកស្រី រស់ សេរីសុទ្ធា ពេលកំពុងដើរទស្សនាកំពត!"
        : "Don't forget to pair your walk with classic 1960s Cambodian recordings by Sinn Sisamouth and Ros Serey Sothea in our music journey!",
      icon: "✨",
      emotionLabel: isKm ? "ក្រមិចក្រមើម" : "Playful"
    },
    bliss: {
      name: isKm ? "ត្រីកំពត អ្នករុករក • សុភមង្គល" : "Trey Kampot Explorer — Pure Bliss",
      role: isKm ? "ស្ងប់ស្ងាត់ • មនោរម្យ" : "Peaceful • Sunset Dreamer",
      image: "/images/mascot/pufferfish/pure-bliss.png",
      defaultSpeech: isKm
        ? "ដកដង្ហើមវែងៗ និងគយគន់ថ្ងៃលិចដ៏ស្រស់ត្រកាលលើដងព្រែកទឹកឈូ និងជួរភ្នំបូកគោ។ នេះជាពេលសម្រាកដ៏មនោរម្យបំផុត។"
        : "Take a deep breath and savor the sunset over the Preaek Tuek Chhu river and Bokor Mountain. Pure serenity in old Kampot.",
      icon: "💖",
      emotionLabel: isKm ? "ស្ងប់ចិត្ត" : "Pure Bliss"
    },
    celebratory: {
      name: isKm ? "ត្រីកំពត អ្នករុករក • អបអរសាទរ" : "Trey Kampot Explorer — Celebratory",
      role: isKm ? "អបអរ • បញ្ចប់ដំណើរ" : "Joyful • Tour Finisher",
      image: "/images/mascot/pufferfish/celebratory.png",
      defaultSpeech: isKm
        ? "សូមអបអរសាទរ! អ្នកបានដើរកាត់ទីតាំងបេតិកភណ្ឌទាំង ៦ ក្នុងក្រុងកំពតរួចរាល់ហើយ! ចែករំលែកដំណើររបស់អ្នកជាមួយ @treykampotexplorer 🎉"
        : "Hurray! You've completed all 6 colonial heritage stops in Kampot! Tag your journey with @treykampotexplorer 🎉",
      icon: "🎉",
      emotionLabel: isKm ? "អបអរសាទរ" : "Celebratory"
    }
  };

  const current = personaDetails[activePersona] || personaDetails.greeter;
  const currentSpeech = isKm
    ? khmerSpeech || current.defaultSpeech
    : speech || current.defaultSpeech;

  // 1. TIP VARIANT (Inline callout inside stop details or articles)
  if (variant === "tip") {
    return (
      <div
        className={`p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] flex items-center space-x-4 shadow-xs ${className}`}
      >
        <div className="w-16 h-20 shrink-0 relative flex items-center justify-center">
          <img
            src={current.image}
            alt={current.name}
            className="max-h-full max-w-full object-contain filter drop-shadow hover:scale-105 transition-transform"
          />
        </div>
        <div className="space-y-1 flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F0A536] border border-[#BBA77E]/60 dark:border-[#455565]">
              {current.name}
            </span>
            <span className="text-[11px] text-[#B77B5B] dark:text-[#F0A536] font-medium hidden sm:inline">
              {current.role}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#1F354D] dark:text-[#F5F0E5] leading-relaxed font-normal">
            {currentSpeech}
          </p>
        </div>
      </div>
    );
  }

  // 2. BANNER / CARD VARIANT (Prominent feature on homepage or journey page matching screenshot)
  if (variant === "banner" || variant === "card") {
    return (
      <div
        className={`rounded-3xl border-2 border-[#E8D9B8] dark:border-[#455565] bg-[#F5F0E5] dark:bg-[#263B4B] p-6 sm:p-8 shadow-xl relative overflow-hidden text-[#1F354D] dark:text-[#F5F0E5] ${className}`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          
          {/* Left Mascot Display with Character & Mood label floating above like the screenshot */}
          <div className="flex flex-col items-center shrink-0 group">
            <span className="mb-1 text-sm font-serif italic text-[#8C7A5E] dark:text-[#E8D9B8]/80 select-none">
              {current.emotionLabel}
            </span>
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#E8D9B8]/60 dark:bg-[#182A39]/60 rounded-full blur-xl group-hover:scale-110 transition-transform" />
              <img
                src={current.image}
                alt={current.name}
                className="relative max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Mascot Persona Info & Speech Bubble */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F0A536] border border-[#BBA77E]/60 dark:border-[#455565] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F0A536]" />
                  <span>{isKm ? "មគ្គុទ្ទេសក៍និមិត្តរូបក្រុងកំពត" : "OFFICIAL WALK MASCOT"}</span>
                </div>
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#1F354D] text-[#F0A536] dark:bg-[#F0A536] dark:text-[#182A39]">
                  @treykampotexplorer
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                {isKm ? "ជួបជាមួយ ត្រីកំពត អ្នករុករក — មគ្គុទ្ទេសក៍ទេសចរណ៍" : "Meet Trey Kampot Explorer — Pufferfish Guide"}
              </h3>
              <p className="text-xs sm:text-sm text-[#B77B5B] dark:text-[#F0A536] font-bold">
                {current.name} — {current.role}
              </p>
            </div>

            {/* Speech Bubble */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-[#E8D9B8]/70 dark:bg-[#182A39] border border-[#BBA77E] dark:border-[#455565] shadow-xs text-xs sm:text-sm text-[#1F354D] dark:text-[#F5F0E5] leading-relaxed">
              <span className="font-medium">{currentSpeech}</span>
            </div>

            {/* Persona Switcher Buttons matching the user's screenshot */}
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] mr-1">
                {isKm ? "ជ្រើសរើសតួអង្គ៖" : "CHOOSE PERSONA:"}
              </span>
              {(
                [
                  { key: "greeter", label: isKm ? "អ្នករាក់ទាក់" : "The Greeter", icon: "👋" },
                  { key: "explorer", label: isKm ? "អ្នករុករក" : "The Explorer", icon: "🧭" },
                  { key: "scholar", label: isKm ? "អ្នកប្រាជ្ញ" : "The Scholar", icon: "📜" },
                  { key: "storyteller", label: isKm ? "អ្នកនិទាន" : "The Storyteller", icon: "✨" },
                  { key: "bliss", label: isKm ? "សុភមង្គល" : "Pure Bliss", icon: "💖" },
                  { key: "celebratory", label: isKm ? "អបអរសាទរ" : "Celebration", icon: "🎉" }
                ] as const
              ).map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setActivePersona(p.key)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer ${
                    activePersona === p.key
                      ? "bg-[#1F354D] text-white dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs scale-105"
                      : "bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] hover:bg-[#E8D9B8]"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. FLOATING COMPANION WIDGET (Bottom Right Corner of Screen matching screenshot)
  return (
    <>
      {/* Floating Mascot Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {/* Speech Popover when open */}
        {isOpen && (
          <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] rounded-3xl bg-[#F5F0E5] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-2xl p-4 sm:p-5 space-y-3 animate-in fade-in slide-in-from-bottom-4 text-[#1F354D] dark:text-[#F5F0E5]">
            <div className="flex items-center justify-between pb-2 border-b border-[#E8D9B8]/60 dark:border-[#455565]">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                  {current.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] hover:bg-[#F0A536] hover:text-[#1F354D] flex items-center justify-center transition-colors text-xs cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#1F354D] dark:text-[#F5F0E5] leading-relaxed">
              {currentSpeech}
            </p>

            {/* Quick Action Persona Switcher */}
            <div className="pt-2 border-t border-[#E8D9B8]/60 dark:border-[#455565] flex items-center justify-between text-[11px]">
              <div className="flex space-x-1.5">
                {(["greeter", "explorer", "scholar", "storyteller", "bliss", "celebratory"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setActivePersona(p)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all cursor-pointer ${
                      activePersona === p
                        ? "bg-[#1F354D] text-white dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs scale-105"
                        : "bg-[#E8D9B8] dark:bg-[#182A39] hover:bg-[#F0A536]"
                    }`}
                    title={personaDetails[p].name}
                  >
                    {personaDetails[p].icon}
                  </button>
                ))}
              </div>

              <Link
                href="/stops/durian-roundabout"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center space-x-1 font-bold text-[#B77B5B] dark:text-[#F0A536] hover:underline"
              >
                <span>{isKm ? "ចាប់ផ្តើមដើរ" : "Start Walk"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Mascot Trigger Button matching the screenshot pill */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-1.5 rounded-full bg-[#F5F0E5] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#F0A536] shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center space-x-2"
          title={isKm ? "ចុចដើម្បីជជែកជាមួយ ត្រីកំពត អ្នករុករក (@treykampotexplorer)" : "Tap to chat with Trey Kampot Explorer (@treykampotexplorer)"}
          aria-label={isKm ? "ត្រីកំពត អ្នករុករក" : "Trey Kampot Explorer"}
        >
          <div className="w-12 h-14 relative flex items-center justify-center">
            <img
              src={current.image}
              alt={isKm ? "រូបតំណាង ត្រីកំពត អ្នករុករក" : "Trey Kampot Explorer Mascot"}
              className="max-h-full max-w-full object-contain filter drop-shadow group-hover:rotate-6 transition-transform"
            />
          </div>
          <span className="hidden sm:inline-block pr-3 text-xs font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? "ត្រីកំពត អ្នករុករក" : "Trey Kampot Explorer"}
          </span>
          {/* Notification Ping */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#F0A536] border-2 border-white dark:border-[#182A39]" />
        </button>
      </div>
    </>
  );
}
