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
    nav_solutions: "Solutions",
    nav_crisis: "Crisis",
    nav_arch: "Architecture",
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
    tech_privacy_title: "Worried about Privacy and Device Quality?",
    tech_privacy_desc: "Learn how JAGA works",
    tech_edge_desc: "Low-spec smartphones stay protected with ultra-light AI model optimization.",
    tech_on_device_desc: "Your personal data is processed locally on the device* (Privacy First).",
    tech_low_device_desc: "Save battery and RAM. JAGA runs smoothly on various types of smartphones in ASEAN.",
    tech_footnote: "*Specifically phishing phone numbers and URLs are sent to the cloud for real-time security verification against the phishing database and to all users.",
    news_singapore_title: "phishing losses in Singapore reach US$2,132 per person",
    news_indonesia_title: "Cyber Attacks in Indonesia Increase 25% in 2024",
    news_malaysia_title: "Malaysia Loses RM600 Million to Scams",
    news_philippines_title: "Phishing Attacks Target GCash Users",
    news_asean_2022: "43 million phishing attacks in ASEAN in 2022",
    news_asean_2024: "Nearly 900 million phishing attempts in ASEAN in 2024",
    news_id_loss: "Indonesia's losses due to phishing more than 9 trillion rupiah",
    news_section_title: "Search the latest news about phishing",
    news_section_desc: "Press the following buttons to learn about the latest phishing threat trends in real-time.",
    news_id_card_title: "Latest Phishing News in Indonesia",
    news_id_card_desc: "Learn about the URL scam trends currently viral in WhatsApp groups and SMS.",
    news_asean_card_desc: "Daily reports on cyber attacks in the Southeast Asian region.",
    news_btn_search: "Search News",
    teaser_title: "JAGA Video Teaser",
    teaser_youtube: "Watch on YouTube",
    dev_title: "We are still developing it!",
    dev_desc: "We want to make our products safe, comfortable for everyone to use, privacy and reliability are our guarantees, phishing must be fought.",
    dev_apk_label: "APK Development (Done)",
    dev_ai_label: "Core AI (On Progress)",
    dev_qa_label: "Testing & Quality Assurance",
    story_title: "Message from",
    story_emma: "Emma.",
    story_quote_main: "I worked tirelessly for my parents' medical fund. One bank alert changed everything. I clicked the link, and in minutes, ",
    story_quote_main_2: " into the void of a phishing scam.",
    story_vanished: "my entire life's work vanished",
    story_victim_label: "Phishing Victim",
    story_quote_secondary: "Imagine this happening… not just to me… but to millions. Our families, our countries, our future. We can’t let this continue.",
    story_fictional: "Just a fictional story"
  },
  id: {
    nav_features: "Fitur",
    nav_solutions: "Solusi",
    nav_crisis: "Krisis",
    nav_arch: "Arsitektur",
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
    tech_privacy_title: "Khawatir Isu Privacy dan Kualitas Perangkat?",
    tech_privacy_desc: "Pelajari bagaimana JAGA bekerja",
    tech_edge_desc: "Smartphone spesifikasi rendah tetap terlindungi dengan optimalisasi model AI yang super ringan.",
    tech_on_device_desc: "Data pribadi Anda diproses secara lokal di dalam perangkat* (Privacy First).",
    tech_low_device_desc: "Hemat baterai dan RAM. JAGA berjalan lancar di berbagai tipe smartphone di ASEAN.",
    tech_footnote: "*Khusus nomor telepon dan URL phising dikirim ke cloud untuk verifikasi keamanan real-time terhadap database phising dan ke seluruh pengguna.",
    news_singapore_title: "kerugian Phising di Singapura capai US$2,132 per orang",
    news_indonesia_title: "Serangan Siber di Indonesia Meningkat 25% di Tahun 2024",
    news_malaysia_title: "Malaysia Rugi RM600 Juta Akibat Penipuan",
    news_philippines_title: "Serangan Phishing Targetkan Pengguna GCash",
    news_asean_2022: "43 juta serangan phising di asean pada 2022",
    news_asean_2024: "Hampir 900 juta percobaan phishing di ASEAN pada 2024",
    news_id_loss: "Kerugian Indonesia akibat phising lebih dari 9 triliun rupiah",
    news_section_title: "Cari berita terkini tentang phising",
    news_section_desc: "Tekan tombol berikut untuk mempelajari tren ancaman phising terbaru secara real-time.",
    news_id_card_title: "Berita Phising Terkini di Indonesia",
    news_id_card_desc: "Pelajari tren penipuan URL yang sedang viral di grup WhatsApp dan SMS.",
    news_asean_card_desc: "Laporan harian tentang serangan siber di kawasan Asia Tenggara.",
    news_btn_search: "Cari Berita",
    teaser_title: "Video Teaser JAGA",
    teaser_youtube: "Tonton di YouTube",
    dev_title: "Kami masih mengembangkannya!",
    dev_desc: "Kami ingin membuat produk kami agar aman, nyaman digunakan untuk semua, privacy dan keandalan adalah jaminan kami, phising harus diperangi.",
    dev_apk_label: "Pengembangan APK (Sudah)",
    dev_ai_label: "Core AI (On Progress)",
    dev_qa_label: "Testing & Quality Assurance",
    story_title: "Pesan dari",
    story_emma: "Emma.",
    story_quote_main: "Saya bekerja tanpa lelah untuk biaya pengobatan orang tua saya. Satu notifikasi bank mengubah segalanya. Saya mengklik tautan tersebut, dan dalam hitungan menit, ",
    story_quote_main_2: " ke dalam hampa penipuan phishing.",
    story_vanished: "seluruh tabungan hidup saya lenyap",
    story_victim_label: "Korban Phishing",
    story_quote_secondary: "Bayangkan ini terjadi… bukan hanya pada saya… tapi pada jutaan orang lainnya. Keluarga kita, negara kita, masa depan kita. Kita tidak bisa membiarkan ini terus berlanjut.",
    story_fictional: "Hanya cerita fiksi"
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
