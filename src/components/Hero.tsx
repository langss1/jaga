"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[12rem] font-black mb-4 tracking-tighter text-slate-900 leading-none"
            >
              Jaga<span className="text-emerald-500">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
               <span className="text-xl md:text-4xl font-black text-emerald-600 tracking-tighter uppercase italic bg-white/50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">
                  {t('hero_subtitle')}
               </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-2xl text-slate-700 mb-20 max-w-4xl leading-relaxed font-semibold"
            >
              {t('hero_desc')}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-6 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-3xl transition-all flex items-center justify-center gap-4 shadow-2xl shadow-slate-300 group active:scale-95 text-xl tracking-tight">
                {t('btn_join_community')}
              </button>
              <button className="px-12 py-6 bg-white/80 backdrop-blur-md border-2 border-slate-200 hover:border-emerald-300 text-slate-700 font-black rounded-3xl transition-all flex items-center justify-center gap-4 active:scale-95 text-xl tracking-tight">
                {t('btn_learn_more')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
         <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
         </div>
      </motion.div>
    </section>
  );
}
