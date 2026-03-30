"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-28 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-64 h-20 group cursor-pointer">
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
          className="flex items-center gap-8"
        >
          <div className="hidden lg:flex items-center gap-8 mr-4">
            <a href="#features" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">Solutions</a>
            <a href="#crisis" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">Crisis</a>
            <a href="#technology" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">Arch</a>
          </div>

          <div className="flex items-center bg-slate-100 rounded-2xl p-1 border border-slate-200">
            <button 
              onClick={() => setLanguage('id')}
              className={`px-4 py-2 text-[10px] font-black rounded-xl transition-all ${language === 'id' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}
            >
              ID
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 text-[10px] font-black rounded-xl transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          <button className="hidden sm:flex px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-emerald-200 group active:scale-95">
            <div className="flex items-center gap-2">
               <Terminal className="w-4 h-4" />
               View Demo
            </div>
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
