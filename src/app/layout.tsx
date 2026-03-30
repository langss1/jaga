import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaga - AI Phishing Guard",
  description: "Real-Time On-Device AI for Phishing Protection in ASEAN. Protecting people from online scams directly on your smartphone.",
  icons: {
    icon: "/assets/Logo.png",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900 min-h-screen`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

