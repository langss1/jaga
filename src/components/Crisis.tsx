"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, ShieldAlert, Globe, Activity, Users, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { 
    label: "Phishing Scrutiny", 
    value: "43M+", 
    icon: <Globe className="w-5 h-5 text-slate-900" />,
    color: "bg-emerald-50 text-slate-900" 
  },
  { 
    label: "Global Financial Loss", 
    value: "$12B", 
    icon: <Activity className="w-5 h-5 text-slate-900" />,
    color: "bg-slate-50 text-slate-900" 
  },
  { 
    label: "Data Breaches", 
    value: "90%", 
    icon: <ShieldAlert className="w-5 h-5 text-slate-900" />,
    color: "bg-emerald-50 text-slate-900" 
  }
];

export default function Crisis() {
  return (
    <section id="crisis" className="py-40 px-6 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 text-[10px] font-bold tracking-widest uppercase rounded-full mb-8">
              <AlertCircle className="w-4 h-4" />
              THE GLOBAL CHALLENGE
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
              Cyber-Fraud <br />
              Is <span className="text-emerald-500">Scaling <br /> Globally.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
              Phishing has evolved beyond simple links. Modern attacks use generative AI to manipulate users through SMS, chat, and voice calls.
            </p>

            <div className="p-8 bg-slate-900 rounded-[3rem] text-white space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <Zap className="w-24 h-24 text-emerald-500" />
               </div>
               <h4 className="text-xl font-bold tracking-widest text-emerald-400 uppercase">#EdgeToEdge</h4>
               <p className="text-slate-400 font-medium leading-relaxed">
                  "JAGA is built on the principle of complete privacy. We believe that security shouldn't come at the cost of your personal data."
               </p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-900 text-[10px]">AI</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Built for the next generation of security.</span>
               </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="p-10 rounded-[3.5rem] bg-white border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-emerald-100 hover:border-emerald-500 transition-all duration-700 flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    <h3 className="text-5xl font-black text-slate-900 tracking-tighter group-hover:text-emerald-600 transition-colors">
                      {stat.value}
                    </h3>
                  </div>
                  <div className="w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-500">
                    <span className="group-hover:text-white transition-colors duration-500">
                      {stat.icon}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-50/50 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
