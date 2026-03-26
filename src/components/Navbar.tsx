"use client";

import { Shield, Globe, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              JAGA<span className="text-emerald-500">.</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 italic">AI Security</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
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
