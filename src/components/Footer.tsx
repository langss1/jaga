"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { ArrowRight, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-20 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
             <div className="relative w-40 h-12">
               <Image 
                 src="/assets/Logo.png" 
                 alt="JAGA Logo" 
                 fill 
                 className="object-contain"
               />
             </div>
             
             <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-bold tracking-tight">
               Protect yourself, family, and future
             </p>

             <div className="flex flex-col gap-3 pt-4">
                <a 
                  href="https://www.instagram.com/jaga.ai.security?utm_source=qr&igsh=Y2NidTA3b2JhcWhh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-600 transition-all font-bold group"
                >
                   <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                      <Instagram className="w-5 h-5" />
                   </div>
                   <span className="text-sm">@jaga.ai.security</span>
                </a>
                
                <a 
                  href="mailto:protectjaga@gmail.com" 
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-600 transition-all font-bold group"
                >
                   <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                      <Mail className="w-5 h-5" />
                   </div>
                   <span className="text-sm">protectjaga@gmail.com</span>
                </a>
             </div>
          </div>
          
          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">FITUR</h4>
             <ul className="space-y-3">
                <li><a href="#crisis" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-bold">About JAGA</a></li>
                <li><a href="#features" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-bold">Core Solutions</a></li>
                <li><a href="#technology" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-bold">Architecture</a></li>
             </ul>
          </div>
          
          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">COLLABORATE</h4>
             <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 space-y-3">
                <p className="text-xs font-bold text-emerald-800 leading-relaxed">
                   Join our mission to secure the digital future of ASEAN.
                </p>
                <a 
                  href="mailto:protectjaga@gmail.com"
                  className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-2"
                >
                   PARTNER WITH US <ArrowRight className="w-3 h-3" />
                </a>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex justify-start">
           <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
             Jaga all right reserved
           </div>
        </div>
      </div>
    </footer>
  );
}
