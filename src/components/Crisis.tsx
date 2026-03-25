"use client";

import { motion } from "framer-motion";
import { AlertCircle, Users, Activity, Target, ShieldAlert, Globe } from "lucide-react";

const stats = [
  { 
    label: "Phishing di Asia Tenggara", 
    value: "43jt+", 
    icon: <Globe className="w-5 h-5 text-red-400" />,
    color: "from-red-500/10 to-transparent text-red-400" 
  },
  { 
    label: "Kerugian SMS Phishing", 
    value: "Rp 7T", 
    icon: <Activity className="w-5 h-5 text-orange-400" />,
    color: "from-orange-500/10 to-transparent text-orange-400" 
  },
  { 
    label: "Negara Terdampak (ASEAN)", 
    value: "10+", 
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500/10 to-transparent text-blue-400" 
  }
];

const targetGroups = [
  { id: "Lansia", name: "Elderly", icon: "👵", desc: "Kelompok paling rentan terhadap penipuan." },
  { id: "Anak", name: "Child", icon: "🧒", desc: "Sasaran empuk bagi eksploitasi digital." },
  { id: "Masyarakat", name: "Low Income", icon: "💰", desc: "Korban dengan dampak finansial terberat." },
  { id: "Pekerja", name: "Productive", icon: "💼", desc: "Target phishing yang mengincar data bisnis." }
];

export default function Crisis() {
  return (
    <section id="about" className="py-32 px-6 relative bg-navy-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 tracking-widest uppercase rounded-full"
          >
            <ShieldAlert className="w-4 h-4" />
            The Crisis: A Urgent Need
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ancaman Nyata Cyber-Fraud</h2>
          <p className="text-navy-200 text-lg md:max-w-3xl mx-auto">
            Statistik serangan siber di Asia Tenggara terus meningkat secara eksponensial. Phishing bukan lagi sekadar tautan palsu, melainkan ancaman terorganisir yang mengintai setiap detiknya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all hover:bg-emerald-500/5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color} border border-white/5`}>
                  {stat.icon}
                </div>
                <div>
                   <h3 className="text-4xl font-black mb-1 group-hover:scale-105 transition-transform origin-left">{stat.value}</h3>
                   <p className="text-navy-200 font-medium">{stat.label}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] uppercase font-bold tracking-widest opacity-40">
                 Source: ASEAN Cyber Report
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
               <Target className="w-8 h-8 text-emerald-400" />
               Target Kelompok Rentan
             </h3>
             <p className="text-navy-200 text-lg mb-10 leading-relaxed">
               Di Indonesia, serangan phishing yang meniru institusi perbankan menyebabkan kerugian mencapai <span className="text-emerald-400 font-bold underline decoration-wavy decoration-emerald-500/30 underline-offset-4">Rp 7 Triliun</span>. Sasaran utamanya bukanlah mereka yang mengerti teknologi, melainkan mereka yang paling tidak berdaya.
             </p>
             
             <div className="grid grid-cols-2 gap-4">
                {targetGroups.map((group, idx) => (
                   <div key={idx} className="p-4 glass rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-3xl mb-2">{group.icon}</div>
                      <h4 className="font-bold text-white mb-1 tracking-tight">{group.name}</h4>
                      <p className="text-xs text-navy-200">{group.desc}</p>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square bg-gradient-to-tr from-emerald-500/10 to-navy-500/20 rounded-full absolute -inset-10 blur-3xl" />
             <div className="relative glass p-8 rounded-3xl border border-white/10 overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                   <AlertCircle className="w-12 h-12 text-red-400 opacity-20" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gradient">Laporan Kasus Indonesia</h4>
                <div className="space-y-6">
                   <div className="p-4 bg-red-400/5 rounded-xl border border-red-500/10">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-red-400">🚨 HIGH RISK</span>
                         <span className="text-[10px] opacity-40">MARET 2026</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">
                        Serangan phishing berskala besar menargetkan nasabah Bank Nasional melalui SMS "Update Data" manipulatif.
                      </p>
                   </div>
                   <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                      <p className="text-xs italic opacity-60">"Target kami adalah memperkecil angka kerugian hingga 80% dalam 2 tahun ke depan melalui solusi AI on-device."</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
