"use client";

import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

export default function Teaser() {
  return (
    <section className="py-12 md:py-20 px-6 relative bg-slate-900 overflow-hidden min-h-fit">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-10"
        >
           <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
             Video Teaser JAGA
           </h2>
        </motion.div>

        {/* Video Embed Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group aspect-video max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10"
        >
          <iframe 
            src="https://www.youtube.com/embed/MN_1eEQO6N8" 
            title="JAGA Official Teaser"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
        
        <div className="mt-8 flex justify-center">
           <a 
             href="https://youtu.be/MN_1eEQO6N8" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all font-bold text-xs"
           >
              <Youtube className="w-4 h-4 text-red-500" />
              Tonton di YouTube
           </a>
        </div>
      </div>
    </section>
  );
}
