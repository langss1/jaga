"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover -z-20 scale-105"
      >
        <source src="/assets/head.mp4" type="video/mp4" />
      </video>
      
      {/* White Overlay for Readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Reduced size for Jaga text as requested */}
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black mb-1 tracking-tighter text-slate-900 leading-none"
            >
              Jaga<span className="text-emerald-500">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6"
            >
               <span className="text-sm md:text-2xl font-black text-emerald-600 tracking-tighter uppercase italic bg-white/50 px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                  {t('hero_subtitle')}
               </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base md:text-xl text-slate-700 mb-10 max-w-3xl leading-relaxed font-bold"
            >
              {t('hero_desc')}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('development')}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 text-base md:text-lg tracking-tight"
              >
                {t('btn_join_community')}
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-slate-200 hover:border-emerald-300 text-slate-700 font-black rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 text-base md:text-lg tracking-tight"
              >
                {t('btn_learn_more')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Arrow Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60"
      >
         <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Scroll</span>
         <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-slate-900" />
      </motion.div>
    </section>
  );
}
