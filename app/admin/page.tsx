"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Save,
  RotateCcw,
  Download,
  Upload,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Music,
  HelpCircle,
  Sparkles,
  Image as ImageIcon,
  ChevronRight,
  ArrowLeft,
  Plus,
  Trash2,
  AlertCircle,
  Eye,
  Sliders,
  FileCode
} from "lucide-react";
import { useContent } from "@/context/ContentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminPage() {
  const { language } = useLanguage();
  const isKm = language === "km";

  const {
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
  } = useContent();

  const [activeTab, setActiveTab] = useState<"stops" | "identity" | "music" | "qa" | "sync">("stops");
  const [selectedStopId, setSelectedStopId] = useState<string>("durian-roundabout");
  const [selectedSongId, setSelectedSongId] = useState<string>("song-1");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string>("");
  const [importJsonText, setImportJsonText] = useState<string>("");
  const [importError, setImportError] = useState<string>("");

  const showToast = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(""), 3500);
  };

  const currentStop = stops.find((s) => s.id === selectedStopId) || stops[0];
  const currentSong = songs.find((s) => s.id === selectedSongId) || songs[0];

  const handleDownloadBackup = () => {
    const jsonStr = exportJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `treykampot-site-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup JSON file downloaded successfully!");
  };

  const handleApplyImport = () => {
    setImportError("");
    if (!importJsonText.trim()) {
      setImportError("Please paste valid JSON data into the box.");
      return;
    }
    const success = importJSON(importJsonText.trim());
    if (success) {
      showToast("Data imported and applied to the site successfully!");
      setImportJsonText("");
    } else {
      setImportError("Invalid JSON structure. Please check and try again.");
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all edits to original defaults? This will erase your local edits.")) {
      resetAll();
      showToast("Reset all website content back to initial defaults!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Banner & Header */}
      <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0A536]/20 text-[#1F354D] dark:text-[#F0A536] text-xs font-extrabold uppercase tracking-wider">
            <Settings className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>Website Content Manager • CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
            Edit Trey Kampot Explorer Live
          </h1>
          <p className="text-xs sm:text-sm text-[#55534B] dark:text-[#C2BBAE]">
            Directly customize texts, stop descriptions, image URLs, vintage music songs, and FAQ questions without touching any code.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Link
            href="/"
            className="px-4 py-2.5 rounded-full bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] font-bold text-xs hover:border-[#F0A536] flex items-center space-x-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-[#F0A536]" />
            <span>View Live Site</span>
          </Link>
          <button
            type="button"
            onClick={handleDownloadBackup}
            className="px-4 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md flex items-center space-x-1.5 transition-all hover:scale-102 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Backup JSON</span>
          </button>
        </div>
      </div>

      {/* Success Notification Toast */}
      {saveSuccessMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center space-x-3 text-emerald-800 dark:text-emerald-200 text-xs font-bold animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Main Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565]">
        <button
          type="button"
          onClick={() => setActiveTab("stops")}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === "stops"
              ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
              : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#1F354D] dark:hover:text-white"
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>6 Heritage Stops</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("identity")}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === "identity"
              ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
              : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#1F354D] dark:hover:text-white"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Site Name & Mascot</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("music")}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === "music"
              ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
              : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#1F354D] dark:hover:text-white"
          }`}
        >
          <Music className="w-4 h-4" />
          <span>Music Playlist</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("qa")}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === "qa"
              ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
              : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#1F354D] dark:hover:text-white"
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Questions & Answers</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("sync")}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center space-x-2 ${
            activeTab === "sync"
              ? "bg-[#F0A536] text-[#1F354D] shadow-xs"
              : "text-[#55534B] dark:text-[#C2BBAE] hover:text-[#1F354D] dark:hover:text-white"
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>Import / Backup</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: 6 HERITAGE STOPS EDITOR                            */}
      {/* ========================================================= */}
      {activeTab === "stops" && currentStop && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Stops List Selector (Left 4 columns) */}
          <div className="lg:col-span-4 p-5 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] pb-2 border-b border-[#E8D9B8] dark:border-[#455565]">
              Select a Stop to Edit:
            </h3>
            <div className="space-y-2">
              {stops.map((stop) => {
                const isSelected = stop.id === selectedStopId;
                return (
                  <button
                    key={stop.id}
                    type="button"
                    onClick={() => setSelectedStopId(stop.id)}
                    className={`w-full p-3 rounded-2xl text-left transition-all flex items-center space-x-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#F0A536] text-[#1F354D] shadow-md font-extrabold"
                        : "bg-[#F5F0E5] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536]"
                    }`}
                  >
                    <span className="w-7 h-7 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                      {stop.order}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs truncate font-bold">{stop.title}</p>
                      <p className="text-[11px] truncate opacity-80 font-medium">{stop.khmerTitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stop Edit Form (Right 8 columns) */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565]">
              <div>
                <span className="text-xs font-extrabold text-[#F0A536] uppercase tracking-wider">
                  Editing Stop 0{currentStop.order}
                </span>
                <h2 className="text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                  {currentStop.title}
                </h2>
              </div>
              <Link
                href={`/stops/${currentStop.id}`}
                target="_blank"
                className="text-xs font-bold text-[#F0A536] hover:underline flex items-center space-x-1"
              >
                <span>Preview Stop Page</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Live Image Preview & URL */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#55534B] dark:text-[#C2BBAE] uppercase tracking-wider">
                Stop Main Cover Image:
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-48 h-32 rounded-2xl overflow-hidden bg-slate-900 border border-[#E8D9B8] dark:border-[#455565] shrink-0">
                  <img
                    src={currentStop.archivalComparison?.modernImageUrl || currentStop.archivalComparison?.archivalImageUrl || "/images/stops/kampot-homepage-cover.jpg"}
                    alt={currentStop.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/stops/kampot-homepage-cover.jpg";
                    }}
                  />
                </div>
                <div className="flex-1 w-full space-y-1.5 text-xs">
                  <input
                    type="text"
                    value={currentStop.archivalComparison?.modernImageUrl || ""}
                    onChange={(e) => {
                      const newUrl = e.target.value;
                      updateStop(currentStop.id, {
                        archivalComparison: {
                          ...currentStop.archivalComparison,
                          modernImageUrl: newUrl,
                        },
                      });
                    }}
                    placeholder="/images/stops/example.jpg or https://..."
                    className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                  />
                  <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE]">
                    Tip: Enter any local project image path (e.g. <code className="bg-[#E8D9B8] dark:bg-[#182A39] px-1 rounded">/images/stops/...</code>) or any web image URL (<code className="bg-[#E8D9B8] dark:bg-[#182A39] px-1 rounded">https://...</code>).
                  </p>
                </div>
              </div>
            </div>

            {/* Titles & Khmer Titles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  English Title:
                </label>
                <input
                  type="text"
                  value={currentStop.title}
                  onChange={(e) => updateStop(currentStop.id, { title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Khmer Title (ភាសាខ្មែរ)៖
                </label>
                <input
                  type="text"
                  value={currentStop.khmerTitle}
                  onChange={(e) => updateStop(currentStop.id, { khmerTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Role / Subtitle:
                </label>
                <input
                  type="text"
                  value={currentStop.role}
                  onChange={(e) => updateStop(currentStop.id, { role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Address / Street:
                </label>
                <input
                  type="text"
                  value={currentStop.address}
                  onChange={(e) => updateStop(currentStop.id, { address: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>
            </div>

            {/* Summary Descriptions */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Summary Story (English):
                </label>
                <textarea
                  rows={2}
                  value={currentStop.summary}
                  onChange={(e) => updateStop(currentStop.id, { summary: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Summary Story (Khmer - ភាសាខ្មែរ)៖
                </label>
                <textarea
                  rows={2}
                  value={currentStop.khmerSummary}
                  onChange={(e) => updateStop(currentStop.id, { khmerSummary: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Story Focus / Architectural Highlight:
                </label>
                <textarea
                  rows={3}
                  value={currentStop.storyFocus}
                  onChange={(e) => updateStop(currentStop.id, { storyFocus: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
                />
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Changes auto-save live to your browser!</span>
              </span>
              <button
                type="button"
                onClick={() => showToast(`Saved Stop 0${currentStop.order}: ${currentStop.title}`)}
                className="px-5 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                Save Stop Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: SITE NAME & IDENTITY                               */}
      {/* ========================================================= */}
      {activeTab === "identity" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg max-w-4xl space-y-6">
          <div className="border-b border-[#E8D9B8] dark:border-[#455565] pb-3">
            <h2 className="text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
              Site Branding & Mascot Configuration
            </h2>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE]">
              Controls the title, mascot labels, social media handle, and header subtitles shown across the navbar and home banner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Website Name (English):
              </label>
              <input
                type="text"
                value={siteConfig.siteTitle}
                onChange={(e) => updateSiteConfig({ siteTitle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Website Name (Khmer - ភាសាខ្មែរ)៖
              </label>
              <input
                type="text"
                value={siteConfig.khmerSiteTitle}
                onChange={(e) => updateSiteConfig({ khmerSiteTitle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Mascot Name (English):
              </label>
              <input
                type="text"
                value={siteConfig.mascotName}
                onChange={(e) => updateSiteConfig({ mascotName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Mascot Name (Khmer - ភាសាខ្មែរ)៖
              </label>
              <input
                type="text"
                value={siteConfig.khmerMascotName}
                onChange={(e) => updateSiteConfig({ khmerMascotName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Username / Social Handle:
              </label>
              <input
                type="text"
                value={siteConfig.handle}
                onChange={(e) => updateSiteConfig({ handle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Subtitle (English):
              </label>
              <input
                type="text"
                value={siteConfig.heroSubtitle}
                onChange={(e) => updateSiteConfig({ heroSubtitle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
              />
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Welcome Announcement (English):
              </label>
              <textarea
                rows={2}
                value={siteConfig.announcement}
                onChange={(e) => updateSiteConfig({ announcement: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
              />
            </div>

            <div>
              <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                Welcome Announcement (Khmer - ភាសាខ្មែរ)៖
              </label>
              <textarea
                rows={2}
                value={siteConfig.khmerAnnouncement}
                onChange={(e) => updateSiteConfig({ khmerAnnouncement: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => showToast("Site identity settings saved live!")}
              className="px-6 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              Save Branding Settings
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: MUSIC PLAYLIST EDITOR                              */}
      {/* ========================================================= */}
      {activeTab === "music" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Songs List */}
          <div className="lg:col-span-5 p-5 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] pb-2 border-b border-[#E8D9B8] dark:border-[#455565]">
              Sounds of Kampot Playlist ({songs.length} Tracks):
            </h3>
            <div className="space-y-2">
              {songs.map((song, i) => {
                const isSelected = song.id === selectedSongId;
                return (
                  <button
                    key={song.id}
                    type="button"
                    onClick={() => setSelectedSongId(song.id)}
                    className={`w-full p-3 rounded-2xl text-left transition-all flex items-center space-x-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#F0A536] text-[#1F354D] shadow-md font-extrabold"
                        : "bg-[#F5F0E5] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] border border-[#E8D9B8] dark:border-[#455565] hover:border-[#F0A536]"
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] text-[11px] font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs truncate font-bold">{song.title}</p>
                      <p className="text-[11px] truncate opacity-75">{song.artist}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Song Edit Card */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565]">
              <div>
                <span className="text-xs font-bold text-[#F0A536] uppercase tracking-wider">
                  Editing Track
                </span>
                <h3 className="text-lg font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                  {currentSong.title}
                </h3>
              </div>
              <a
                href={currentSong.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#F0A536] hover:underline flex items-center space-x-1"
              >
                <span>Listen on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Song Title (English):
                </label>
                <input
                  type="text"
                  value={currentSong.title}
                  onChange={(e) => updateSong(currentSong.id, { title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Song Title (Khmer - ភាសាខ្មែរ)៖
                </label>
                <input
                  type="text"
                  value={currentSong.khmerTitle}
                  onChange={(e) => updateSong(currentSong.id, { khmerTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Artist Name:
                </label>
                <input
                  type="text"
                  value={currentSong.artist}
                  onChange={(e) => updateSong(currentSong.id, { artist: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  YouTube Video ID:
                </label>
                <input
                  type="text"
                  value={currentSong.youtubeId}
                  onChange={(e) => {
                    const id = e.target.value.trim();
                    updateSong(currentSong.id, {
                      youtubeId: id,
                      youtubeUrl: `https://www.youtube.com/watch?v=${id}`,
                    });
                  }}
                  placeholder="e.g., ZmTGtmCx6QA"
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                />
                <p className="text-[10px] text-[#55534B] dark:text-[#C2BBAE] mt-1">
                  This ID is used to stream the real audio directly inside the page without video files.
                </p>
              </div>

              <div>
                <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                  Recommended Walking Context:
                </label>
                <textarea
                  rows={2}
                  value={currentSong.walkRecommendation}
                  onChange={(e) => updateSong(currentSong.id, { walkRecommendation: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => showToast(`Saved song: ${currentSong.title}`)}
                className="px-5 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                Save Song Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: QUESTIONS & ANSWERS (FAQS)                         */}
      {/* ========================================================= */}
      {activeTab === "qa" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg max-w-4xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8D9B8] dark:border-[#455565]">
            <div>
              <h2 className="text-xl font-extrabold text-[#1F354D] dark:text-[#F5F0E5]">
                Frequently Asked Questions ({qas.length})
              </h2>
              <p className="text-xs text-[#55534B] dark:text-[#C2BBAE]">
                Modify existing questions and answers or add new ones for travelers.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                addQA({
                  q: "New FAQ Question",
                  a: "Answer to this question goes here.",
                });
                showToast("Added a new FAQ item!");
              }}
              className="px-4 py-2 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md flex items-center space-x-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Question</span>
            </button>
          </div>

          <div className="space-y-4">
            {qas.map((qa, index) => (
              <div
                key={qa.id}
                className="p-4 rounded-2xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F0A536]">
                    Question #{index + 1}
                  </span>
                  {qas.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        deleteQA(qa.id);
                        showToast("Deleted question.");
                      }}
                      className="text-red-500 hover:text-red-700 p-1 text-xs font-bold flex items-center space-x-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                      Question:
                    </label>
                    <input
                      type="text"
                      value={qa.q}
                      onChange={(e) => updateQA(qa.id, { q: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#55534B] dark:text-[#C2BBAE] mb-1">
                      Answer:
                    </label>
                    <textarea
                      rows={2}
                      value={qa.a}
                      onChange={(e) => updateQA(qa.id, { a: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] focus:outline-none focus:border-[#F0A536] resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => showToast("FAQ updates saved live!")}
              className="px-6 py-2.5 rounded-full bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              Save FAQs
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 5: IMPORT / EXPORT & SYNC                             */}
      {/* ========================================================= */}
      {activeTab === "sync" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Download & Reset Card */}
          <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-4">
            <h3 className="text-base font-extrabold text-[#1F354D] dark:text-[#F5F0E5] flex items-center space-x-2">
              <Download className="w-4 h-4 text-[#F0A536]" />
              <span>Backup & Reset Options</span>
            </h3>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE]">
              Download your full website configuration as a JSON file. You can keep this file as a backup or share it with team members.
            </p>

            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={handleDownloadBackup}
                className="w-full py-3 rounded-2xl bg-[#F0A536] hover:bg-[#e09426] text-[#1F354D] font-extrabold text-xs shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete JSON Backup</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 font-extrabold text-xs hover:bg-red-100 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory Defaults</span>
              </button>
            </div>
          </div>

          {/* Import JSON Card */}
          <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#263B4B] border-2 border-[#E8D9B8] dark:border-[#455565] shadow-lg space-y-4">
            <h3 className="text-base font-extrabold text-[#1F354D] dark:text-[#F5F0E5] flex items-center space-x-2">
              <Upload className="w-4 h-4 text-[#F0A536]" />
              <span>Import Saved JSON Data</span>
            </h3>
            <p className="text-xs text-[#55534B] dark:text-[#C2BBAE]">
              Paste a previously exported JSON backup below to restore or overwrite the website content immediately.
            </p>

            {importError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-300 text-red-700 dark:text-red-300 text-xs">
                {importError}
              </div>
            )}

            <textarea
              rows={5}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder="Paste JSON content here..."
              className="w-full px-3 py-2 rounded-xl bg-[#F5F0E5] dark:bg-[#182A39] border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] text-xs font-mono focus:outline-none focus:border-[#F0A536] resize-none"
            />

            <button
              type="button"
              onClick={handleApplyImport}
              className="w-full py-2.5 rounded-2xl bg-[#1F354D] dark:bg-[#F0A536] text-white dark:text-[#182A39] font-extrabold text-xs shadow-md flex items-center justify-center space-x-2 transition-all hover:scale-102 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Apply & Import JSON</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Info Pill */}
      <div className="p-4 rounded-2xl bg-[#E8D9B8]/40 dark:bg-[#263B4B]/60 border border-[#E8D9B8] dark:border-[#455565] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#55534B] dark:text-[#C2BBAE]">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#F0A536] shrink-0" />
          <span>
            <strong>How it works:</strong> All changes are instantly active live on this browser! When you visit the homepage or stop pages, you will see your new texts, photos, and songs immediately.
          </span>
        </div>
        <Link
          href="/"
          className="text-xs font-extrabold text-[#1F354D] dark:text-[#F0A536] hover:underline shrink-0"
        >
          Return to Homepage →
        </Link>
      </div>
    </div>
  );
}
