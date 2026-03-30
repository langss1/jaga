"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, Mail, Fingerprint, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Story() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-[#f7f8fa] relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
           <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Mail className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Confidential Evidence</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 tracking-tighter">
             Message from <span className="text-emerald-500">Emma.</span>
           </h2>
        </div>

        {/* Landscape Card - Message Perspective */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col md:flex-row overflow-hidden"
        >
          
          {/* Left panel: Emma's Profile */}
          <div className="md:w-[30%] bg-slate-900 p-12 flex flex-col items-center justify-center text-center">
             <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-8 border-slate-800 shadow-2xl mb-6 relative group">
                <Image 
                  src="/assets/emma/profil.png" 
                  alt="Emma" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
             </div>
             <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Emma S.</h3>
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-1">Phishing Victim #12401</p>
                <div className="mt-8 pt-8 border-t border-white/10 w-full">
                   <div className="flex gap-1.5 justify-center opacity-20">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />)}
                   </div>
                </div>
             </div>
          </div>

          {/* Right Panel: The Message itself */}
          <div className="md:w-[70%] p-10 md:p-20 flex flex-col justify-center relative bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
             <Quote className="absolute top-12 right-12 w-24 h-24 text-emerald-50 opacity-10 pointer-events-none" />

             <div className="space-y-10 relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-[1.7] tracking-tight">
                  "I worked tirelessly for my parents' medical fund. One bank alert changed everything. I clicked the link, and in minutes, my entire life's work vanished into the void of a phishing scam."
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-12 pt-10 border-t border-slate-100">
                   <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-50 p-2 rounded-2xl shadow-inner relative group rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                      <Image 
                        src="/assets/emma/Link Klik.png" 
                        alt="The Trap" 
                        fill 
                        className="object-cover rounded-xl" 
                      />
                   </div>
                   <div className="space-y-4">
                      <p className="text-sm md:text-base font-bold text-slate-600 leading-relaxed italic">
                        "Imagine this happening… not just to me… but to millions. Our families, our countries, our future. We can’t let this continue."
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-50 w-fit px-3 py-1 rounded-full border border-red-100">
                         <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                         Emergency Awareness Case #43.2M
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </motion.div>
        
        <p className="mt-12 text-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
          Individual stories form a global crisis. JAGA serves as the guard.
        </p>
      </div>

    </section>
  );
}
