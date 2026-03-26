"use client";

import { motion } from "framer-motion";
import { Link, MessageSquare, Mic, ShieldCheck, Globe, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Solution() {
  const { t } = useLanguage();

  const solutions = [
    {
      id: "WEB",
      name: t('sol_web_name'),
      icon: <Globe className="w-10 h-10 text-emerald-600" />,
      desc: t('sol_web_desc'),
      label: "LIVE PROTECTION"
    },
    {
      id: "MSG",
      name: t('sol_msg_name'),
      icon: <MessageSquare className="w-10 h-10 text-emerald-600" />,
      desc: t('sol_msg_desc'),
      label: "NLP ANALYSIS"
    },
    {
      id: "VC",
      name: t('sol_voice_name'),
      icon: <Mic className="w-10 h-10 text-emerald-600" />,
      desc: t('sol_voice_desc'),
      label: "VISHING GUARD"
    }
  ];

  return (
    <section id="features" className="py-40 px-6 relative bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-[10px] tracking-widest uppercase"
          >
            <Shield className="w-3 h-3 fill-emerald-700" />
            {t('solution_badge')}
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">
            {t('solution_title')}
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {t('solution_desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 hover:border-emerald-500 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100 flex flex-col items-center text-center gap-8 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-4 bg-slate-50 rounded-bl-3xl font-black text-[9px] text-slate-400 tracking-widest uppercase">
                  {sol.label}
                </div>
                
                <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-500 shadow-inner">
                  <span className="group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {sol.icon}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{sol.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{sol.desc}</p>
                </div>

                <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                   <Zap className="w-4 h-4 fill-emerald-400" />
                   AI POWERED
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
