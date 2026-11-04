"use client";

import React, { useState } from "react";
import Image from "next/image";

export type PufferfishEmotion =
  | "excited"
  | "celebratory"
  | "pure-bliss"
  | "smug"
  | "delighted"
  | "playful"
  | "cheerful"
  | "overjoyed"
  | "giddy"
  | "content";

export const PUFFERFISH_REACTIONS: Record<
  PufferfishEmotion,
  { name: string; khmerName: string; image: string }
> = {
  excited: {
    name: "Excited",
    khmerName: "រំភើប",
    image: "/images/mascot/pufferfish/excited.png"
  },
  celebratory: {
    name: "Hurray / Celebratory",
    khmerName: "អបអរសាទរ",
    image: "/images/mascot/pufferfish/celebratory.png"
  },
  "pure-bliss": {
    name: "Pure Bliss",
    khmerName: "សុភមង្គល",
    image: "/images/mascot/pufferfish/pure-bliss.png"
  },
  smug: {
    name: "Smug / Pleased",
    khmerName: "ពេញចិត្ត",
    image: "/images/mascot/pufferfish/smug.png"
  },
  delighted: {
    name: "Delighted",
    khmerName: "សប្បាយរីករាយ",
    image: "/images/mascot/pufferfish/delighted.png"
  },
  playful: {
    name: "Playful",
    khmerName: "ក្រមិចក្រមើម",
    image: "/images/mascot/pufferfish/playful.png"
  },
  cheerful: {
    name: "Cheerful",
    khmerName: "ស្រស់ស្រាយ",
    image: "/images/mascot/pufferfish/cheerful.png"
  },
  overjoyed: {
    name: "Overjoyed",
    khmerName: "សប្បាយហួសកម្រិត",
    image: "/images/mascot/pufferfish/overjoyed.png"
  },
  giddy: {
    name: "Giddy",
    khmerName: "វិលវល់សប្បាយ",
    image: "/images/mascot/pufferfish/giddy.png"
  },
  content: {
    name: "Content / At Ease",
    khmerName: "ស្ងប់ចិត្ត",
    image: "/images/mascot/pufferfish/content.png"
  }
};

const EMOTION_KEYS: PufferfishEmotion[] = [
  "excited",
  "cheerful",
  "playful",
  "pure-bliss",
  "delighted",
  "smug",
  "celebratory",
  "overjoyed",
  "giddy",
  "content"
];

interface PufferfishMascotProps {
  emotion?: PufferfishEmotion;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "floating";
  className?: string;
  badge?: boolean;
  interactive?: boolean;
  title?: string;
}

export default function PufferfishMascot({
  emotion = "cheerful",
  size = "md",
  className = "",
  badge = false,
  interactive = true,
  title
}: PufferfishMascotProps) {
  const [currentEmotion, setCurrentEmotion] = useState<PufferfishEmotion>(emotion);

  const cycleEmotion = () => {
    if (!interactive) return;
    const currentIndex = EMOTION_KEYS.indexOf(currentEmotion);
    const nextIndex = (currentIndex + 1) % EMOTION_KEYS.length;
    setCurrentEmotion(EMOTION_KEYS[nextIndex]);
  };

  const reaction = PUFFERFISH_REACTIONS[currentEmotion] || PUFFERFISH_REACTIONS.cheerful;

  // 1. FLOATING BOTTOM MASCOT WIDGET (Pufferfish face reaction only)
  if (size === "floating") {
    return (
      <div className="fixed bottom-5 right-5 z-40 select-none">
        <button
          type="button"
          onClick={cycleEmotion}
          title={title || `Pufferfish Guide: ${reaction.name} (Click to change mood)`}
          aria-label="Pufferfish Mascot Reaction"
          className="group relative flex items-center justify-center p-1.5 rounded-full bg-white/90 dark:bg-[#263B4B]/95 backdrop-blur-md border-2 border-[#E8D9B8] dark:border-[#455565] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center overflow-hidden">
            <img
              src={reaction.image}
              alt={reaction.name}
              className="w-full h-full object-contain filter drop-shadow group-hover:rotate-6 transition-transform duration-300"
            />
          </div>

          {/* Golden Badge Ring */}
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F0A536] text-[#1F354D] flex items-center justify-center text-[10px] font-extrabold shadow-sm border border-white dark:border-[#182A39]">
            ✨
          </div>
        </button>
      </div>
    );
  }

  // 2. SIZE DIMENSIONS
  const sizeClasses = {
    xs: "w-8 h-8",
    sm: "w-10 h-10 sm:w-12 sm:h-12",
    md: "w-14 h-14 sm:w-16 sm:h-16",
    lg: "w-20 h-20 sm:w-24 sm:h-24",
    xl: "w-28 h-28 sm:w-32 sm:h-32",
    floating: "w-16 h-16"
  }[size];

  // 3. BADGE CONTAINER (Optional rounded card wrapper)
  if (badge) {
    return (
      <button
        type="button"
        onClick={interactive ? cycleEmotion : undefined}
        title={title || `Mood: ${reaction.name}`}
        aria-label={reaction.name}
        className={`inline-flex items-center justify-center p-2 rounded-2xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs hover:border-[#F0A536] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${className}`}
      >
        <div className={`${sizeClasses} relative flex items-center justify-center`}>
          <img
            src={reaction.image}
            alt={reaction.name}
            className="w-full h-full object-contain filter drop-shadow"
          />
        </div>
      </button>
    );
  }

  // 4. PURE FACE REACTION IMAGE ONLY (No text, transparent background)
  return (
    <div
      onClick={interactive ? cycleEmotion : undefined}
      title={title || `Pufferfish reaction: ${reaction.name}`}
      className={`inline-flex items-center justify-center select-none ${interactive ? "cursor-pointer hover:scale-110 active:scale-95" : ""} transition-transform duration-300 ${sizeClasses} ${className}`}
    >
      <img
        src={reaction.image}
        alt={reaction.name}
        className="w-full h-full object-contain filter drop-shadow pointer-events-none"
      />
    </div>
  );
}
