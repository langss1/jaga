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
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Global Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-dot-pattern" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/50 blur-[120px] rounded-full -z-20" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                {t('hero_badge')}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900 leading-[0.9]">
              {t('hero_title_1')}<span className="text-emerald-500">.</span><br />
              <span className="text-slate-400 font-light text-5xl md:text-6xl block mt-4">
                {t('hero_subtitle')}
              </span>
            </h1>

            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed">
              {t('hero_desc')}
            </p>

            {/* Prominent Countdown */}
            <div className="grid grid-cols-4 gap-4 mb-12 max-w-md">
               {[
                 { val: timeLeft.days, label: t('countdown_days') },
                 { val: timeLeft.hours, label: t('countdown_hours') },
                 { val: timeLeft.minutes, label: t('countdown_minutes') },
                 { val: timeLeft.seconds, label: t('countdown_seconds') }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center p-4 bg-slate-50 border border-slate-100 rounded-3xl">
                    <span className="text-3xl font-black text-slate-900 tabular-nums">{item.val.toString().padStart(2, '0')}</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.label}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200 group active:scale-95">
                {t('btn_join_community')}
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-100 hover:border-emerald-200 text-slate-600 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95">
                {t('btn_learn_more')}
              </button>
            </div>

            <div className="flex items-center gap-3 py-4 px-6 bg-emerald-50 border border-emerald-100 rounded-2xl w-fit">
               <ShieldCheck className="w-5 h-5 text-emerald-600" />
               <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">{t('hero_hashtag')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Visualizing Protection (Mockup UI) */}
            <div className="relative aspect-square max-w-[500px] mx-auto bg-white rounded-[4rem] border-2 border-slate-50 shadow-2xl p-12 overflow-hidden flex flex-col justify-center items-center gap-12 group">
              <div className="absolute inset-0 bg-dot-pattern opacity-10" />
              
              <div className="relative">
                <div className="w-40 h-40 bg-emerald-100/30 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-20 h-20 text-emerald-600" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-emerald-200 rounded-full -z-10"
                />
              </div>

              <div className="text-center space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                   {t('active')}
                </div>
                <h3 className="text-4xl font-black text-slate-900">{t('scanning')}</h3>
                <p className="text-slate-500 font-medium">{t('analyzing')}</p>
              </div>

              <div className="w-full space-y-3">
                <div className="p-4 bg-slate-900 rounded-2xl flex items-center justify-between text-white shadow-lg">
                   <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-emerald-500" />
                      <span className="text-xs font-bold uppercase tracking-widest">Global Phishing Guard</span>
                   </div>
                   <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center">
                      <span className="text-[18px] font-bold text-emerald-800 tracking-tight">VERIFIED</span>
                      <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Safety Scan</span>
                   </div>
                   <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center">
                      <Globe className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Multi-ASEAN Support</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Alert Bubble */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-4 -right-4 p-6 bg-white rounded-3xl shadow-xl border-2 border-slate-50 max-w-[200px]"
            >
               <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 bg-red-100 rounded-lg">
                     <ShieldAlert className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">ALERT</span>
               </div>
               <p className="text-[11px] font-bold text-slate-700 leading-tight">Phishing attempt detected and blocked instantly.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
