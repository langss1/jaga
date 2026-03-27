"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Zap, Heart, MessageSquare, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-04-14T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Global Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-dot-pattern" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/50 blur-[120px] rounded-full -z-20" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-slate-900 leading-[0.8]">
              {t('hero_title_1')}<span className="text-emerald-500">.</span><br />
              <span className="text-slate-400 font-light text-5xl md:text-7xl block mt-4 tracking-tight">
                {t('hero_subtitle')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl leading-relaxed">
              {t('hero_desc')}
            </p>

            {/* Prominent Countdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full max-w-2xl">
               {[
                 { val: timeLeft.days, label: t('countdown_days') },
                 { val: timeLeft.hours, label: t('countdown_hours') },
                 { val: timeLeft.minutes, label: t('countdown_minutes') },
                 { val: timeLeft.seconds, label: t('countdown_seconds') }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all group"
                 >
                    <span className="text-5xl md:text-6xl font-black text-slate-900 tabular-nums group-hover:text-emerald-500 transition-colors">
                      {item.val.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{item.label}</span>
                 </motion.div>
               ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 group active:scale-95 text-lg">
                {t('btn_join_community')}
              </button>
              <button className="px-12 py-5 bg-white border-2 border-slate-100 hover:border-emerald-200 text-slate-600 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 text-lg">
                {t('btn_learn_more')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
