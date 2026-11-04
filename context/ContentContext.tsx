"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { HeritageStop, HERITAGE_STOPS } from "@/data/stops";
import { GOLDEN_AGE_SONGS, GoldenAgeSong } from "@/data/music";

export interface SiteConfig {
  siteTitle: string;
  khmerSiteTitle: string;
  mascotName: string;
  khmerMascotName: string;
  handle: string;
  heroSubtitle: string;
  khmerHeroSubtitle: string;
  announcement: string;
  khmerAnnouncement: string;
}

export interface QAItem {
  id: string;
  q: string;
  a: string;
}

const DEFAULT_SITE_CONFIG: SiteConfig = {
  siteTitle: "Trey Kampot",
  khmerSiteTitle: "ត្រីកំពត",
  mascotName: "Trey Kampot Explorer",
  khmerMascotName: "ត្រីកំពត អ្នករុករក",
  handle: "@treykampotexplorer",
  heroSubtitle: "French Colonial-Era Self-Guided Heritage Walk",
  khmerHeroSubtitle: "ដំណើរបេតិកភណ្ឌស្ថាបត្យកម្មសម័យអាណានិគមបារាំង",
  announcement: "Welcome to Kampot! Walk along the tree-lined boulevards and discover 100-year-old Sino-French shophouses.",
  khmerAnnouncement: "សូមស្វាគមន៍មកកាន់កំពត! ដើរកម្សាន្តតាមមហាវិថី និងស្វែងយល់ពីផ្ទះល្វែងបុរាណអាយុជាង ១០០ ឆ្នាំ។",
};

const DEFAULT_QAS: QAItem[] = [
  {
    id: "qa-1",
    q: "How long is the heritage walking route and how much time does it take?",
    a: "The curated heritage trail covers 1.6 km (approximately 45–60 minutes at a relaxed strolling pace). The route is completely flat, tree-shaded along the French boulevards, and suitable for all fitness levels, strollers, and bicycles.",
  },
  {
    id: "qa-2",
    q: "Is there an admission fee for any of the 6 heritage stops?",
    a: "No, 100% free! All 6 stops are public civic monuments, active commercial shophouses (like Cai-coffee & Starbucks Fish Market), and public riverfront bridges open 24/7.",
  },
  {
    id: "qa-3",
    q: "What is the best time of day to take the walk?",
    a: "The golden hour between 4:15 PM and 6:00 PM is prime time. The afternoon heat dissipates, warm golden light reflects off the French yellow facades, and you arrive at Entanou Bridge just in time for sunset over Bokor Mountain.",
  },
  {
    id: "qa-4",
    q: "Can I explore the trail by bicycle or scooter instead of walking?",
    a: "Absolutely! The broad colonial avenues and the Entanou Bridge specifically accommodate pedestrians, bicycles, and light motorbikes. Bicycle rentals are readily available across Kampot.",
  },
  {
    id: "qa-5",
    q: "How do I listen to the vintage Cambodian music while on the trail?",
    a: "Simply open the 'Sounds of Kampot' audio playlist on your smartphone browser! The real vintage recordings by Sinn Sisamouth and Ros Serey Sothea stream seamlessly in the background as you walk.",
  },
  {
    id: "qa-6",
    q: "Where do the archival blueprints and historical photos come from?",
    a: "All archival blueprints, construction dates, and vintage photographs are cross-referenced with the French National Overseas Archives (ANOM Cadastre Indochine) and the Kampot Provincial Heritage Register.",
  },
];

interface ContentContextType {
  siteConfig: SiteConfig;
  stops: HeritageStop[];
  songs: GoldenAgeSong[];
  qas: QAItem[];
  hasEdits: boolean;
  updateSiteConfig: (partial: Partial<SiteConfig>) => void;
  updateStop: (id: string, partial: Partial<HeritageStop>) => void;
  updateSong: (id: string, partial: Partial<GoldenAgeSong>) => void;
  updateQA: (id: string, partial: Partial<QAItem>) => void;
  addQA: (newItem: Omit<QAItem, "id">) => void;
  deleteQA: (id: string) => void;
  resetAll: () => void;
  exportJSON: () => string;
  importJSON: (jsonStr: string) => boolean;
}

const STORAGE_KEY = "treykampot_live_cms_data";

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [stops, setStops] = useState<HeritageStop[]>(HERITAGE_STOPS);
  const [songs, setSongs] = useState<GoldenAgeSong[]>(GOLDEN_AGE_SONGS);
  const [qas, setQas] = useState<QAItem[]>(DEFAULT_QAS);
  const [hasEdits, setHasEdits] = useState<boolean>(false);

  // Load saved content from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.siteConfig) setSiteConfig({ ...DEFAULT_SITE_CONFIG, ...data.siteConfig });
        if (Array.isArray(data.stops)) {
          // Merge with defaults to ensure full object structure
          const mergedStops = HERITAGE_STOPS.map((defStop) => {
            const userStop = data.stops.find((s: HeritageStop) => s.id === defStop.id);
            return userStop ? { ...defStop, ...userStop } : defStop;
          });
          setStops(mergedStops);
        }
        if (Array.isArray(data.songs)) {
          const mergedSongs = GOLDEN_AGE_SONGS.map((defSong) => {
            const userSong = data.songs.find((s: GoldenAgeSong) => s.id === defSong.id);
            return userSong ? { ...defSong, ...userSong } : defSong;
          });
          setSongs(mergedSongs);
        }
        if (Array.isArray(data.qas)) setQas(data.qas);
        setHasEdits(true);
      }
    } catch (err) {
      console.error("Failed to load CMS data:", err);
    }
  }, []);

  // Helper to persist to localStorage
  const persist = (
    nextConfig: SiteConfig,
    nextStops: HeritageStop[],
    nextSongs: GoldenAgeSong[],
    nextQas: QAItem[]
  ) => {
    if (typeof window === "undefined") return;
    try {
      const payload = {
        updatedAt: new Date().toISOString(),
        siteConfig: nextConfig,
        stops: nextStops,
        songs: nextSongs,
        qas: nextQas,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setHasEdits(true);
    } catch (e) {
      console.error("Failed to save CMS data:", e);
    }
  };

  const updateSiteConfig = (partial: Partial<SiteConfig>) => {
    const updated = { ...siteConfig, ...partial };
    setSiteConfig(updated);
    persist(updated, stops, songs, qas);
  };

  const updateStop = (id: string, partial: Partial<HeritageStop>) => {
    const updatedStops = stops.map((s) => (s.id === id ? { ...s, ...partial } : s));
    setStops(updatedStops);
    persist(siteConfig, updatedStops, songs, qas);
  };

  const updateSong = (id: string, partial: Partial<GoldenAgeSong>) => {
    const updatedSongs = songs.map((s) => (s.id === id ? { ...s, ...partial } : s));
    setSongs(updatedSongs);
    persist(siteConfig, stops, updatedSongs, qas);
  };

  const updateQA = (id: string, partial: Partial<QAItem>) => {
    const updatedQas = qas.map((q) => (q.id === id ? { ...q, ...partial } : q));
    setQas(updatedQas);
    persist(siteConfig, stops, songs, updatedQas);
  };

  const addQA = (newItem: Omit<QAItem, "id">) => {
    const created: QAItem = { id: `qa-${Date.now()}`, ...newItem };
    const updatedQas = [...qas, created];
    setQas(updatedQas);
    persist(siteConfig, stops, songs, updatedQas);
  };

  const deleteQA = (id: string) => {
    const updatedQas = qas.filter((q) => q.id !== id);
    setQas(updatedQas);
    persist(siteConfig, stops, songs, updatedQas);
  };

  const resetAll = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
    setSiteConfig(DEFAULT_SITE_CONFIG);
    setStops(HERITAGE_STOPS);
    setSongs(GOLDEN_AGE_SONGS);
    setQas(DEFAULT_QAS);
    setHasEdits(false);
  };

  const exportJSON = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      siteConfig,
      stops,
      songs,
      qas,
    };
    return JSON.stringify(payload, null, 2);
  };

  const importJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.siteConfig) setSiteConfig({ ...DEFAULT_SITE_CONFIG, ...data.siteConfig });
      if (Array.isArray(data.stops)) setStops(data.stops);
      if (Array.isArray(data.songs)) setSongs(data.songs);
      if (Array.isArray(data.qas)) setQas(data.qas);
      persist(
        data.siteConfig || siteConfig,
        data.stops || stops,
        data.songs || songs,
        data.qas || qas
      );
      return true;
    } catch (e) {
      console.error("Invalid JSON:", e);
      return false;
    }
  };

  return (
    <ContentContext.Provider
      value={{
        siteConfig,
        stops,
        songs,
        qas,
        hasEdits,
        updateSiteConfig,
        updateStop,
        updateSong,
        updateQA,
        addQA,
        deleteQA,
        resetAll,
        exportJSON,
        importJSON,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
}
