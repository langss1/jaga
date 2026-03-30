"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Newspaper, Globe, ShieldAlert } from "lucide-react";

export default function News() {
  const newsPrompts = [
    {
      title: "Berita Phising Terkini di Indonesia",
      desc: "Pelajari tren penipuan URL yang sedang viral di grup WhatsApp dan SMS.",
      query: "berita phising terkini di Indonesia 2026",
      icon: <AlertCircle className="w-6 h-6" />,
      colorClass: "text-red-500"
    },
    {
      title: "ASEAN Cybersecurity Updates",
      desc: "Laporan harian tentang serangan siber di kawasan Asia Tenggara.",
      query: "phishing attacks in southeast asia recent news",
      icon: <Globe className="w-6 h-6" />,
      colorClass: "text-emerald-500"
    }
  ];

  const handleSearch = (query: string) => {
    const encodedQuery = encodeURIComponent(query);
    const searchUrl = `https://www.google.com/search?q=${encodedQuery}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="news" className="py-24 md:py-32 px-6 relative bg-white overflow-hidden">
      
      {/* Decorative bg lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-100" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-100" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-4"
           >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none">
                 Cari berita terkini<br/>tentang phising
              </h2>
           </motion.div>
           
           <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg md:text-xl font-medium max-w-sm"
           >
              Tekan tombol berikut untuk mempelajari tren ancaman phising terbaru secara real-time.
           </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {newsPrompts.map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <button
                  onClick={() => handleSearch(news.query)}
                  className="w-full text-left bg-slate-50 hover:bg-white border border-slate-100 hover:border-emerald-200 transition-all duration-500 p-8 rounded-[2rem] group shadow-sm hover:shadow-2xl active:scale-[0.98] flex flex-col h-full"
                >
                   <div className="mb-8 flex justify-between items-start">
                      <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                         <span className={`${news.colorClass} group-hover:text-white transition-colors duration-300`}>{news.icon}</span>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                   </div>
                   
                   <div className="flex-grow space-y-4">
                      <h3 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        {news.desc}
                      </p>
                   </div>
                   
                   <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                      <Newspaper className="w-4 h-4" />
                      Cari Berita
                   </div>
                </button>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
