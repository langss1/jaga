"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 group cursor-default">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              ASEAN Cyber Security Choice
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            JAGA<span className="text-emerald-500"> — </span> 
            <span className="text-gradient">Real-Time On-Device AI</span> for Phishing Protection.
          </h1>

          <p className="text-lg md:text-xl text-navy-200 mb-10 max-w-xl leading-relaxed">
            Melindungi masyarakat dari ancaman penipuan online langsung dari smartphone Anda, tanpa bergantung pada cloud dan sangat menjaga privasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
              Pelajari Lebih Lanjut
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
              Bergabung dengan Komunitas
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 opacity-60">
             <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Bekerja Real-time</span>
             </div>
             <div className="w-px h-4 bg-white/20" />
             <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Privasi Terjamin</span>
             </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative hidden md:block"
        >
           {/* Abstract AI Graphic */}
           <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-navy-500/20 rounded-3xl animate-pulse" />
              <div className="absolute inset-4 border border-emerald-500/30 rounded-2xl backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl shadow-emerald-500/10">
                 {/* Inner Graphic Elements */}
                 <div className="absolute top-0 left-0 right-0 p-4 bg-white/5 border-b border-white/10 backdrop-blur-md flex justify-between items-center">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 bg-red-400/50 rounded-full" />
                       <div className="w-2.5 h-2.5 bg-yellow-400/50 rounded-full" />
                       <div className="w-2.5 h-2.5 bg-green-400/50 rounded-full" />
                    </div>
                    <span className="text-[10px] uppercase tracking-tighter opacity-50 font-bold">JAGA AI ACTIVE</span>
                 </div>
                 
                 <div className="flex flex-col items-center gap-4 text-center p-8">
                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30 relative">
                       <ShieldCheck className="w-12 h-12 text-emerald-400" />
                       <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400/10" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-xl font-bold">Scanning...</h3>
                       <p className="text-sm text-navy-200">Analyzing real-time interactions</p>
                    </div>
                 </div>
                 
                 {/* Decorative code-like elements */}
                 <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono opacity-40 leading-tight">
                    <div>{`> detecting pattern: URL_PHISH_SUSP...`}</div>
                    <div>{`> model logic: on-device inference SUCCESS`}</div>
                    <div>{`> action: BLOCK_TRAFFIC`}</div>
                 </div>
              </div>
           </div>
           
           {/* Floating badges */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-6 -right-6 p-4 glass rounded-2xl border border-emerald-500/30"
           >
              <span className="text-sm font-bold text-emerald-400">99.9% Success</span>
           </motion.div>
           
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl border border-navy-500/30"
           >
              <span className="text-sm font-bold text-navy-200 tracking-tight">On-Device Edge AI</span>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
