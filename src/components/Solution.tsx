"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Info, ShieldCheck, Zap, Lock } from "lucide-react";

export default function Solution() {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('sol_web_name'),
      subtitle: "Secure Browsing",
      desc: t('sol_web_desc'),
      img: "/assets/1.png",
      color: "emerald",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: t('sol_msg_name'),
      subtitle: "Encrypted Shield",
      desc: t('sol_msg_desc'),
      img: "/assets/2.png",
      color: "blue",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: t('sol_voice_name'),
      subtitle: "Real-time Guard",
      desc: t('sol_voice_desc'),
      img: "/assets/3.png",
      color: "emerald",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 px-6 relative bg-white border-y border-slate-100 overflow-hidden">
      
      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-emerald-50/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-blue-50/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24 space-y-4"
        >
           <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 mx-auto max-w-4xl leading-none">
             {t('solution_title')}
           </h2>
           <p className="text-slate-400 text-lg md:text-xl font-bold max-w-2xl mx-auto">{t('solution_desc')}</p>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Image Side - Mockup HP Full */}
              <div className="w-full md:w-1/2 relative flex justify-center">
                 <div className={`absolute -inset-10 bg-${sol.color === 'emerald' ? 'emerald' : 'blue'}-500/5 blur-[80px] rounded-full`} />
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-[320px] aspect-[9/19] rounded-[3.5rem] overflow-hidden border-[1px] border-slate-100 shadow-2xl bg-white ring-8 ring-slate-100/50"
                 >
                    <Image 
                      src={sol.img} 
                      alt={sol.title} 
                      fill
                      className="object-contain p-2"
                    />
                 </motion.div>
              </div>

              {/* Text Side - Enhanced Typography */}
              <div className="w-full md:w-1/2 space-y-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-2">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${sol.color === 'emerald' ? 'bg-emerald-500 shadow-lg shadow-emerald-100' : 'bg-blue-500 shadow-lg shadow-blue-100'}`}>
                          {sol.icon}
                       </div>
                       <span className={`text-xs font-black uppercase tracking-[0.3em] ${sol.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}`}>
                         {sol.subtitle}
                       </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
                      {sol.title}
                    </h3>
                 </div>
                 <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                   {sol.desc}
                 </p>
                 <div className="flex items-center gap-4 pt-4">
                    <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                          className={`h-full ${sol.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`} 
                       />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Live Protection</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32 flex flex-col items-center gap-4 text-center"
        >
           <div className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <Info className="w-5 h-5 text-emerald-600" />
              <p className="text-xs md:text-sm font-bold text-slate-400 tracking-tight italic">
                *Mockup masih dalam tahap awal pengembangan (Draft/MVP Phase).
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
