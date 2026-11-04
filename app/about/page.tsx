"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users,
  Building2,
  Layers,
  MapPin,
  Clock,
  Radio,
  FileText,
  Search,
  Filter,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TOUR_METRICS } from "@/data/stops";

type SourceCategory = "all" | "architecture" | "field" | "history";

interface BibItem {
  id: string;
  title: string;
  khmerTitle: string;
  url: string;
  domain: string;
  category: SourceCategory;
  categoryLabel: string;
  khmerCategoryLabel: string;
  sourceType: string;
  khmerSourceType: string;
  description: string;
  khmerDescription: string;
  keyCitation: string;
  khmerKeyCitation: string;
}

export default function AboutPage() {
  const { language } = useLanguage();
  const isKm = language === "km";
  const [selectedCategory, setSelectedCategory] = useState<SourceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const bibliography: BibItem[] = [
    {
      id: "durian-roundabout",
      title: "Evendo — Durian Roundabout Landmark Profile",
      khmerTitle: "Evendo — ប្រវត្តិ និងព័ត៌មានរង្វង់មូលធុរេនកំពត",
      url: "https://evendo.com/locations/cambodia/kampot/landmark/durian-roundabout",
      domain: "evendo.com",
      category: "history",
      categoryLabel: "Civic History & Heritage",
      khmerCategoryLabel: "ប្រវត្តិសាស្ត្រ និងបេតិកភណ្ឌទីក្រុង",
      sourceType: "Civic Monument Directory",
      khmerSourceType: "បេតិកភណ្ឌកសិកម្ម និងវិមានសាធារណៈ",
      description:
        "Comprehensive overview of Kampot's agricultural rebirth, the Monthong durian orchards of Teuk Chhou, and the monument's significance as the town gateway.",
      khmerDescription:
        "ទិដ្ឋភាពទូទៅនៃការរស់ឡើងវិញនៃវិស័យកសិកម្មកំពត ចម្ការធុរេនម៉នថងនៅស្រុកទឹកឈូ និងសារៈសំខាន់នៃវិមាននេះជាច្រកទ្វារស្វាគមន៍ក្រុងកំពត។",
      keyCitation: "Gateway landmark erected after 1979 honoring Kampot fruit agriculture.",
      khmerKeyCitation: "វិមានច្រកទ្វារសាងសង់ឡើងក្រោយឆ្នាំ ១៩៧៩ ដើម្បីលើកតម្កើងវិស័យកសិកម្មកំពត។",
    },
    {
      id: "hotel-old-cinema",
      title: "Wander-Lush — Hotel Old Cinema: Inside Kampot's Art Deco Gem",
      khmerTitle: "Wander-Lush — សណ្ឋាគារ រោងកុនចាស់៖ ត្បូងពេជ្រ Art Deco នៅកំពត",
      url: "https://wander-lush.org/hotel-old-cinema-kampot-cambodia/",
      domain: "wander-lush.org",
      category: "architecture",
      categoryLabel: "Architectural Preservation",
      khmerCategoryLabel: "ការអភិរក្សស្ថាបត្យកម្ម",
      sourceType: "Architectural Travel Journalism",
      khmerSourceType: "សារព័ត៌មានស្ថាបត្យកម្ម និងទេសចរណ៍",
      description:
        "In-depth investigation of the 1930s Chinese opera hall ('The Gong'), its golden age as the 7 Makara cinema, and its sensitive 2019 adaptive restoration.",
      khmerDescription:
        "ការស្រាវជ្រាវស៊ីជម្រៅពីរោងមហោស្រពចិនទសវត្សរ៍ឆ្នាំ១៩៣០ ('The Gong') សម័យកាលមាសជារោងកុន ៧ មករា និងការជួសជុលឡើងវិញក្នុងឆ្នាំ ២០១៩។",
      keyCitation: "Original stepped pediment and French-era cinema proportions preserved.",
      khmerKeyCitation: "រក្សាហោជាងកាំជណ្តើរដើម និងទំហំសមាមាត្ររោងកុនសម័យបារាំង។",
    },
    {
      id: "leighton-travels",
      title: "Leighton Travels — The Iconic Hotel Old Cinema in Kampot",
      khmerTitle: "Leighton Travels — អគារនិមិត្តរូបរោងកុនចាស់នៅកំពត",
      url: "https://leightontravels.com/2021/03/05/the-iconic-hotel-old-cinema-in-kampot/",
      domain: "leightontravels.com",
      category: "architecture",
      categoryLabel: "Architectural Documentation",
      khmerCategoryLabel: "ឯកសារស្ថាបត្យកម្ម និងរូបភាព",
      sourceType: "Field Photography & History",
      khmerSourceType: "ឯកសារប្រវត្តិសាស្ត្រ និងរូបភាពជាក់ស្តែង",
      description:
        "Photographic archive, architectural details of the facade pediments, and interviews documenting the building's transformation across eight decades.",
      khmerDescription:
        "បណ្ណសាររូបថត ព័ត៌មានលម្អិតនៃហោជាងខាងមុខ និងបទសម្ភាសន៍ដែលកត់ត្រាការផ្លាស់ប្តូរនៃអគារនេះអស់រយៈពេលប្រាំបីទសវត្សរ៍។",
      keyCitation: "Photographic survey of Chinese-Khmer Art Deco fusion elements.",
      khmerKeyCitation: "ការអង្កេតរូបថតនៃធាតុផ្សំសិល្បៈ Art Deco បែបចិន-ខ្មែរ។",
    },
    {
      id: "old-quarter-guide",
      title: "Kampot Old Quarter Walking Guide & Heritage Survey",
      khmerTitle: "មគ្គុទ្ទេសក៍ដើរទស្សនាតំបន់ចាស់ក្រុងកំពត និងការអង្កេតបេតិកភណ្ឌ",
      url: "https://kampot.life/discover-kampot/kampot-old-quarter-walking-guide/",
      domain: "kampot.life",
      category: "field",
      categoryLabel: "Field Survey & Urban Inventory",
      khmerCategoryLabel: "ការអង្កេតបេតិកភណ្ឌ និងសារពើភ័ណ្ឌ",
      sourceType: "Municipal Heritage Survey",
      khmerSourceType: "ការអង្កេតបេតិកភណ្ឌមូលដ្ឋាន",
      description:
        "Field documentation of colonial municipal shophouse zoning, French-era covered walkways (five-foot ways), and the 1930s waterfront fish market pavilion.",
      khmerDescription:
        "ឯកសារនៃការកំណត់តំបន់ផ្ទះល្វែងសម័យអាណានិគម របៀងថ្មើរជើងក្រោមម្លប់ ៥ ហ្វីត និងពន្លាផ្សារត្រីមាត់ព្រែកទសវត្សរ៍ឆ្នាំ១៩៣០។",
      keyCitation: "Urban street zoning, covered colonial arcades, and shophouse facades.",
      khmerKeyCitation: "ការរៀបចំដងផ្លូវ របៀងម្លប់សម័យអាណានិគម និងហ្វាសាតផ្ទះល្វែង។",
    },
    {
      id: "entanou-bridge",
      title: "Wander-Lush — Things to Do in Kampot: Entanou Bridge",
      khmerTitle: "Wander-Lush — តំបន់កម្សាន្តនៅកំពត៖ ស្ពានឥន្ទធនូ",
      url: "https://wander-lush.org/things-to-do-in-kampot-cambodia/",
      domain: "wander-lush.org",
      category: "field",
      categoryLabel: "Field Survey & Urban Inventory",
      khmerCategoryLabel: "ការអង្កេតបេតិកភណ្ឌ និងសារពើភ័ណ្ឌ",
      sourceType: "Regional Cultural Guide",
      khmerSourceType: "មគ្គុទ្ទេសក៍វប្បធម៌តំបន់",
      description:
        "Historical narrative of the Old French Bridge spanning Preaek Tuek Chhu, its wartime demolition, Bailey bridge reconstruction, and conversion into a pedestrian sanctuary.",
      khmerDescription:
        "រឿងរ៉ាវប្រវត្តិសាស្ត្រនៃស្ពានបារាំងចាស់ឆ្លងកាត់ព្រែកទឹកឈូ ការបំផ្លិចបំផ្លាញក្នុងសម័យសង្គ្រាម ការតភ្ជាប់ស្ពានបេឡី និងការប្រែក្លាយជាកន្លែងថ្មើរជើង។",
      keyCitation: "Multi-era bridge spans: 1920s French piers, Bailey truss, and sunset walk.",
      khmerKeyCitation: "ប្រវត្តិស្ពានច្រើនសម័យ៖ គ្រឹះបារាំងឆ្នាំ ១៩២០ គ្រោងដែកបេឡី និងផ្លូវដើរថ្ងៃលិច។",
    },
    {
      id: "intocambodia-history",
      title: "IntoCambodia — Kampot Province: History & Architecture",
      khmerTitle: "IntoCambodia — ខេត្តកំពត៖ ប្រវត្តិសាស្ត្រ និងស្ថាបត្យកម្ម",
      url: "https://intocambodia.org/content/kampot-province",
      domain: "intocambodia.org",
      category: "history",
      categoryLabel: "Civic History & Heritage",
      khmerCategoryLabel: "ប្រវត្តិសាស្ត្រ និងបេតិកភណ្ឌទីក្រុង",
      sourceType: "Regional Archival Compendium",
      khmerSourceType: "កម្រងឯកសារប្រវត្តិសាស្ត្រតំបន់",
      description:
        "Historical context on Kampot's 19th-century role as Cambodia's premier international port prior to the opening of Sihanoukville in the 1950s.",
      khmerDescription:
        "បរិបទប្រវត្តិសាស្ត្រនៃតួនាទីរបស់កំពតក្នុងសតវត្សរ៍ទី ១៩ ជាកំពង់ផែអន្តរជាតិចម្បងរបស់កម្ពុជា មុនពេលបើកកំពង់ផែក្រុងព្រះសីហនុក្នុងទសវត្សរ៍ឆ្នាំ១៩៥០។",
      keyCitation: "Pre-1950s maritime port role and French colonial administration center.",
      khmerKeyCitation: "តួនាទីកំពង់ផែសមុទ្រមុនទសវត្សរ៍ ១៩៥០ និងមជ្ឈមណ្ឌលរដ្ឋបាលបារាំង។",
    },
  ];

  const filteredBibliography = bibliography.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.khmerTitle.includes(searchQuery) ||
      item.khmerDescription.includes(searchQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 sm:space-y-16 text-[#1F354D] dark:text-[#F5F0E5] transition-colors duration-300">
      {/* 1. HERO HEADER: ARCHIVAL PARCHMENT LINEN BOX */}
      <section className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] p-6 sm:p-10 lg:p-12 shadow-xl text-[#1F354D] dark:text-[#F5F0E5]">
        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F0A536] text-xs font-extrabold uppercase tracking-widest shadow-xs transition-colors duration-300">
            <BookOpen className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>
              {isKm
                ? "ការស្រាវជ្រាវ គោលបំណង និងគន្ថនិទ្ទេស"
                : "Research, Purpose & Bibliography"}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5] leading-tight">
              {isKm ? "អំពី ត្រីកំពត (Trey Kampot)" : "About Trey Kampot"}
            </h1>
            <p className="text-sm sm:text-base text-[#B77B5B] dark:text-[#F0A536] font-bold">
              {isKm
                ? "មគ្គុទ្ទេសក៍៖ ត្រីកំពត អ្នករុករក • @treykampotexplorer"
                : "Mascot: Trey Kampot Explorer • @treykampotexplorer"}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
            {isKm
              ? "គម្រោង ត្រីកំពត (Trey Kampot) ត្រូវបានបង្កើតឡើងដើម្បីធ្វើឱ្យប្រវត្តិសាស្ត្រស្ថាបត្យកម្មដ៏សម្បូរបែបនៃក្រុងកំពត អាចចូលទស្សនា និងស្វែងយល់បានដោយងាយស្រួលនៅលើទូរសព្ទដៃ ដោយឥតគិតថ្លៃ ១០០% សម្រាប់ភ្ញៀវទេសចរ និស្សិត និងប្រជាពលរដ្ឋគ្រប់រូប ជាមួយ ត្រីកំពត អ្នករុករក (@treykampotexplorer)។"
              : "Trey Kampot is designed to make the layered architectural heritage of Kampot accessible directly on mobile screens—connecting 1920s French Indochina archival photos, Chinese merchant shophouse history, and contemporary adaptive reuse into one fluid walking experience led by Trey Kampot Explorer (@treykampotexplorer)."}
          </p>

          {/* Quick Metrics Bar: Archival Parchment with Navy text */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-center shadow-xs transition-colors duration-300">
              <span className="block text-lg sm:text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                {TOUR_METRICS.totalStops}
              </span>
              <span className="text-[11px] font-bold text-[#55534B] dark:text-[#C2BBAE] uppercase">
                {isKm ? "ទីតាំងបេតិកភណ្ឌ" : "Curated Stops"}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-center shadow-xs transition-colors duration-300">
              <span className="block text-lg sm:text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                {TOUR_METRICS.totalDistance}
              </span>
              <span className="text-[11px] font-bold text-[#55534B] dark:text-[#C2BBAE] uppercase">
                {isKm ? "ចម្ងាយដើរសរុប" : "Walking Trail"}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-center shadow-xs transition-colors duration-300">
              <span className="block text-lg sm:text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                100+ Yrs
              </span>
              <span className="text-[11px] font-bold text-[#55534B] dark:text-[#C2BBAE] uppercase">
                {isKm ? "ប្រវត្តិសាស្ត្ររស់" : "Living History"}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-center shadow-xs transition-colors duration-300">
              <span className="block text-lg sm:text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                100% Free
              </span>
              <span className="text-[11px] font-bold text-[#55534B] dark:text-[#C2BBAE] uppercase">
                {isKm ? "បើកចំហសាធារណៈ" : "Open Access"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BACKGROUND & URBAN NARRATIVE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-white dark:bg-[#263B4B] rounded-3xl border-2 border-[#E8D9B8] dark:border-[#455565] p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-4 text-[#1F354D] dark:text-[#F5F0E5]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
              <Building2 className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
              <span>{isKm ? "១. គំនិតផ្តួចផ្តើម និងបរិបទប្រវត្តិសាស្ត្រ" : "1. The Idea & Urban Context"}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "ហេតុអ្វីបានជាក្រុងកំពតមានលក្ខណៈពិសេស?" : "Why Kampot's Built Heritage Matters"}
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
            {isKm ? (
              <>
                <p>
                  <strong>កំពត</strong> គឺជាទីក្រុងប្រវត្តិសាស្ត្រមួយនៅភាគខាងត្បូងនៃប្រទេសកម្ពុជា ដែលល្បីល្បាញដោយសារទីតាំងមាត់ព្រែកដ៏ស្រស់ស្អាត ដងផ្លូវពាណិជ្ជកម្មចាស់ និងសំណង់អគារបុរាណដែលនៅសេសសល់ជាច្រើន។ ទិដ្ឋភាពទីក្រុងឆ្លុះបញ្ចាំងពីដំណាក់កាលអភិវឌ្ឍន៍បីសំខាន់៖ ការរៀបចំដែនដីរដ្ឋបាលសម័យអាណានិគមបារាំង ឥទ្ធិពលពាណិជ្ជកម្មចិន និងការផ្លាស់ប្តូរការប្រើប្រាស់អគារបច្ចុប្បន្ន។
                </p>
                <p>
                  សព្វថ្ងៃនេះ អគារជាច្រើនកំពុងដំណើរការជាសណ្ឋាគារ ហាងកាហ្វេ និងអាជីវកម្មទេសចរណ៍។ ទោះជាយ៉ាងណា ភ្ញៀវទេសចរដែលដើរកាត់ជារឿយៗមិនបានដឹងពីរឿងរ៉ាវនៅពីក្រោយអគារទាំងនេះឡើយ។ គម្រោង <em>កំពតឆ្លងកាត់ពេលវេលា</em> ប្រមូលផ្តុំចំណេះដឹងដែលនៅរាយប៉ាយមកក្នុងមគ្គុទ្ទេសក៍ឌីជីថលតែមួយ។
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Kampot</strong> is one of Cambodia's most atmospheric urban treasures, framed between the calm waters of Preaek Tuek Chhu and the misty peaks of Bokor National Park. Unlike many rapid urban expansions, Kampot retains a remarkably cohesive concentration of early 20th-century French municipal architecture, Chinese merchant shophouse blocks, and open riverside esplanades.
                </p>
                <p>
                  Today, these landmarks live vibrant second lives as heritage boutique hotels (Hotel Old Cinema), specialty cafes (Cal-coffee), and waterfront destinations (Starbucks at the Old Fish Market). <em>Trey Kampot</em> unites scattered colonial archives, historical photographs, and architectural observations into an intuitive, self-guided experience for every visitor, led by Trey Kampot Explorer (@treykampotexplorer).
                </p>
              </>
            )}
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-[#1F354D] dark:text-[#F5F0E5]">
            <span className="px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565]">
              🏛️ French Indochina Planning
            </span>
            <span className="px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565]">
              🏮 Chinese Merchant Shophouses
            </span>
            <span className="px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565]">
              ☕ Adaptive Heritage Reuse
            </span>
          </div>
        </div>

        {/* 2-Column Audience Target Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-[#263B4B] rounded-3xl border-2 border-[#E8D9B8] dark:border-[#455565] p-6 shadow-md space-y-3 text-[#1F354D] dark:text-[#F5F0E5]">
            <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
              <Compass className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
              <span>{isKm ? "ទស្សនិកជនចម្បង" : "Primary Audience"}</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "អ្នកធ្វើដំណើរឯករាជ្យ & ថ្មើរជើង" : "Independent Travelers & Walkers"}
            </h3>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ភ្ញៀវទេសចរដែលចូលចិត្តដើរស្វែងយល់ពីប្រវត្តិសាស្ត្រដោយខ្លួនឯង ថតរូបស្ថាបត្យកម្ម និងទស្សនាតាមល្បឿនផ្ទាល់ខ្លួនដោយមិនបាច់ពឹងផ្អែកលើក្រុមទេសចរណ៍ពាណិជ្ជកម្ម។"
                : "Travelers who prioritize unhurried, mindful discovery—those who want to explore architectural facades, photograph historic pediments, and understand what they are looking at while walking."}
            </p>
          </div>

          <div className="bg-white dark:bg-[#263B4B] rounded-3xl border-2 border-[#E8D9B8] dark:border-[#455565] p-6 shadow-md space-y-3 text-[#1F354D] dark:text-[#F5F0E5]">
            <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
              <GraduationCap className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
              <span>{isKm ? "ទស្សនិកជនបន្ទាប់" : "Secondary Audience"}</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "យុវជន សិស្ស និស្សិត & អ្នកស្រឡាញ់បេតិកភណ្ឌ" : "Students, Youth & Heritage Advocates"}
            </h3>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "និស្សិតស្ថាបត្យកម្ម អ្នកស្រាវជ្រាវប្រវត្តិសាស្ត្រ និងប្រជាពលរដ្ឋកម្ពុជាដែលចាប់អារម្មណ៍លើការកត់ត្រាការចងចាំទីក្រុង និងចូលរួមថែរក្សាបេតិកភណ្ឌ។"
                : "Architecture students, local researchers, and young Cambodians interested in preserving urban memory, architectural taxonomy, and advocating for cultural conservation."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROTOTYPE SCOPE (VERSION 1) */}
      <section className="bg-white dark:bg-[#263B4B] rounded-3xl border-2 border-[#E8D9B8] dark:border-[#455565] p-6 sm:p-8 lg:p-10 shadow-md space-y-6 text-[#1F354D] dark:text-[#F5F0E5]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8D9B8] dark:border-[#455565] pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
              <Layers className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
              <span>{isKm ? "៣. វិសាលភាពនៃគំរូសាកល្បង (កំណែទី ១)" : "3. Version 1 Prototype Scope"}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] mt-1">
              {isKm ? "មុខងារស្នូលនៃគម្រោង" : "Core Educational Features"}
            </h2>
          </div>
          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565] self-start sm:self-auto">
            {isKm ? "បានផ្ទៀងផ្ទាត់ ១០០%" : "100% Field Verified"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <div className="flex items-center space-x-2 text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F0A536] flex-shrink-0" />
              <span>{isKm ? "ផ្លូវដើរបានត្រួតពិនិត្យ ៦ ទីតាំង" : "6 Verified Heritage Stops"}</span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ផ្លូវថ្មើរជើងប្រវែង ១.៦ គីឡូម៉ែត្រ បានវាស់វែង និងត្រួតពិនិត្យយ៉ាងហ្មត់ចត់លើទីតាំងជាក់ស្តែង។"
                : "A verified 1.6 km continuous pedestrian trail from Durian Roundabout to Entanou Bridge."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <div className="flex items-center space-x-2 text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F0A536] flex-shrink-0" />
              <span>{isKm ? "ផែនទី Google Maps អន្តរកម្ម" : "Interactive Leaflet / Google Map"}</span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ភ្ជាប់ដោយ Google Places Cards រូបភាពផ្កាយរណបពិត និងប្រព័ន្ធតាមដាន GPS ផ្ទាល់។"
                : "Real walking routes with vector roadmap and photorealistic satellite hybrid imagery."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <div className="flex items-center space-x-2 text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F0A536] flex-shrink-0" />
              <span>{isKm ? "ផ្ទាំងប្រៀបធៀបរូបភាព Then & Now" : "Then & Now Comparison"}</span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ផ្ទាំងរំកិលរូបថតបណ្ណសារសម័យបារាំង ១៩២០ ទល់នឹងរូបថតបច្ចុប្បន្នពីចំណុចដដែល។"
                : "Archival 1920s aerials and street photos alongside present-day views."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <div className="flex items-center space-x-2 text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F0A536] flex-shrink-0" />
              <span>{isKm ? "មគ្គុទ្ទេសក៍សំឡេង និងអត្ថបទពេញ" : "Audio Guide & Bilingual Text"}</span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ការនិទានសំឡេងភ្ជាប់ជាមួយអត្ថបទអានទាំងស្រុងទាំងភាសាខ្មែរ និងអង់គ្លេស។"
                : "Audio narration with complete transcripts in both Khmer and English."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <div className="flex items-center space-x-2 text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F0A536] flex-shrink-0" />
              <span>{isKm ? "ការណែនាំអំពីការចូលទស្សនា" : "Visitor Access & Etiquette"}</span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "ព័ត៌មានជាក់ស្តែងអំពីការចូលទស្សនា ការថតរូប និងពេលវេលាសមស្របបំផុត។"
                : "Clear entry details, cafe hours, public right-of-way, and etiquette guidance."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <div className="flex items-center space-x-2 text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F0A536] flex-shrink-0" />
              <span>{isKm ? "ឥតគិតថ្លៃ ១០០% & គ្មានការតាមដាន" : "100% Free & No Sign-In"}</span>
            </div>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
              {isKm
                ? "អាចប្រើប្រាស់បានភ្លាមៗដោយមិនបាច់ចុះឈ្មោះ មិនបាច់ដំឡើង និងគ្មានពាណិជ្ជកម្ម។"
                : "Open web access with zero tracking cookies, logins, or commercial ads."}
            </p>
          </div>
        </div>
      </section>

      {/* 4. REDESIGNED CLEAN SOURCES & BIBLIOGRAPHY SECTION */}
      <section id="bibliography" className="space-y-6">
        <div className="bg-white dark:bg-[#263B4B] rounded-3xl border-2 border-[#E8D9B8] dark:border-[#455565] p-6 sm:p-8 shadow-md space-y-6 text-[#1F354D] dark:text-[#F5F0E5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8D9B8] dark:border-[#455565] pb-5">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536]">
                <FileText className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536]" />
                <span>{isKm ? "ឯកសារស្រាវជ្រាវ និងបណ្ណសារ" : "Academic & Field Documentation"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5] mt-1">
                {isKm ? "ឯកសារយោង និងប្រភពព័ត៌មាន" : "References & Archival Sources"}
              </h2>
              <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] mt-1 max-w-2xl font-normal">
                {isKm
                  ? "កាលបរិច្ឆេទប្រវត្តិសាស្ត្រ ការប្រើប្រាស់ពីអតីតកាល និងការសង្កេតស្ថាបត្យកម្ម ត្រូវបានផ្ទៀងផ្ទាត់ជាមួយការបោះពុម្ពផ្សាយ និងកំណត់ត្រាវាលដូចខាងក្រោម៖"
                  : "Every architectural date, former municipal function, and restoration record was cross-verified against verified publications and field observations:"}
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#55534B] dark:text-[#C2BBAE]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isKm ? "ស្វែងរកប្រភព..." : "Search sources..."}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] placeholder-[#55534B]/60 dark:placeholder-[#C2BBAE]/60 focus:outline-none focus:ring-2 focus:ring-[#F0A536]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5] flex items-center space-x-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{isKm ? "ចម្រោះប្រភព៖" : "Category:"}</span>
            </span>

            {[
              { id: "all", label: isKm ? "ប្រភពទាំងអស់ (៦)" : "All Sources (6)" },
              { id: "architecture", label: isKm ? "ការអភិរក្សស្ថាបត្យកម្ម" : "Architectural Preservation" },
              { id: "field", label: isKm ? "ការអង្កេតវាល & ផែនទី" : "Field Surveys & Walk Guides" },
              { id: "history", label: isKm ? "ប្រវត្តិសាស្ត្រក្រុង" : "Civic History & Heritage" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as SourceCategory)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#1F354D] text-[#F5F0E5] dark:bg-[#F0A536] dark:text-[#1F354D] shadow-xs"
                    : "bg-[#F5F0E5] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] hover:bg-[#E8D9B8]/50 border border-[#E8D9B8] dark:border-[#455565]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Clean Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {filteredBibliography.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#B77B5B] dark:text-[#F0A536] bg-white dark:bg-[#263B4B] px-2.5 py-0.5 rounded-full border border-[#E8D9B8] dark:border-[#455565]">
                      {isKm ? item.khmerCategoryLabel : item.categoryLabel}
                    </span>

                    <span className="text-[10px] font-bold text-[#55534B] dark:text-[#C2BBAE]">
                      {isKm ? item.khmerSourceType : item.sourceType}
                    </span>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm sm:text-base font-extrabold text-[#1F354D] dark:text-[#F5F0E5] group-hover:text-[#F0A536] transition-colors leading-snug"
                  >
                    <span>{isKm ? item.khmerTitle : item.title}</span>
                  </a>

                  <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed font-normal">
                    {isKm ? item.khmerDescription : item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8D9B8] dark:border-[#455565] flex items-center justify-between">
                  <div className="text-[10px] text-[#55534B] dark:text-[#C2BBAE] italic truncate max-w-[200px] sm:max-w-[240px]">
                    "{isKm ? item.khmerKeyCitation : item.keyCitation}"
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white dark:bg-[#263B4B] hover:bg-[#1F354D] hover:text-white dark:hover:bg-[#F0A536] dark:hover:text-[#1F354D] text-[#1F354D] dark:text-[#F5F0E5] text-xs font-bold border border-[#E8D9B8] dark:border-[#455565] shadow-xs transition-colors flex-shrink-0"
                    title={`Open source on ${item.domain}`}
                  >
                    <span>{item.domain}</span>
                    <ExternalLink className="w-3 h-3 text-[#F0A536]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FUTURE ROADMAP (FRENCH COLONIAL PARCHMENT BOX) */}
      <section className="rounded-3xl bg-white dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] border border-[#E8D9B8] text-[#1F354D] dark:text-[#F0A536] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "ទិសដៅអភិវឌ្ឍន៍បន្ត" : "Planned For Version 2"}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? "ទិសដៅទៅអនាគតនៃគម្រោង" : "Future Project Innovations"}
          </h3>
          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] font-normal leading-relaxed max-w-2xl">
            {isKm
              ? "បន្ទាប់ពីគំរូសាកល្បងនេះ យើងគ្រោងនឹងបន្តអភិវឌ្ឍន៍មុខងារសំខាន់ៗបន្ថែមទៀត ដើម្បីពង្រីកការអភិរក្សបេតិកភណ្ឌឌីជីថល៖"
              : "Following this initial prototype, future iterations will introduce enhanced multimedia and community storytelling:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <Radio className="w-5 h-5 text-[#F0A536]" />
            <h4 className="text-sm font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "សំឡេងមគ្គុទ្ទេសក៍ស្ទូឌីយោ" : "Studio Khmer Audio Narration"}
            </h4>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-normal leading-relaxed">
              {isKm
                ? "ការថតសំឡេងមគ្គុទ្ទេសក៍ជាភាសាខ្មែរផ្ទាល់ដោយអ្នកស្រាវជ្រាវក្នុងស្រុកកំពត។"
                : "Professional studio voice recordings featuring native Kampot storytellers and historians."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <Users className="w-5 h-5 text-[#F0A536]" />
            <h4 className="text-sm font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "វេទិការូបថតសហគមន៍" : "Community Archival Portal"}
            </h4>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-normal leading-relaxed">
              {isKm
                ? "អនុញ្ញាតឱ្យប្រជាពលរដ្ឋចែករំលែករូបថតគ្រួសារចាស់ៗនៃអគារបុរាណក្នុងក្រុងកំពត។"
                : "Crowdsourced submission portal for local families to contribute vintage photos of old Kampot."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2">
            <Compass className="w-5 h-5 text-[#F0A536]" />
            <h4 className="text-sm font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              {isKm ? "ដំណើរការពេលគ្មានអ៊ីនធឺណិត (Offline PWA)" : "Full Offline PWA Support"}
            </h4>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE] font-normal leading-relaxed">
              {isKm
                ? "ប្រព័ន្ធ PWA ដែលអាចទាញយកទុកប្រើប្រាស់ពេលគ្មានអ៊ីនធឺណិត ឬសេវាទូរសព្ទខ្សោយ។"
                : "Installable web app with local tile caching for seamless offline walking without cellular data."}
            </p>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <div className="pt-4 pb-8 text-center space-y-4">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/stops/durian-roundabout"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-[#F0A536] hover:bg-[#e09425] text-[#1F354D] font-extrabold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
          >
            <Compass className="w-4 h-4 text-[#1F354D]" />
            <span>{isKm ? "ចាប់ផ្តើមដើរនៅទីតាំងទី ១" : "Begin Walking Tour at Stop 1"}</span>
            <ArrowRight className="w-4 h-4 text-[#1F354D]" />
          </Link>

          <Link
            href="/map"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white dark:bg-[#263B4B] hover:bg-[#F5F0E5] text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-xs tracking-wider uppercase border border-[#E8D9B8] dark:border-[#455565] shadow transition-all"
          >
            <MapPin className="w-4 h-4 text-[#F0A536]" />
            <span>{isKm ? "មើលផែនទីអន្តរកម្ម" : "View Interactive Map"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
