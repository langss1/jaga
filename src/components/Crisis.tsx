"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const newsItems = [
  {
    title: "43 juta serangan phising di asean pada 2022",
    link: "https://media.sindonews.com/infografis/graph/24167/negara-di-asia-tenggara-yang-paling-banyak-diserang-phising",
    source: "SindoNews",
    context: "ASEAN has become the #1 target for identity theft."
  },
  {
    title: "900 juta serangan phising di asean pada 2024",
    link: "https://www.kaspersky.com/about/press-releases/kaspersky-reports-nearly-900-million-phishing-attempts-in-2024-as-cyber-threats-increase",
    source: "Kaspersky",
    context: "AI-scams are scaling faster than human defenses."
  },
  {
    title: "Kerugian Indonesia akibat phising lebih dari 9 triliun",
    link: "https://id.investing.com/news/stock-market-news/kerugian-scam-tembus-rp9-triliun-bos-ojk-keluarkan-warning-2918292",
    source: "Investing.com",
    context: "Local wealth is being drained by invisible threats."
  },
  {
    title: "kerugian Phising di Singapura capai US$2.132 per orang",
    link: "https://www.thestar.com.my/news/nation/2025/09/15/interactive-singapore-scam-victims-top-south-east-asia-losses-at-us2132-per-person-malaysia-second",
    source: "The Star",
    context: "Privacy is a critical concern for personal security."
  }
];

export default function Crisis() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % newsItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="crisis" className="py-12 px-6 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main "Urgency" Unit - Tightened for serious look */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Phishing Image - No floating elements */}
          <div className="lg:w-[40%] relative min-h-[250px] lg:min-h-full">
             <Image 
               src="/assets/masalah.jpg" 
               alt="Digital Phishing Threat" 
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-slate-900/5" />
          </div>

          {/* Right: Critical Text - Professional & On-Point */}
          <div className="lg:w-[60%] p-8 md:p-12 flex flex-col justify-center gap-6">
             
             <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-none">
                  Phishing: <span className="text-emerald-500">The Silent Pandemic.</span>
                </h2>
                <p className="text-slate-500 font-bold text-sm md:text-lg leading-relaxed max-w-xl">
                  Traditional defenses are failing. While you read this, AI-driven scams are draining life savings across ASEAN.
                </p>
             </div>

             {/* News Slider - Integrated/Tight UI */}
             <div className="relative pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-2xl relative">
                       <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                         "{newsItems[index].title}"
                       </h3>
                       <div className="flex items-center justify-between">
                          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
                            Source: {newsItems[index].source}
                          </span>
                          <a 
                            href={newsItems[index].link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors"
                          >
                            Source Link
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                       </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Micro Navigation - Minimalist */}
                <div className="flex items-center justify-between mt-6">
                   <div className="flex gap-2">
                      {newsItems.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`h-1 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-emerald-500' : 'w-1 bg-slate-200 hover:bg-slate-300'}`}
                        />
                      ))}
                   </div>
                   <div className="flex gap-2">
                      <button 
                         onClick={prevSlide}
                         className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                      >
                         <ChevronLeft className="w-5 h-5 text-slate-600" />
                      </button>
                      <button 
                         onClick={nextSlide}
                         className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                      >
                         <ChevronRight className="w-5 h-5 text-slate-600" />
                      </button>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
