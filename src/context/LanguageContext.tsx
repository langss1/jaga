"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_features: "Features",
    nav_technology: "Technology",
    nav_community: "Get Started",
    launch_info: "Coming Soon",
    hero_badge: "Global Edition: AI Phishing Protection",
    hero_title_1: "JAGA",
    hero_subtitle: "Your AI Phishing Guard",
    hero_hashtag: "#protect yourself, family, and future",
    hero_desc: "The next generation of AI-driven security. Simple, powerful, and built for your privacy.",
    btn_learn_more: "See How It Works",
    btn_join_community: "App Coming Soon",
    scanning: "Scanning...",
    analyzing: "Real-time Edge AI Protection",
    active: "JAGA ACTIVE",
    countdown_days: "DAYS",
    countdown_hours: "HOURS",
    countdown_minutes: "MINUTES",
    countdown_seconds: "SECONDS",
    available_on: "Releasing on 14 April 2026",
    footer_community_msg: "Protecting the world against phishing, one device at a time.",
    solution_badge: "Our Mission",
    solution_title: "AI Security Redefined",
    solution_desc: "We bring high-end AI protection directly to your phone. No servers, no data leaks, no compromises.",
    sol_web_name: "Web Defense",
    sol_web_desc: "Real-time URL filtering that stops malicious links instantly on your browser.",
    sol_msg_name: "Message Shield",
    sol_msg_desc: "On-device NLP to detect scam patterns in your SMS and messaging apps.",
    sol_voice_name: "Voice Guard",
    sol_voice_desc: "Live call analysis to prevent voice-based fraud using edge-to-edge AI.",
    tech_badge: "The Tech",
    tech_title: "Privacy First AI",
    tech_desc: "All processing happens 100% on-device. Your data never leaves your hands."
  },
  id: {
    nav_features: "Fitur",
    nav_technology: "Teknologi",
    nav_community: "Mulai Sekarang",
    launch_info: "Segera Hadir",
    hero_badge: "Edisi Global: Perlindungan Phishing AI",
    hero_title_1: "JAGA",
    hero_subtitle: "Your AI Phishing Guard",
    hero_hashtag: "#protect yourself, family, and future",
    hero_desc: "Keamanan siber generasi terbaru berbasis AI. Sederhana, kuat, dan menjaga privasi Anda.",
    btn_learn_more: "Cara Kerja",
    btn_join_community: "Aplikasi Segera Rilis",
    scanning: "Memindai...",
    analyzing: "Perlindungan AI Real-time",
    active: "JAGA AKTIF",
    countdown_days: "HARI",
    countdown_hours: "JAM",
    countdown_minutes: "MENIT",
    countdown_seconds: "DETIK",
    available_on: "Meluncur 14 April 2026",
    footer_community_msg: "Melindungi dunia dari phishing, satu perangkat pada satu waktu.",
    solution_badge: "Misi Kami",
    solution_title: "Keamanan AI Masa Depan",
    solution_desc: "Perlindungan AI tingkat tinggi langsung di ponsel Anda. Tanpa server, tanpa kebocoran data.",
    sol_web_name: "Pertahanan Web",
    sol_web_desc: "Penyaringan URL real-time yang menghentikan link berbahaya seketika di browser Anda.",
    sol_msg_name: "Perisai Pesan",
    sol_msg_desc: "NLP di perangkat untuk mendeteksi pola penipuan di SMS dan chat Anda.",
    sol_voice_name: "Penjaga Suara",
    sol_voice_desc: "Analisis panggilan langsung untuk mencegah penipuan suara menggunakan AI on-device.",
    tech_badge: "Teknologi",
    tech_title: "AI Berfokus Privasi",
    tech_desc: "Semua pemrosesan dilakukan 100% di perangkat. Data Anda tidak pernah keluar dari genggaman."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
