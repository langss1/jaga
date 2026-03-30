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
    hero_title_1: "Jaga.",
    hero_subtitle: "#protect yourself, family, and future",
    hero_hashtag: "#JagaTheFuture",
    hero_desc: "Jaga is an AI to block SMS, web, and even phishing phones on your smartphone, keeping your phone safe from cybercrime threats, specifically phishing which is very detrimental, built with accurate and efficient AI that is simple and accurate.",
    btn_learn_more: "How It Works",
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
    solution_title: "Introducing Jaga",
    solution_desc: "Jaga protects you, your family, and your future from high-risk phishing scams.",
    sol_web_name: "Web Defense",
    sol_web_desc: "Limitless security as you browse the internet. Jaga instantly scans every URL and blocks fake websites trying to steal your bank credentials or personal data before they even load on your device.",
    sol_msg_name: "Message Shield",
    sol_msg_desc: "Smart message protection that detects cunning smishing patterns. Jaga scans incoming messages and filters out malicious links from SMS or chat apps, ensuring you never fall for fake official alerts.",
    sol_voice_name: "Voice Guard",
    sol_voice_desc: "The most advanced AI-based voice defense on your phone. We identify and warn you in real-time of voice fraud attempts (vishing) using social engineering or synthetic voice techniques (Deepfakes).",
    tech_badge: "The Tech",
    tech_title: "Privacy First AI",
    tech_desc: "All processing happens 100% on-device. Your data never leaves your hands.",
    dev_title: "We are still developing it!",
    dev_desc: "We want to make our products safe, comfortable for everyone to use, privacy and reliability are our guarantees, phishing must be fought.",
    dev_apk_label: "APK Development (Done)",
    dev_ai_label: "Core AI (On Progress)",
    dev_qa_label: "Testing & Quality Assurance"
  },
  id: {
    nav_features: "Fitur",
    nav_technology: "Teknologi",
    nav_community: "Mulai Sekarang",
    launch_info: "Segera Hadir",
    hero_badge: "Edisi Global: Perlindungan Phishing AI",
    hero_title_1: "Jaga.",
    hero_subtitle: "#protect yourself, family, and future",
    hero_hashtag: "#JagaMasaDepan",
    hero_desc: "Jaga adalah AI untuk memblokir sms, web, bahkan telepon phising di ponselmu, menjadikan ponselmu aman dari ancaman kejahatan siber yaitu phising yang sangat merugikan dibuat dengan akurat dan AI yang efisien yang sederhana dan akurat.",
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
    solution_title: "Memperkenalkan Jaga",
    solution_desc: "Jaga Melindungi kamu, keluargamu, dan masa depan mu dari phising yang merugikan.",
    sol_web_name: "Pertahanan Web",
    sol_web_desc: "Keamanan tanpa batas saat Anda menelusuri internet. Jaga secara instan memindai setiap URL dan memblokir situs web palsu yang mencoba mencuri kredensial bank atau data pribadi Anda sebelum sempat dimuat di perangkat Anda.",
    sol_msg_name: "Perisai Pesan",
    sol_msg_desc: "Pelindung pesan pintar yang mendeteksi pola smishing yang licik. Jaga memindai pesan masuk dan menyaring tautan berbahaya dari SMS atau chat, memastikan Anda tidak terjebak oleh pesan yang mengaku resmi namun palsu.",
    sol_voice_name: "Penjaga Suara",
    sol_voice_desc: "Pertahanan suara berbasis AI tercanggih di ponsel Anda. Kami mengidentifikasi dan memperingatkan secara real-time upaya penipuan melalui panggilan telepon (vishing) yang menggunakan rekayasa sosial atau teknik suara buatan (Deepfake).",
    tech_badge: "Teknologi",
    tech_title: "AI Berfokus Privasi",
    tech_desc: "Semua pemrosesan dilakukan 100% di perangkat. Data Anda tidak pernah keluar dari genggaman.",
    dev_title: "Kami masih mengembangkannya!",
    dev_desc: "Kami ingin membuat produk kami agar aman, nyaman digunakan untuk semua, privacy dan keandalan adalah jaminan kami, phising harus diperangi.",
    dev_apk_label: "Pengembangan APK (Sudah)",
    dev_ai_label: "Core AI (On Progress)",
    dev_qa_label: "Testing & Quality Assurance"
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
