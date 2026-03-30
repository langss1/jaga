"use client";

import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

export default function Teaser() {
  return (
    <section className="py-24 px-6 relative bg-slate-900 overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 space-y-4"
        >
           <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 text-[10px] font-black text-emerald-400 tracking-[0.3em] uppercase rounded-full">
              Official Teaser
           </div>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
             Protecting The ASEAN Digital Frontier
           </h2>
           <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
             Lihat bagaimana JAGA mengamankan jutaan orang dari ancaman phising di Asia Tenggara.
           </p>
        </motion.div>

        {/* Video Embed Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group aspect-video max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10"
        >
          <iframe 
            src="https://www.youtube.com/embed/MN_1eEQO6N8" 
            title="JAGA Official Teaser"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Custom Overlay (Optional - removes default YT controls look until click) */}
          <div className="absolute inset-0 bg-slate-900/10 group-hover:opacity-0 transition-opacity pointer-events-none" />
        </motion.div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
           <a 
             href="https://youtu.be/MN_1eEQO6N8" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl transition-all font-bold text-sm"
           >
              <Youtube className="w-5 h-5 text-red-500" />
              Watch on YouTube
           </a>
        </div>
      </div>
    </section>
  );
}
