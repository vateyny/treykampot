"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "km";

interface Translations {
  [key: string]: {
    en: string;
    km: string;
  };
}

export const UI_TRANSLATIONS: Translations = {
  // Navigation
  siteTitle: {
    en: "Trey Kampot",
    km: "ត្រីកំពត",
  },
  siteSubtitle: {
    en: "French Colonial-Era Self-Guided Heritage Walk",
    km: "ដំណើរបេតិកភណ្ឌស្ថាបត្យកម្មសម័យអាណានិគមបារាំង",
  },
  navHome: {
    en: "Home",
    km: "ទំព័រដើម",
  },
  navMap: {
    en: "Walking Map",
    km: "ផែនទីថ្មើរជើង",
  },
  navStops: {
    en: "6 Curated Stops",
    km: "ទីតាំងទាំង ៦",
  },
  navAbout: {
    en: "About & Sources",
    km: "អំពីគម្រោង និងឯកសារយោង",
  },
  navStartWalk: {
    en: "Start Walk",
    km: "ចាប់ផ្តើមដើរ",
  },
  selectStop: {
    en: "Select a Landmark Stop",
    km: "ជ្រើសរើសទីតាំងប្រវត្តិសាស្ត្រ",
  },
  beginSelfGuided: {
    en: "Begin Self-Guided Walk",
    km: "ចាប់ផ្តើមដំណើរកម្សាន្តដោយខ្លួនឯង",
  },

  // Hero & Metrics
  heroBadge: {
    en: "Kampot, Cambodia • Free Self-Guided Walking Tour",
    km: "ក្រុងកំពត ប្រទេសកម្ពុជា • ដំណើរបេតិកភណ្ឌថ្មើរជើងឥតគិតថ្លៃ",
  },
  heroTitle1: {
    en: "Kampot",
    km: "កំពត",
  },
  heroTitle2: {
    en: "Through Time",
    km: "ឆ្លងកាត់ពេលវេលា",
  },
  heroDesc: {
    en: "Discover the architectural layers of southern Cambodia’s historic riverside gem. Trace French colonial administration, vibrant Sino-Khmer commercial shophouses, and inventive adaptive reuse from the iconic Durian Roundabout to the sunset panorama of Entanou Bridge.",
    km: "ស្វែងយល់ពីស្រទាប់ស្ថាបត្យកម្មនៃទីក្រុងមាត់ព្រែកប្រវត្តិសាស្ត្រភាគខាងត្បូងកម្ពុជា។ ស្វែងយល់ពីប្រព័ន្ធរដ្ឋបាលសម័យអាណានិគមបារាំង ផ្ទះល្វែងពាណិជ្ជកម្មចិន-ខ្មែរ និងការកែច្នៃសំណង់បុរាណ ចាប់ពីរង្វង់មូលធុរេន រហូតដល់ទស្សនីយភាពថ្ងៃលិចនៃស្ពានឥន្ទធនូ។",
  },
  metricDistance: {
    en: "Distance",
    km: "ចម្ងាយសរុប",
  },
  metricPace: {
    en: "Pace",
    km: "រយៈពេលដើរ",
  },
  metricLandmarks: {
    en: "Landmarks",
    km: "ទីតាំងប្រវត្តិសាស្ត្រ",
  },
  metricPedestrian: {
    en: "Pedestrian route",
    km: "ផ្លូវថ្មើរជើងងាយស្រួល",
  },
  metricSelfGuided: {
    en: "Self-guided walk",
    km: "ដំណើរដោយខ្លួនឯង",
  },
  metricResearched: {
    en: "Researched stories",
    km: "រឿងរ៉ាវស្រាវជ្រាវច្បាស់លាស់",
  },
  freeOpenAccess: {
    en: "100% Free & Open Access",
    km: "ឥតគិតថ្លៃ ១០០% និងបើកចំហ",
  },
  noAppRequired: {
    en: "No app download or registration required",
    km: "មិនចាំបាច់ដោនឡូតកម្មវិធី ឬចុះឈ្មោះនោះទេ",
  },
  startWalkBtn: {
    en: "Start the Walk (Stop 1)",
    km: "ចាប់ផ្តើមដើរ (ទីតាំងទី ១)",
  },
  interactiveMapBtn: {
    en: "Interactive Route Map",
    km: "ផែនទីផ្លូវអន្តរកម្ម",
  },

  // Experience Pillars
  pillarsHeading: {
    en: "How The Heritage Walk Works",
    km: "របៀបដែលដំណើរបេតិកភណ្ឌដំណើរការ",
  },
  pillarsSubheading: {
    en: "Everything you need for an immersive self-guided stroll through Kampot’s historic quarter on your phone or tablet.",
    km: "អ្វីៗគ្រប់យ៉ាងដែលអ្នកត្រូវការសម្រាប់ការដើរទស្សនាតំបន់ប្រវត្តិសាស្ត្រកំពតដោយខ្លួនឯងនៅលើទូរសព្ទ ឬថេប្លេត។",
  },
  audioPillarTitle: {
    en: "Audio Guides & Transcripts",
    km: "មគ្គុទ្ទេសក៍សំឡេង និងអត្ថបទ",
  },
  audioPillarDesc: {
    en: "Listen to concise 1- to 2-minute spoken narratives at each stop while walking, or expand the written transcript to read along under the shade of colonial verandas.",
    km: "ស្តាប់ការរៀបរាប់សំឡេងខ្លីៗពី ១ ទៅ ២ នាទីនៅទីតាំងនីមួយៗពេលកំពុងដើរ ឬបើកអានអត្ថបទពេញលេញក្រោមម្លប់របៀងបុរាណ។",
  },
  sliderPillarTitle: {
    en: "Past vs. Present Sliders",
    km: "ប្រៀបធៀប អតីតកាល និងបច្ចុប្បន្នកាល",
  },
  sliderPillarDesc: {
    en: "Slide seamlessly between archival photographs, colonial postcards, and contemporary high-resolution photos to see firsthand how buildings evolved over a century.",
    km: "ទាញផ្ទាំងរូបភាពដើម្បីប្រៀបធៀបរូបថតបណ្ណសារសម័យបុរាណ និងរូបថតបច្ចុប្បន្ន ដើម្បីឃើញពីការវិវត្តនៃសំណង់អគារក្នុងរយៈពេលមួយសតវត្សរ៍។",
  },
  mapPillarTitle: {
    en: "Interactive Route Map",
    km: "ផែនទីផ្លូវអន្តរកម្ម",
  },
  mapPillarDesc: {
    en: "Numbered markers connect the 7 stops along a tested pedestrian path. Use the one-touch geolocation button to see your live position relative to the tour stops.",
    km: "លេខសម្គាល់តភ្ជាប់ទីតាំងទាំង ៧ តាមបណ្តោយផ្លូវថ្មើរជើងដែលបានត្រួតពិនិត្យ។ ប្រើប៊ូតុងកំណត់ទីតាំង GPS ដើម្បីមើលទីតាំងផ្ទាល់របស់អ្នក។",
  },

  // Stops section
  itineraryHeading: {
    en: "The 7 Tour Locations",
    km: "ទីតាំងទាំង ៧ នៃដំណើរកម្សាន្ត",
  },
  itinerarySubheading: {
    en: "Tested on foot for effortless walking between points of interest.",
    km: "បានពិនិត្យជាក់ស្តែងលើផ្លូវថ្មើរជើង ដើម្បីភាពងាយស្រួលក្នុងការធ្វើដំណើរ។",
  },
  viewAllOnMap: {
    en: "View All on Interactive Map",
    km: "មើលទាំងអស់នៅលើផែនទីអន្តរកម្ម",
  },
  readAndListen: {
    en: "Read & Listen",
    km: "អាន និងស្តាប់",
  },

  // Practical Checklist
  checklistHeading: {
    en: "Practical Tips For Your Walk",
    km: "ការណែនាំជាក់ស្តែងសម្រាប់ការដើរ",
  },
  checklistSubheading: {
    en: "Kampot’s historic center is flat and pedestrian-friendly. Follow these simple tips to get the most out of your self-guided walk.",
    km: "កណ្តាលក្រុងប្រវត្តិសាស្ត្រកំពតមានសណ្ឋានដីរាបស្មើ និងងាយស្រួលដើរ។ សូមអនុវត្តតាមការណែនាំទាំងនេះដើម្បីទទួលបានបទពិសោធន៍ល្អបំផុត។",
  },

  // Place Details Page
  backToMap: {
    en: "Back to Walking Map",
    km: "ត្រឡប់ទៅផែនទីថ្មើរជើង",
  },
  stopNumber: {
    en: "Stop",
    km: "ទីតាំងទី",
  },
  ofStops: {
    en: "of 7",
    km: "នៃ ៧",
  },
  walkingDistLabel: {
    en: "Walking Distance",
    km: "ចម្ងាយដើរ",
  },
  walkingTimeLabel: {
    en: "Walking Time",
    km: "រយៈពេលដើរ",
  },
  visitTimeLabel: {
    en: "Time to Explore",
    km: "ពេលវេលាទស្សនា",
  },
  accessStatusLabel: {
    en: "Access Status",
    km: "ស្ថានភាពចូលទស្សនា",
  },
  storySectionTitle: {
    en: "Historical Story & Context",
    km: "ប្រវត្តិសាស្ត្រ និងរឿងរ៉ាវពាក់ព័ន្ធ",
  },
  architecturalSectionTitle: {
    en: "Features To Notice While Standing Here",
    km: "លក្ខណៈស្ថាបត្យកម្មគួរកត់សម្គាល់នៅទីនេះ",
  },
  visitorSectionTitle: {
    en: "Visitor & Access Information",
    km: "ព័ត៌មានទស្សនា និងការអនុញ្ញាត",
  },
  accessPermissionsLabel: {
    en: "Building Access & Permissions",
    km: "ការអនុញ្ញាតចូលទស្សនាអគារ",
  },
  photoTipsLabel: {
    en: "Photography Recommendations",
    km: "ការណែនាំអំពីការថតរូប",
  },
  sourcesSectionTitle: {
    en: "Sources For This Location",
    km: "ឯកសារយោងសម្រាប់ទីតាំងនេះ",
  },
  prevStopLabel: {
    en: "Previous Stop",
    km: "ទីតាំងមុន",
  },
  nextStopLabel: {
    en: "Next Stop",
    km: "ទីតាំងបន្ទាប់",
  },

  // Audio Player
  audioGuideLabel: {
    en: "Audio Guide",
    km: "មគ្គុទ្ទេសក៍សំឡេង",
  },
  playAudioStory: {
    en: "Play Audio Story",
    km: "ចាក់សំឡេងរៀបរាប់",
  },
  pauseLabel: {
    en: "Pause",
    km: "ផ្អាក",
  },
  resumeLabel: {
    en: "Resume",
    km: "បន្តស្តាប់",
  },
  writtenTranscript: {
    en: "Written Transcript",
    km: "អត្ថបទរៀបរាប់ពេញលេញ",
  },
  transcriptTitle: {
    en: "Complete Narrator Transcript",
    km: "អត្ថបទសំឡេងរៀបរាប់ទាំងស្រុង",
  },
  speedLabel: {
    en: "Speed",
    km: "ល្បឿន",
  },

  // Before/After Slider
  sliderTitle: {
    en: "Then & Now: Visual Heritage Comparison",
    km: "អតីតកាល និងបច្ចុប្បន្ន៖ ការប្រៀបធៀបរូបភាពបេតិកភណ្ឌ",
  },
  sliderInstruction: {
    en: "Drag slider horizontally to compare eras",
    km: "ទាញផ្ទាំងបញ្ឈរទៅឆ្វេងស្តាំដើម្បីប្រៀបធៀបសម័យកាល",
  },
  presentDayBadge: {
    en: "Present Day",
    km: "បច្ចុប្បន្ន",
  },
  archivalContextBadge: {
    en: "Historical Context",
    km: "បរិបទប្រវត្តិសាស្ត្រ",
  },
  presentContextBadge: {
    en: "Present Day Context",
    km: "បរិបទបច្ចុប្បន្ន",
  },
  evolutionNoteLabel: {
    en: "Architectural evolution:",
    km: "ការវិវត្តនៃស្ថាបត្យកម្ម៖",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Read from localStorage if available
    const saved = localStorage.getItem("kampot_heritage_lang") as Language | null;
    if (saved === "en" || saved === "km") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.body.setAttribute("data-lang", saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("kampot_heritage_lang", lang);
    document.documentElement.lang = lang;
    document.body.setAttribute("data-lang", lang);
  };

  const t = (key: string): string => {
    if (UI_TRANSLATIONS[key]) {
      return UI_TRANSLATIONS[key][language] || UI_TRANSLATIONS[key]["en"];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
