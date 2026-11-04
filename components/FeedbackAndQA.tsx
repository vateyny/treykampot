"use client";

import React, { useState, useEffect } from "react";
import {
  HelpCircle,
  MessageSquare,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  Sparkles,
  CheckCircle2,
  ThumbsUp,
  User,
  Quote
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeedbackItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  tag: string;
  comment: string;
  khmerComment?: string;
}

export default function FeedbackAndQA() {
  const { language } = useLanguage();
  const isKm = language === "km";

  // Accordion State
  const [openQAIndex, setOpenQAIndex] = useState<number | null>(0);

  // Feedback Form State
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedTag, setSelectedTag] = useState<string>("Stunning Sunset Walk");
  const [visitorName, setVisitorName] = useState<string>("");
  const [visitorComment, setVisitorComment] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // List of Feedback items (stored with default testimonials)
  const initialFeedback: FeedbackItem[] = [
    {
      id: "fb-1",
      name: "Sophea Meng",
      rating: 5,
      date: "Nov 2026",
      tag: isKm ? "🌅 ទេសភាពថ្ងៃលិចដ៏អស្ចារ្យ" : "🌅 Stunning Sunset",
      comment:
        "Walking across the Entanou Bridge at dusk while listening to Sinn Sisamouth's Kampot anthem was an unforgettable experience. The before/after slider made history come alive!",
      khmerComment:
        "ការដើរឆ្លងកាត់ស្ពានឥន្ទធនូនាពេលថ្ងៃលិច ខណៈពេលស្តាប់សំនៀងអមតៈរបស់លោក ស៊ីន ស៊ីសាមុត គឺជាបទពិសោធន៍ដែលមិនអាចបំភ្លេចបាន។ រូបភាពប្រៀបធៀបមុន-ក្រោយជួយឱ្យយើងយល់ច្បាស់ពីប្រវត្តិសាស្ត្រ!",
    },
    {
      id: "fb-2",
      name: "Julien & Claire",
      rating: 5,
      date: "Oct 2026",
      tag: isKm ? "🏛️ ស្ថាបត្យកម្មបារាំងបុរាណ" : "🏛️ French Colonial Heritage",
      comment:
        "Superbe promenade! Learning about the 1930s Chinese opera cinema transformation into a hotel was fascinating. Trey Kampot pufferfish is an adorable guide!",
      khmerComment:
        "ដំណើរកម្សាន្តដ៏អស្ចារ្យ! ការស្វែងយល់ពីរោងមហោស្រពទសវត្សរ៍ឆ្នាំ ១៩៣០ ដែលកែច្នៃជាសណ្ឋាគារគឺគួរឱ្យចាប់អារម្មណ៍ខ្លាំងណាស់។ ត្រីកំពត គួរឱ្យស្រឡាញ់ណាស់!",
    },
    {
      id: "fb-3",
      name: "Dara Kong",
      rating: 5,
      date: "Oct 2026",
      tag: isKm ? "☕ កាហ្វេឆ្ងាញ់ & ផ្លូវស្រួលដើរ" : "☕ Great Coffee & Shaded Walk",
      comment:
        "The coffee break at Cai-coffee along Street 700 was peaceful and shaded. The walking trail is short, easy, and completely free. Highly recommended to all travelers in Kampot.",
      khmerComment:
        "ការសម្រាកកាហ្វេនៅ Cai-coffee តាមផ្លូវ ៧០០ មានភាពស្ងប់ស្ងាត់និងត្រជាក់ម្លប់។ ផ្លូវដើរមានចម្ងាយខ្លី ងាយស្រួលដើរ និងមិនគិតថ្លៃ។ សូមណែនាំដល់ភ្ញៀវទេសចរទាំងអស់!",
    },
  ];

  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>(initialFeedback);

  // Load saved feedback from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("kampot_community_feedback");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setFeedbackList([...parsed, ...initialFeedback]);
          }
        }
      } catch (e) {}
    }
  }, []);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorComment.trim()) return;

    const newFeedback: FeedbackItem = {
      id: `fb-${Date.now()}`,
      name: visitorName.trim() || (isKm ? "អ្នកដំណើរមិនបញ្ចេញឈ្មោះ" : "Traveler from Kampot"),
      rating,
      date: "Just now",
      tag: selectedTag,
      comment: visitorComment.trim(),
    };

    const updated = [newFeedback, ...feedbackList];
    setFeedbackList(updated);

    if (typeof window !== "undefined") {
      try {
        const userSaved = updated.filter((item) => item.date === "Just now");
        localStorage.setItem("kampot_community_feedback", JSON.stringify(userSaved));
      } catch (err) {}
    }

    setIsSubmitted(true);
    setVisitorComment("");
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Questions and Answers Data
  const qaData = [
    {
      q: isKm
        ? "តើផ្លូវថ្មើរជើងនេះមានចម្ងាយប៉ុន្មាន និងប្រើរយៈពេលប៉ុន្មាន?"
        : "How long is the heritage walking route and how much time does it take?",
      a: isKm
        ? "ផ្លូវថ្មើរជើងបេតិកភណ្ឌនេះមានចម្ងាយសរុប ១.៦ គីឡូម៉ែត្រ (ប្រហែល ៤៥ ទៅ ៦០ នាទី ក្នុងល្បឿនដើរធម្មតា)។ ផ្លូវទាំងអស់មានសភាពរាបស្មើ មានម្លប់ដើមឈើបុរាណ និងមានចិញ្ចើមផ្លូវងាយស្រួលដើរ ព្រមទាំងអាចរុញរទេះកូនក្មេង ឬជិះកង់បានយ៉ាងងាយស្រួល។"
        : "The curated heritage trail covers 1.6 km (approximately 45–60 minutes at a relaxed strolling pace). The route is completely flat, tree-shaded along the French boulevards, and suitable for all fitness levels, strollers, and bicycles.",
    },
    {
      q: isKm
        ? "តើមានការគិតថ្លៃសំបុត្រសម្រាប់ទីតាំងបេតិកភណ្ឌទាំង ៦ ឬទេ?"
        : "Is there an admission fee for any of the 6 heritage stops?",
      a: isKm
        ? "មិនមានការគិតថ្លៃសំបុត្រអ្វីទាំងអស់ (១០០% ឥតគិតថ្លៃ)! ទីតាំងទាំងអស់ជាសំណង់សាធារណៈ សួនច្បារមាត់ព្រែក ហាងកាហ្វេ និងស្ពានថ្មើរជើងដែលបើកចំហជាសាធារណៈ ២៤ ម៉ោងក្នុងមួយថ្ងៃ។"
        : "No, 100% free! All 6 stops are public civic monuments, active commercial shophouses (like Cai-coffee & Starbucks Fish Market), and public riverfront bridges open 24/7.",
    },
    {
      q: isKm
        ? "តើពេលវេលាណាដែលល្អបំផុតក្នុងថ្ងៃដើម្បីចាប់ផ្តើមដើរ?"
        : "What is the best time of day to take the walk?",
      a: isKm
        ? "ពេលវេលាដ៏ល្អបំផុតគឺចាប់ពីម៉ោង ៤:១៥ រសៀល ដល់ ៦:០០ ល្ងាច។ អ្នកនឹងទទួលបានពន្លឺថ្ងៃលិចពណ៌មាសដ៏ស្រទន់លើអគារបុរាណពណ៌លឿង ហើយមកដល់ស្ពានឥន្ទធនូទាន់ពេលដើម្បីគយគន់ថ្ងៃលិចដ៏ល្បីល្បាញលើជួរភ្នំបូកគោ។"
        : "The golden hour between 4:15 PM and 6:00 PM is prime time. The afternoon heat dissipates, warm golden light reflects off the French yellow facades, and you arrive at Entanou Bridge just in time for sunset over Bokor Mountain.",
    },
    {
      q: isKm
        ? "តើអាចជិះកង់ ឬម៉ូតូជំនួសការដើរបានទេ?"
        : "Can I explore the trail by bicycle or scooter instead of walking?",
      a: isKm
        ? "បានយ៉ាងពិតប្រាកដ! វិថីមាត់ព្រែក និងស្ពានឥន្ទធនូអនុញ្ញាតឱ្យថ្មើរជើង កង់ និងម៉ូតូស្រាលឆ្លងកាត់បានដោយសេរី។ អ្នកអាចជួលកង់ពីសណ្ឋាគារក្នុងក្រុងកំពតបានយ៉ាងងាយ។"
        : "Absolutely! The broad colonial avenues and the Entanou Bridge specifically accommodate pedestrians, bicycles, and light motorbikes. Bicycle rentals are readily available across Kampot.",
    },
    {
      q: isKm
        ? "តើខ្ញុំអាចស្តាប់តន្ត្រីសម័យមាសពេលកំពុងដើរដោយរបៀបណា?"
        : "How do I listen to the vintage Cambodian music while on the trail?",
      a: isKm
        ? "គ្រាន់តែចុចលើផ្នែក 'Sounds of Kampot' ក្នុងគេហទំព័រនេះនៅលើទូរស័ព្ទដៃរបស់អ្នក! អ្នកអាចស្តាប់បទចម្រៀងសម័យមាសខ្មែរ ៨ បទពិតប្រាកដរបស់លោក ស៊ីន ស៊ីសាមុត និងអ្នកស្រី រស់ សេរីសុទ្ធា ដែលបានរៀបចំទុកសម្រាប់ទីតាំងនីមួយៗ។"
        : "Simply open the 'Sounds of Kampot' audio playlist on your smartphone browser! The real vintage recordings by Sinn Sisamouth and Ros Serey Sothea stream seamlessly in the background as you walk.",
    },
    {
      q: isKm
        ? "តើរូបថតបណ្ណសារ និងឯកសារប្រវត្តិសាស្ត្រទទួលបានពីប្រភពណា?"
        : "Where do the archival blueprints and historical photos come from?",
      a: isKm
        ? "ទិន្នន័យប្រវត្តិសាស្ត្រ និងរូបថតបណ្ណសារត្រូវបានផ្ទៀងផ្ទាត់ចេញពី បណ្ណសារជាតិក្រៅប្រទេសបារាំង (Archives Nationales d'Outre-Mer - ANOM), ក្រសួងសាធារណការ និងដឹកជញ្ជូន និងបណ្ណសារបេតិកភណ្ឌខេត្តកំពត។"
        : "All archival blueprints, construction dates, and vintage photographs are cross-referenced with the French National Overseas Archives (ANOM Cadastre Indochine) and the Kampot Provincial Heritage Register.",
    },
  ];

  const experienceTags = [
    isKm ? "🌅 ថ្ងៃលិចស្ពានឥន្ទធនូ" : "🌅 Entanou Sunset",
    isKm ? "🏛️ ស្ថាបត្យកម្មអាណានិគម" : "🏛️ Colonial Architecture",
    isKm ? "🎵 សំនៀងសម័យមាស" : "🎵 1960s Golden Music",
    isKm ? "☕ សម្រាកកាហ្វេផ្លូវ ៧០០" : "☕ Cai-coffee Break",
    isKm ? "📸 ប្លង់ថតរូបស្អាត" : "📸 Photo Opportunities",
    isKm ? "🚶 ផ្លូវដើរស្រួល ១.៦ គ.ម" : "🚶 Easy 1.6km Stroll",
  ];

  return (
    <section id="feedback-qa" className="space-y-8 pt-6 border-t border-[#E8D9B8] dark:border-[#455565]">
      
      {/* Section Header with Trey Kampot Mascot Avatar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F0A536] text-xs font-bold uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>{isKm ? "សំណួរ & ការបញ្ចេញមតិយោបល់" : "VISITOR Q&A & COMMUNITY FEEDBACK"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            {isKm ? "សំណួរញឹកញាប់ និងមតិយោបល់ពីអ្នកដំណើរ" : "Frequently Asked Questions & Visitor Feedback"}
          </h2>
          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE] font-normal max-w-2xl">
            {isKm
              ? "ស្វែងយល់បន្ថែមអំពីការធ្វើដំណើរ និងចែករំលែកបទពិសោធន៍ផ្ទាល់ខ្លួនរបស់អ្នកជាមួយ ត្រីកំពត អ្នករុករក (@treykampotexplorer)!"
              : "Helpful insights for your walking trail and real reviews from travelers exploring Kampot's French colonial past with Trey Kampot Explorer (@treykampotexplorer)."}
          </p>
        </div>

        {/* Trey Kampot Explorer Friendly Greeting Pill */}
        <div className="flex items-center space-x-3 p-2.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs self-start sm:self-auto shrink-0">
          <div className="w-12 h-12 relative flex items-center justify-center">
            <img
              src="/images/mascot/pufferfish/pure-bliss.png"
              alt="Trey Kampot Explorer Guide"
              className="max-h-full max-w-full object-contain filter drop-shadow hover:scale-110 transition-transform"
            />
          </div>
          <div className="pr-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F0A536] block">
              {isKm ? "ត្រីកំពត អ្នករុករក រង់ចាំឆ្លើយសំណួរ" : "Trey Kampot Explorer is here to help"}
            </span>
            <span className="text-xs font-bold text-[#1F354D] dark:text-[#F5F0E5]">
              @treykampotexplorer
            </span>
          </div>
        </div>
      </div>

      {/* 2-Column Responsive Layout: Q&A on Left, Feedback on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: INTERACTIVE ACCORDION Q&A (7 Columns)        */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <h3 className="text-base font-extrabold text-[#1F354D] dark:text-[#F5F0E5] flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#F0A536]" />
              <span>{isKm ? "សំណួរដែលសួរញឹកញាប់ (Q&A)" : "Curated Walking Tour Q&A"}</span>
            </h3>
            <span className="text-xs text-[#55534B] dark:text-[#C2BBAE]">
              {qaData.length} {isKm ? "សំណួរ" : "answers"}
            </span>
          </div>

          <div className="space-y-2.5">
            {qaData.map((item, index) => {
              const isOpen = openQAIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#FFFFFF] dark:bg-[#263B4B] border-[#F0A536] shadow-md"
                      : "bg-[#FFFFFF] dark:bg-[#182A39] border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536]/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenQAIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <span className="font-extrabold text-xs sm:text-sm text-[#1F354D] dark:text-[#F5F0E5] leading-snug">
                      {item.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#F5F0E5] dark:bg-[#182A39] flex items-center justify-center shrink-0 text-[#1F354D] dark:text-[#F0A536] mt-0.5">
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#55534B] dark:text-[#C2BBAE] leading-relaxed border-t border-[#E8D9B8]/40 dark:border-[#455565] animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: VISITOR FEEDBACK & STAR RATING (5 Columns)  */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Feedback Form Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#E8D9B8] dark:border-[#455565]">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-[#F0A536]" />
                <h3 className="text-sm sm:text-base font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                  {isKm ? "ចែករំលែកមតិយោបល់របស់អ្នក" : "Leave Your Feedback"}
                </h3>
              </div>
              <span className="text-[10px] font-bold text-[#F0A536] uppercase tracking-wider">
                {isKm ? "ស្ទង់មតិ" : "Community"}
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-center space-y-2 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 mx-auto">
                  <img
                    src="/images/mascot/pufferfish/celebratory.png"
                    alt="Celebratory Trey Kampot"
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-emerald-800 dark:text-emerald-300">
                  {isKm ? "សូមអរគុណសម្រាប់មតិយោបល់របស់អ្នក! 🎉" : "Thank you for your feedback! 🎉"}
                </h4>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                  {isKm
                    ? "ត្រីកំពត អ្នករុករក (@treykampotexplorer) សូមអរគុណចំពោះការចូលរួមថែរក្សាបេតិកភណ្ឌក្រុងកំពត។"
                    : "Trey Kampot Explorer (@treykampotexplorer) celebrates your contribution to preserving Kampot's heritage!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-3.5 text-xs">
                {/* 1. Interactive Star Rating */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] mb-1">
                    {isKm ? "ការវាយតម្លៃរបស់អ្នក (ផ្កាយ)៖" : "Your Experience Rating:"}
                  </label>
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 rounded-lg hover:bg-[#F5F0E5] dark:hover:bg-[#182A39] transition-transform hover:scale-120 cursor-pointer"
                        title={`${star} stars`}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            (hoverRating || rating) >= star
                              ? "fill-[#F0A536] text-[#F0A536]"
                              : "text-[#BBA77E] dark:text-[#455565]"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-extrabold text-[#F0A536] ml-2">
                      {rating} / 5
                    </span>
                  </div>
                </div>

                {/* 2. Highlight Tags Selector */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] mb-1.5">
                    {isKm ? "អ្វីដែលអ្នកពេញចិត្តបំផុត៖" : "What did you enjoy most?"}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {experienceTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(tag)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                          selectedTag === tag
                            ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
                            : "bg-[#F5F0E5] dark:bg-[#182A39] text-[#55534B] dark:text-[#C2BBAE] border border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536]"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Visitor Name Input */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] mb-1">
                    {isKm ? "ឈ្មោះរបស់អ្នក (ស្រេចចិត្ត)៖" : "Your Name (Optional):"}
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder={isKm ? "ឧ. សុខា ភ្នំពេញ" : "e.g., Alex, Traveler from Canada"}
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                  />
                </div>

                {/* 4. Feedback Message Textarea */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] mb-1">
                    {isKm ? "មតិយោបល់ ឬចំណាប់អារម្មណ៍៖" : "Your Message / Review:"}
                  </label>
                  <textarea
                    rows={3}
                    value={visitorComment}
                    onChange={(e) => setVisitorComment(e.target.value)}
                    placeholder={
                      isKm
                        ? "ចែករំលែកអារម្មណ៍របស់អ្នកអំពីដំណើរបេតិកភណ្ឌ ឬសំណូមពរ..."
                        : "Tell us what you discovered or suggest improvements..."
                    }
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-102 flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isKm ? "ផ្ញើមតិយោបល់ជូន ត្រីកំពត" : "Send Feedback to Trey Kampot"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Recent Community Testimonials Feed */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B77B5B] dark:text-[#F0A536] block px-1">
              {isKm ? "មតិយោបល់ថ្មីៗពីអ្នកដំណើរ៖" : "Recent Traveler Testimonials:"}
            </span>
            <div className="space-y-2">
              {feedbackList.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-1.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5 font-bold text-[#1F354D] dark:text-[#F5F0E5]">
                      <User className="w-3 h-3 text-[#F0A536]" />
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-0.5 text-[#F0A536]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F5F0E5] dark:bg-[#263B4B] text-[#B77B5B] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565]">
                    {item.tag}
                  </span>

                  <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] leading-relaxed italic">
                    "{isKm && item.khmerComment ? item.khmerComment : item.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
