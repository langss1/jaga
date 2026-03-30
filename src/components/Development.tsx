"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ShieldCheck, Zap, Clock, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function Development() {
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

  const steps = [
    { label: t('dev_apk_label'), status: "completed" },
    { label: t('dev_ai_label'), status: "on-progress" },
    { label: t('dev_qa_label'), status: "pending" }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Video Build.mp4 at top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 mb-16 aspect-video max-w-2xl mx-auto"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/assets/build.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
        </motion.div>

        {/* 2. Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-2xl mx-auto">
           {[
             { val: timeLeft.days, label: t('countdown_days') },
             { val: timeLeft.hours, label: t('countdown_hours') },
             { val: timeLeft.minutes, label: t('countdown_minutes') },
             { val: timeLeft.seconds, label: t('countdown_seconds') }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col items-center p-6 bg-slate-50 border border-slate-100 rounded-[2.5rem] shadow-sm"
             >
                <span className="text-4xl font-black text-slate-900 tabular-nums">
                  {item.val.toString().padStart(2, '0')}
                </span>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.label}</span>
             </motion.div>
           ))}
        </div>

        {/* 3. Title & Desc */}
        <div className="text-center mb-20">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight"
           >
             {t('dev_title')}
           </motion.h2>
           <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
             "{t('dev_desc')}"
           </p>
        </div>

        {/* 4. Horizontal Stepper (Space Saving) */}
        <div className="max-w-4xl mx-auto relative px-4 py-8">
           {/* Line Background - Adjusted to center of icons */}
           <div className="absolute top-14 md:top-16 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10 rounded-full" />
           {/* Progress Line - Adjusted to center of icons */}
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: '35%' }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute top-14 md:top-16 left-[15%] h-[2px] bg-emerald-500 -z-10 rounded-full"
           />

           <div className="flex justify-between items-start relative">
              {steps.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center gap-6 flex-1 relative"
                >
                   {/* Circle Indicator */}
                   <div className="relative z-10 group">
                      {item.status === 'completed' ? (
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-200 border-4 border-white transition-transform group-hover:scale-110">
                           <Check className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[4]" />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center border-4 bg-white transition-all ${item.status === 'on-progress' ? 'border-emerald-500 scale-110 shadow-xl' : 'border-slate-100'}`}>
                           {item.status === 'on-progress' ? (
                             <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping" />
                           ) : (
                             <div className="w-4 h-4 bg-slate-100 rounded-full" />
                           )}
                        </div>
                      )}
                   </div>

                   {/* Label */}
                   <div className="text-center px-2">
                      <p className={`text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight ${item.status === 'pending' ? 'text-slate-300' : 'text-slate-900'}`}>
                        {item.label}
                      </p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="mt-16 flex justify-center">
           <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 italic">Core AI Protection System</span>
           </div>
        </div>

      </div>
    </section>
  );
}
