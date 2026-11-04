"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  MapPin,
  Landmark,
  Footprints,
  Navigation,
  Music,
  Headphones,
  BookOpen,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  Compass,
  ArrowRight,
  Settings
} from "lucide-react";
import { HERITAGE_STOPS } from "@/data/stops";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useContent } from "@/context/ContentContext";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stopsDropdownOpen, setStopsDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { siteConfig } = useContent();

  const isKm = language === "km";

  const toggleLanguage = () => {
    setLanguage(isKm ? "en" : "km");
  };

  const navMainLinks = [
    { name: isKm ? "ទំព័រដើម" : "Home", href: "/", icon: Home },
    { name: isKm ? "ផែនទីថ្មើរជើង" : "Walking Map", href: "/map", icon: MapPin },
    { name: isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦" : "06 Heritage Stops", href: "/stops", icon: Landmark },
    { name: isKm ? "ដំណើរទស្សនកិច្ច" : "Tour Itinerary", href: "/itinerary", icon: Footprints },
    { name: isKm ? "អំពីគម្រោង & ប្រភព" : "About & Sources", href: "/about", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E5]/95 dark:bg-[#182A39]/95 backdrop-blur-md border-b border-[#E8D9B8] dark:border-[#455565] shadow-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Branding: Trey Kampot & @treykampotexplorer */}
          <NextLink href="/" className="flex items-center space-x-3 group shrink-0" title={isKm ? "ត្រីកំពត • @treykampotexplorer" : "Trey Kampot • @treykampotexplorer"}>
            <div className="w-10 h-10 rounded-xl bg-[#1F354D] dark:bg-[#263B4B] flex items-center justify-center text-[#FFFFFF] dark:text-[#F0A536] border border-[#1F354D] dark:border-[#455565] shadow-xs group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden p-1">
              <img
                src="/images/mascot/pufferfish/excited.png"
                alt="Trey Kampot Explorer"
                className="w-full h-full object-contain filter drop-shadow group-hover:rotate-6 transition-transform"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#1F354D] dark:text-[#F5F0E5]">
                  {isKm ? siteConfig.khmerSiteTitle : siteConfig.siteTitle}
                </span>
                <span className="text-[10px] font-bold tracking-tight px-2 py-0.5 rounded-full bg-[#E8D9B8] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] border border-[#E8D9B8] dark:border-[#455565]">
                  {siteConfig.handle}
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-[#55534B] dark:text-[#C2BBAE] font-semibold hidden sm:block">
                {isKm ? siteConfig.khmerHeroSubtitle : siteConfig.heroSubtitle}
              </p>
            </div>
          </NextLink>

          {/* Desktop Navigation: Option 1 (The Balanced Approach) */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-2.5">
            
            {/* ========================================================= */}
            {/* GROUP 1 (LEFT): CONTEXTUAL INFORMATION & CONTENT NAV      */}
            {/* [Home] [Map] [Audio] [About] [06 Stops]                   */}
            {/* ========================================================= */}
            <div className="flex items-center space-x-1 sm:space-x-1.5">
              {/* 1. Home */}
              <NextLink
                href="/"
                title={isKm ? "ទំព័រដើម (Home)" : "Home"}
                aria-label="Home"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  pathname === "/"
                    ? "bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs border border-[#1F354D] dark:border-[#F0A536]"
                    : "text-[#1F354D] dark:text-[#F5F0E5] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                }`}
              >
                <Home className="w-4 h-4 shrink-0" />
              </NextLink>

              {/* 2. Walking Map */}
              <NextLink
                href="/map"
                title={isKm ? "ផែនទីថ្មើរជើង (Walking Map)" : "Walking Map"}
                aria-label="Walking Map"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  pathname === "/map"
                    ? "bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs border border-[#1F354D] dark:border-[#F0A536]"
                    : "text-[#1F354D] dark:text-[#F5F0E5] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                }`}
              >
                <MapPin className="w-4 h-4 shrink-0" />
              </NextLink>

              {/* 3. 06 Stops Pill with Direct Link & Dropdown */}
              <div className="relative">
                <NextLink
                  href="/stops"
                  onMouseEnter={() => setStopsDropdownOpen(true)}
                  title={isKm ? "ទីតាំងបេតិកភណ្ឌទាំង ៦ (6 Curated Stops)" : "6 Curated Heritage Stops"}
                  aria-label="6 Curated Heritage Stops"
                  className={`h-9 px-3 rounded-full flex items-center space-x-1.5 transition-all text-xs font-bold cursor-pointer ${
                    pathname.startsWith("/stops")
                      ? "bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] border border-[#1F354D] dark:border-[#F0A536]"
                      : "text-[#1F354D] dark:text-[#F5F0E5] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                  }`}
                >
                  <Landmark className="w-4 h-4 shrink-0 text-[#B77B5B] dark:text-[#F0A536]" />
                  <span className="text-[11px] font-extrabold tracking-wider">06</span>
                </NextLink>

                {stopsDropdownOpen && (
                  <div
                    onMouseLeave={() => setStopsDropdownOpen(false)}
                    className="absolute left-0 mt-2 w-80 bg-[#FFFFFF] dark:bg-[#263B4B] rounded-2xl shadow-xl border-2 border-[#E8D9B8] dark:border-[#455565] py-2 z-50 animate-in fade-in slide-in-from-top-2 text-[#1F354D] dark:text-[#F5F0E5]"
                  >
                    <div className="px-4 py-2 border-b border-[#E8D9B8] dark:border-[#455565] text-xs font-extrabold text-[#F0A536] uppercase tracking-wider flex items-center justify-between">
                      <NextLink href="/stops" className="hover:underline flex items-center space-x-1">
                        <span>{t("selectStop")}</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </NextLink>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F0A536]">
                        {HERITAGE_STOPS.length} STOPS
                      </span>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {HERITAGE_STOPS.map((stop) => (
                        <NextLink
                          key={stop.id}
                          href={`/stops/${stop.id}`}
                          onClick={() => setStopsDropdownOpen(false)}
                          className="flex items-start space-x-3 px-4 py-2.5 hover:bg-[#E8D9B8]/60 dark:hover:bg-[#354858] transition-colors group"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8D9B8] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] font-extrabold text-xs flex items-center justify-center border border-[#E8D9B8] group-hover:bg-[#F0A536] group-hover:text-[#182A39] transition-colors">
                            {stop.order}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-extrabold text-[#1F354D] dark:text-[#F5F0E5] truncate group-hover:text-[#F0A536]">
                              {isKm ? stop.khmerTitle : stop.title}
                            </p>
                            <p className="text-[11px] text-[#55534B] dark:text-[#C2BBAE] font-medium truncate">
                              {isKm ? stop.khmerRole : stop.role}
                            </p>
                          </div>
                        </NextLink>
                      ))}
                    </div>
                    <div className="px-3 pt-2 pb-1 border-t border-[#E8D9B8] dark:border-[#455565]">
                      <NextLink
                        href="/stops"
                        onClick={() => setStopsDropdownOpen(false)}
                        className="block w-full py-1.5 text-center text-xs font-bold text-[#1F354D] dark:text-[#F0A536] hover:underline"
                      >
                        {isKm ? "មើលទីតាំងទាំង ៦ ទាំងអស់ →" : "View All 6 Stops Grid →"}
                      </NextLink>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Tour Itinerary (Footprints) */}
              <NextLink
                href="/itinerary"
                title={isKm ? "ដំណើរទស្សនកិច្ច (Tour Itinerary)" : "Tour Itinerary"}
                aria-label="Tour Itinerary"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  pathname === "/itinerary" || pathname === "/journey"
                    ? "bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs border border-[#1F354D] dark:border-[#F0A536]"
                    : "text-[#1F354D] dark:text-[#F5F0E5] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                }`}
              >
                <Footprints className="w-4 h-4 shrink-0 text-[#B77B5B] dark:text-[#F0A536]" />
              </NextLink>

              {/* 5. About & Sources */}
              <NextLink
                href="/about"
                title={isKm ? "អំពីគម្រោង & ប្រភព (About & Sources)" : "About & Sources"}
                aria-label="About & Sources"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  pathname === "/about"
                    ? "bg-[#1F354D] text-[#FFFFFF] dark:bg-[#F0A536] dark:text-[#182A39] shadow-xs border border-[#1F354D] dark:border-[#F0A536]"
                    : "text-[#1F354D] dark:text-[#F5F0E5] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
              </NextLink>
            </div>

            {/* ========================================================= */}
            {/* SPACER / VISUAL SEPARATOR 1                               */}
            {/* ========================================================= */}
            <div className="h-6 w-px bg-[#E8D9B8] dark:bg-[#455565] mx-1 sm:mx-1.5" aria-hidden="true" />

            {/* ========================================================= */}
            {/* GROUP 2 (CENTER): GLOBAL TOGGLES (LANGUAGE & THEME)       */}
            {/* [Language Pill] [Theme Toggle]                            */}
            {/* ========================================================= */}
            <div className="flex items-center space-x-1.5">
              {/* Language Switcher Pill */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="h-9 px-3 rounded-full flex items-center space-x-1.5 border border-[#E8D9B8] dark:border-[#455565] bg-[#FFFFFF] dark:bg-[#263B4B] hover:bg-[#E8D9B8] dark:hover:bg-[#354858] text-[#1F354D] dark:text-[#F5F0E5] transition-all shadow-xs cursor-pointer text-xs font-bold"
                title={isKm ? "Switch to English" : "ប្តូរទៅជាភាសាខ្មែរ"}
                aria-label="Toggle Language"
              >
                <Globe className="w-4 h-4 text-[#B77B5B] dark:text-[#F0A536] shrink-0" />
                <span>{isKm ? "EN" : "ខ្មែរ"}</span>
              </button>

              {/* Theme Toggle (Sun / Moon) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#E8D9B8] dark:border-[#455565] bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F0A536] hover:bg-[#E8D9B8] dark:hover:bg-[#354858] transition-all shadow-xs cursor-pointer"
                title={
                  theme === "dark"
                    ? isKm
                      ? "ប្តូរទៅពន្លឺ (Light Mode)"
                      : "Switch to Light Mode"
                    : isKm
                    ? "ប្តូរទៅងងឹត (Dark Mode)"
                    : "Switch to Dark Mode"
                }
                aria-label="Toggle Mood Color (Light/Dark)"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#F0A536] transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-[#1F354D] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Admin Editor Mode Pill */}
              <NextLink
                href="/admin"
                className={`h-9 px-2.5 rounded-full flex items-center space-x-1.5 border transition-all shadow-xs cursor-pointer text-xs font-bold ${
                  pathname === "/admin"
                    ? "bg-[#F0A536] text-[#1F354D] border-[#F0A536]"
                    : "border-[#E8D9B8] dark:border-[#455565] bg-[#FFFFFF] dark:bg-[#263B4B] text-[#1F354D] dark:text-[#F5F0E5] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                }`}
                title={isKm ? "ផ្ទាំងគ្រប់គ្រង & កែប្រែគេហទំព័រ (Admin Editor)" : "Edit Site Content (Admin Mode)"}
              >
                <Settings className="w-3.5 h-3.5 text-[#F0A536]" />
                <span className="hidden xl:inline">{isKm ? "កែប្រែ" : "Edit"}</span>
              </NextLink>
            </div>

            {/* ========================================================= */}
            {/* SPACER / VISUAL SEPARATOR 2                               */}
            {/* ========================================================= */}
            <div className="h-6 w-px bg-[#E8D9B8] dark:bg-[#455565] mx-1 sm:mx-1.5" aria-hidden="true" />

            {/* ========================================================= */}
            {/* GROUP 3 (RIGHT): PRIMARY CALL TO ACTION (ISOLATED)        */}
            {/* [Start Walk]                                              */}
            {/* ========================================================= */}
            <div className="pl-1">
              <NextLink
                href="/stops/durian-roundabout"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wide bg-[#1F354D] dark:bg-[#F0A536] text-[#FFFFFF] dark:text-[#182A39] hover:bg-[#162738] dark:hover:bg-[#e09426] shadow-sm hover:shadow-md transition-all border border-[#1F354D] dark:border-[#F0A536] shrink-0 hover:scale-105 cursor-pointer"
                title={isKm ? "ចាប់ផ្តើមដើរពីទីតាំងទី ១ (Start Walking Tour)" : "Start Walking Tour"}
                aria-label="Start Walking Tour"
              >
                <Footprints className="w-3.5 h-3.5 shrink-0" />
                <span>{isKm ? "ចាប់ផ្តើមដើរ →" : "Start Walk →"}</span>
              </NextLink>
            </div>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center space-x-1.5">
            {/* Mobile Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-[#1F354D] dark:text-[#F0A536] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs"
              title={isKm ? "Switch to English" : "ប្តូរទៅជាភាសាខ្មែរ"}
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4 text-[#F0A536]" />
            </button>

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[#1F354D] dark:text-[#F0A536] bg-[#FFFFFF] dark:bg-[#263B4B] border border-[#E8D9B8] dark:border-[#455565] shadow-xs"
              title={theme === "dark" ? "Light Mode" : "Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#F0A536]" />
              ) : (
                <Moon className="w-4 h-4 text-[#1F354D]" />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F354D] dark:text-[#F5F0E5] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8D9B8] dark:border-[#455565] bg-[#FFFFFF] dark:bg-[#263B4B] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 text-[#1F354D] dark:text-[#F5F0E5]">
          <div className="space-y-1">
            {navMainLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all ${
                    isActive
                      ? "bg-[#1F354D] text-white dark:bg-[#F0A536] dark:text-[#182A39]"
                      : "text-[#1F354D] dark:text-[#F5F0E5] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#F0A536]" />
                  <span>{link.name}</span>
                </NextLink>
              );
            })}

            {/* Mobile Admin Link */}
            <NextLink
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all ${
                pathname === "/admin"
                  ? "bg-[#F0A536] text-[#1F354D]"
                  : "text-[#F0A536] hover:bg-[#E8D9B8] dark:hover:bg-[#354858]"
              }`}
            >
              <Settings className="w-4 h-4 text-[#F0A536]" />
              <span>{isKm ? "ផ្ទាំងកែសម្រួលគេហទំព័រ (Admin Editor)" : "Edit Site Content (Admin)"}</span>
            </NextLink>
          </div>

          <div className="pt-2 border-t border-[#E8D9B8] dark:border-[#455565]">
            <p className="px-4 py-1.5 text-xs font-bold text-[#F0A536] uppercase tracking-wider flex items-center space-x-1.5">
              <Landmark className="w-3.5 h-3.5 text-[#F0A536]" />
              <span>{t("navStops")} ({HERITAGE_STOPS.length})</span>
            </p>
            <div className="space-y-1">
              {HERITAGE_STOPS.map((stop) => (
                <NextLink
                  key={stop.id}
                  href={`/stops/${stop.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 px-4 py-2 text-xs font-extrabold text-[#1F354D] dark:text-[#F5F0E5] hover:bg-[#E8D9B8] dark:hover:bg-[#354858] rounded-xl"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1F354D] dark:bg-[#182A39] text-[#F5F0E5] text-[10px] flex items-center justify-center border border-[#E8D9B8]">
                    {stop.order}
                  </span>
                  <span className="truncate">{isKm ? stop.khmerTitle : stop.title}</span>
                </NextLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}