"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
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
    <section id="development" className="py-12 md:py-20 px-6 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Video Build.mp4 at top - Smaller max-width */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative rounded-[2rem] overflow-hidden shadow-xl border-2 border-slate-50 mb-8 aspect-video max-w-xl mx-auto"
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
        </motion.div>

        {/* 2. Countdown - Tighter design */}
        <div className="grid grid-cols-4 gap-3 mb-10 max-w-md mx-auto">
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
               className="flex flex-col items-center p-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm"
             >
                <span className="text-2xl font-black text-slate-900 tabular-nums">
                  {item.val.toString().padStart(2, '0')}
                </span>
                <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
             </motion.div>
           ))}
        </div>

        {/* 3. Title & Desc - Reduced margins */}
        <div className="text-center mb-10">
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-tight"
           >
             {t('dev_title')}
           </motion.h2>
           <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed italic opacity-80">
             "{t('dev_desc')}"
           </p>
        </div>

        {/* 4. Horizontal Stepper - Wider layout */}
        <div className="max-w-5xl mx-auto mt-12 mb-8 px-8">
           <div className="relative">
              {/* Line Background Path (The whole length) */}
              <div className="absolute top-[20px] md:top-[24px] left-[5%] right-[5%] h-[2px] bg-slate-100 z-0" />
              
              {/* Active Green Path (Completed portion) */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '45%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="absolute top-[20px] md:top-[24px] left-[5%] h-[2px] bg-emerald-500 z-0 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
              />

              <div className="flex justify-between items-start relative z-10 px-4">
                {steps.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-col items-center gap-4 flex-1 relative"
                  >
                    {/* Circle Indicator */}
                    <div className="relative z-10">
                        {item.status === 'completed' ? (
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
                            <Check className="w-5 h-5 md:w-6 md:h-6 text-white stroke-[4]" />
                          </div>
                        ) : (
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border-2 bg-white transition-all ${item.status === 'on-progress' ? 'border-emerald-500 scale-110' : 'border-slate-100'}`}>
                            {item.status === 'on-progress' ? (
                              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                            ) : (
                              <div className="w-2.5 h-2.5 bg-slate-100 rounded-full" />
                            )}
                          </div>
                        )}
                    </div>

                    {/* Label */}
                    <div className="text-center px-1">
                        <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-tight ${item.status === 'pending' ? 'text-slate-300' : 'text-slate-900'}`}>
                          {item.label}
                        </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
