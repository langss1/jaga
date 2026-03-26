"use client";

import { Shield, Twitter, Linkedin, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-24 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
             <div className="flex items-center gap-2">
               <div className="p-2 bg-slate-900 rounded-lg">
                 <Shield className="w-6 h-6 text-white" />
               </div>
               <span className="text-2xl font-semibold tracking-tight text-slate-900">
                 JAGA<span className="text-emerald-500">.</span>
               </span>
             </div>
             
             <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-light">
               {t('footer_community_msg')}
             </p>
             
             <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all cursor-pointer shadow-sm">
                     <Icon className="w-4 h-4" />
                  </div>
                ))}
             </div>
          </div>
          
          <div className="space-y-6">
             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('nav_features')}</h4>
             <ul className="space-y-4">
                <li><a href="#crisis" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">About JAGA</a></li>
                <li><a href="#features" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">Core Solutions</a></li>
                <li><a href="#technology" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">Architecture</a></li>
             </ul>
          </div>
          
          <div className="space-y-6">
             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Collaborate</h4>
             <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-3">
                <p className="text-xs font-medium text-emerald-800 leading-relaxed">
                  Join our mission to secure the digital future of ASEAN.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-2">
                  Partner with us <ArrowRight className="w-3 h-3" />
                </button>
             </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">
             <span>© 2026 Joint ASEAN Guard AI</span>
             <span className="h-1 w-1 bg-slate-200 rounded-full" />
             <span>All Rights Reserved</span>
           </div>
           
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
              <Verified className="w-3.5 h-3.5" />
              <span>Verified by ASEAN Cyber Agency</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight, Verified } from "lucide-react";
