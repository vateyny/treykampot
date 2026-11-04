import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kampot Through Time: Consistent Light & Dark Mode Colour System
        colonial: {
          bg: "#F5F0E5",           // Main background (Light)
          navy: "#1F354D",         // Primary navy
          gold: "#F0A536",         // Golden yellow accent
          fadedYellow: "#E8D9B8",  // Faded yellow section background
          surface: "#FFFFFF",      // White surfaces
          body: "#55534B",         // Body text
          terracotta: "#B77B5B",   // Terracotta details
          border: "#E8D9B8",       // Light borders

          // Dark Mode equivalents
          darkBg: "#182A39",       // Dark background
          darkCard: "#263B4B",     // Card and section surfaces
          darkText: "#F5F0E5",     // Primary text
          darkTextMuted: "#C2BBAE",// Secondary text
          darkGold: "#F0A536",     // Golden yellow accent
          darkBorder: "#455565",   // Borders
          darkHover: "#354858",    // Hover and selected surfaces
        },
      },
      fontFamily: {
        sans: ["'Kantumruy Pro'", "sans-serif"],
        khmer: ["'Kantumruy Pro'", "sans-serif"],
        hyperlegible: ["'Kantumruy Pro'", "sans-serif"],
        prestige: ["'Kantumruy Pro'", "sans-serif"],
        serif: ["'Kantumruy Pro'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
