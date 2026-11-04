import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeahorseGuide from "@/components/SeahorseGuide";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Trey Kampot | ត្រីកំពត — @treykampotexplorer",
  description:
    "Trey Kampot: A free, mobile-friendly self-guided digital walking tour exploring French colonial-era architecture, commercial shophouse heritage, and riverside landmarks in Kampot, Cambodia with Trey Kampot Explorer (@treykampotexplorer). ត្រីកំពត៖ ដំណើរបេតិកភណ្ឌស្ថាបត្យកម្មសម័យអាណានិគមបារាំងនៅក្រុងកំពត។",
  keywords: [
    "Trey Kampot",
    "Trey Kampot Explorer",
    "@treykampotexplorer",
    "ត្រីកំពត",
    "Kampot",
    "Cambodia",
    "Heritage Walk",
    "French Colonial Architecture",
    "Durian Roundabout",
    "Hotel Old Cinema",
    "Entanou Bridge",
    "Fish Market Kampot",
    "កំពត",
    "រង្វង់មូលធុរេន",
    "ស្ពានឥន្ទធនូ",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#F5F0E5] dark:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] selection:bg-[#F0A536] selection:text-[#1F354D] transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <SeahorseGuide variant="floating" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
