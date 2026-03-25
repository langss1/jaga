"use client";

import { Shield, Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-navy-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-8">
           <div className="flex items-center gap-2">
             <div className="p-2 bg-emerald-500/10 rounded-lg">
               <Shield className="w-6 h-6 text-emerald-400" />
             </div>
             <span className="text-2xl font-black italic tracking-tighter">
               JAGA<span className="text-emerald-500">.</span>
             </span>
           </div>
           
           <p className="text-navy-200 text-sm max-w-sm leading-relaxed">
             Joint ASEAN Guard AI (JAGA) adalah platform keamanan siber kolaboratif yang didedikasikan untuk melindungi ekosistem digital Asia Tenggara dari ancaman penipuan modern menggunakan Edge AI.
           </p>
           
           <div className="flex gap-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-navy-950 transition-all cursor-pointer">
                 <Twitter className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-navy-950 transition-all cursor-pointer">
                 <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-navy-950 transition-all cursor-pointer">
                 <Instagram className="w-4 h-4" />
              </div>
           </div>
        </div>
        
        <div className="space-y-6">
           <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 italic">Navigasi</h4>
           <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-navy-200 hover:text-white transition-colors">Tentang JAGA</a></li>
              <li><a href="#solutions" className="text-sm text-navy-200 hover:text-white transition-colors">Solusi AI</a></li>
              <li><a href="#technology" className="text-sm text-navy-200 hover:text-white transition-colors">Arsitektur</a></li>
              <li><a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">Komunitas</a></li>
           </ul>
        </div>
        
        <div className="space-y-6">
           <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 italic">Legal</h4>
           <ul className="space-y-3">
              <li><a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">License Agreement</a></li>
           </ul>
           
           <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Globe className="w-5 h-5 text-emerald-400" />
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-tighter opacity-40">Regional Presence</p>
                 <p className="text-[11px] font-bold tracking-tight text-white/80">Jakarta - Singapore - Bangkok</p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
         <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 italic">© 2026 Joint ASEAN Guard AI. All Rights Reserved.</p>
         <div className="flex gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/50 hover:text-emerald-500 transition-colors cursor-help">Trusted by ASEAN Cyber Agency</span>
         </div>
      </div>
    </footer>
  );
}
