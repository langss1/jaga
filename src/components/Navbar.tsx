"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-48 h-12 group cursor-pointer">
            <Image 
              src="/assets/Logo.png" 
              alt="JAGA Logo" 
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <div className="hidden lg:flex items-center gap-6 mr-2">
            <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">{t('nav_solutions')}</a>
            <a href="#crisis" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">{t('nav_crisis')}</a>
            <a href="#technology" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">{t('nav_arch')}</a>
          </div>

          <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 scale-90">
            <button 
              onClick={() => setLanguage('id')}
              className={`px-3 py-1.5 text-[9px] font-black rounded-lg transition-all ${language === 'id' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}
            >
              ID
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 text-[9px] font-black rounded-lg transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
