"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { MoveHorizontal, History, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BeforeAfterSliderProps {
  archivalImageUrl: string;
  archivalYear: string;
  khmerArchivalYear?: string;
  archivalCaption: string;
  khmerArchivalCaption?: string;
  modernImageUrl: string;
  modernCaption: string;
  khmerModernCaption?: string;
  transformationNote: string;
  khmerTransformationNote?: string;
  compact?: boolean;
  heightClass?: string;
}

export default function BeforeAfterSlider({
  archivalImageUrl,
  archivalYear,
  khmerArchivalYear,
  archivalCaption,
  khmerArchivalCaption,
  modernImageUrl,
  modernCaption,
  khmerModernCaption,
  transformationNote,
  khmerTransformationNote,
  compact = false,
  heightClass = "h-[320px] sm:h-[420px]",
}: BeforeAfterSliderProps) {
  const { language, t } = useLanguage();
  const isKm = language === "km";

  const activeArchivalYear = isKm && khmerArchivalYear ? khmerArchivalYear : archivalYear;
  const activeArchivalCaption = isKm && khmerArchivalCaption ? khmerArchivalCaption : archivalCaption;
  const activeModernCaption = isKm && khmerModernCaption ? khmerModernCaption : modernCaption;
  const activeTransformation = isKm && khmerTransformationNote ? khmerTransformationNote : transformationNote;

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className={`overflow-hidden ${compact ? "w-full" : "bg-[#F3EDE0] rounded-2xl border border-[#D8C9A9] shadow-sm"}`}>
      {!compact && (
        <div className="p-4 sm:p-5 border-b border-[#D8C9A9] bg-[#D8C9A9]/20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <History className="w-4 h-4 text-[#A9674E]" />
            <h3 className="text-sm font-bold text-[#17283D]">
              {t("sliderTitle")}
            </h3>
          </div>
          <span className="text-[11px] text-[#71877D] flex items-center space-x-1">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#E5A332]" />
            <span className="hidden sm:inline">{t("sliderInstruction")}</span>
            <span className="sm:hidden">{isKm ? "ទាញប្រៀបធៀប" : "Drag slider"}</span>
          </span>
        </div>
      )}

      {/* Comparison Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onClick={(e) => handleMove(e.clientX)}
        className={`relative w-full ${heightClass} select-none cursor-ew-resize overflow-hidden bg-[#17283D] touch-none`}
      >
        {/* Layer 1: Modern Image (Full Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={modernImageUrl}
            alt="Present Day Kampot View"
            className="w-full h-full object-cover"
          />
          {/* Label Badge: Present Day */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#17283D]/90 backdrop-blur-md text-[#F3EDE0] text-xs font-semibold tracking-wider uppercase border border-white/20 shadow">
            {t("presentDayBadge")}
          </div>
        </div>

        {/* Layer 2: Archival Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <img
              src={archivalImageUrl}
              alt="Historical Archival View"
              className="w-full h-full object-cover"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                maxWidth: "none",
              }}
            />
          </div>
          {/* Label Badge: Archival */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#A9674E]/95 backdrop-blur-md text-[#F3EDE0] text-xs font-bold tracking-wider uppercase border border-white/20 shadow">
            {activeArchivalYear}
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#E5A332] text-[#17283D] border-2 border-white shadow-xl flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 text-[#17283D] stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Captions & Heritage Insight Footer */}
      {!compact && (
        <div className="p-4 sm:p-5 bg-[#FAF7F2] space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-[#F3EDE0] border border-[#D8C9A9]">
              <p className="font-bold text-[#A9674E] text-[11px] uppercase tracking-wider mb-1">
                {t("archivalContextBadge")} ({activeArchivalYear})
              </p>
              <p className="text-[#394653] leading-relaxed">{activeArchivalCaption}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#F3EDE0] border border-[#D8C9A9]">
              <p className="font-bold text-[#17283D] text-[11px] uppercase tracking-wider mb-1">
                {t("presentContextBadge")}
              </p>
              <p className="text-[#394653] leading-relaxed">{activeModernCaption}</p>
            </div>
          </div>

          <div className="flex items-start space-x-2 pt-2 border-t border-[#D8C9A9] text-xs text-[#71877D]">
            <Info className="w-4 h-4 text-[#A9674E] flex-shrink-0 mt-0.5" />
            <p className="italic leading-relaxed text-[#394653]">
              <strong className="text-[#17283D] not-italic">{t("evolutionNoteLabel")} </strong>
              {activeTransformation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
