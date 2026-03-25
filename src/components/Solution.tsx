"use client";

import { motion } from "framer-motion";
import { Link, MessageSquare, Mic, Search, Database, ShieldCheck } from "lucide-react";

const solutions = [
  {
    id: "WEB",
    name: "Web Phishing",
    icon: <Link className="w-8 h-8 text-emerald-400" />,
    desc: "Menganalisis URL dan seluruh konten situs secara real-time untuk mencegah tautan manipulatif sebelum halaman dimuat.",
    features: ["URL Sanitizer", "Visual Analysis", "Script Sandbox"]
  },
  {
    id: "MSG",
    name: "Message Phishing",
    icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
    desc: "Menggunakan Natural Language Processing (NLP) tingkat lanjut untuk mendeteksi pesan penipuan di SMS dan platform chat.",
    features: ["NLP Processing", "Keyword Pattern", "Context Recognition"]
  },
  {
    id: "VC",
    name: "Voice Phishing",
    icon: <Mic className="w-8 h-8 text-emerald-400" />,
    desc: "Fitur Speech-to-Text real-time untuk mendeteksi indikasi panggilan suara (vishing) yang mencurigakan saat berlangsung.",
    features: ["Live STT", "Social Eng Detection", "Caller Risk Index"]
  }
];

export default function Solution() {
  return (
    <section id="solutions" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 tracking-widest uppercase rounded-md mb-4">
                 Our Capabilities
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Multi-Modal AI Solution</h2>
              <p className="text-navy-200 text-lg mt-4 leading-relaxed">
                 Satu sistem terpadu untuk mendeteksi berbagai jenis serangan phishing melalui berbagai saluran komunikasi digital secara bersamaan.
              </p>
           </div>
           
           <div className="hidden md:flex gap-4">
              <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-center">
                 <Search className="w-6 h-6 text-white/40 mb-2" />
                 <span className="text-[10px] font-bold uppercase opacity-40 italic">Deep Scan</span>
              </div>
              <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-center">
                 <Database className="w-6 h-6 text-white/40 mb-2" />
                 <span className="text-[10px] font-bold uppercase opacity-40 italic">Local Intelligence</span>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/30 transition-all duration-500"
            >
              <div className="bg-navy-950 p-8 rounded-[22px] h-full flex flex-col justify-between border border-white/5 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-150 rotate-12">
                     {sol.icon}
                 </div>
                 
                 <div className="space-y-6 relative z-10">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-500 group-hover:scale-110">
                       {sol.icon}
                    </div>
                    
                    <div className="space-y-2">
                       <h3 className="text-2xl font-bold group-hover:text-emerald-300 transition-colors uppercase tracking-tight">{sol.name}</h3>
                       <p className="text-navy-200 text-sm leading-relaxed">{sol.desc}</p>
                    </div>
                    
                    <ul className="space-y-2">
                       {sol.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-emerald-400 transition-colors duration-500">
                             <ShieldCheck className="w-3 h-3" />
                             {feat}
                          </li>
                       ))}
                    </ul>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-center">
                    <span className="text-xs font-bold text-white uppercase italic">Active Protection</span>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
