"use client";

import { motion } from "framer-motion";
import { Cpu, Smartphone, Lock, Zap, ServerOff, Infinity } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Technology() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="py-32 px-6 relative bg-white border-y border-slate-100 overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-[-10%] w-[30%] h-[30%] bg-blue-50/50 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[30%] h-[30%] bg-emerald-50/50 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 tracking-widest uppercase rounded-lg mb-6">
               {t('tech_badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900">{t('tech_title')}</h2>
            
            <div className="space-y-12">
               <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6">
                     <Cpu className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2 tracking-tight text-slate-800">Edge AI & TFLite Optimization</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">
                        Arsitektur ringan yang dioptimalkan khusus menggunakan TensorFlow Lite (TFLite) agar dapat berjalan dengan lancar bahkan pada smartphone spesifikasi rendah (low-end). Menghemat baterai dan data internet secara signifikan.
                     </p>
                  </div>
               </div>

               <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center transition-all group-hover:scale-110 group-hover:-rotate-6">
                     <Lock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2 tracking-tight text-slate-800">On-Device Privacy Engine</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">
                        Perlindungan on-device sepenuhnya. JAGA tidak pernah mengirimkan data pribadi, isi pesan, atau rekaman suara Anda ke server mana pun (cloud-free inference), menjamin privasi mutlak bagi setiap pengguna.
                     </p>
                  </div>
               </div>
               
               <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-500">
                  <span className="text-emerald-600 font-bold shrink-0">Quote:</span>
                  "Kami membangun JAGA dengan visi siber-demokrasi: di mana keamanan tingkat lanjut harus bisa diakses semua orang tanpa biaya operasional tinggi."
               </div>
            </div>
          </motion.div>

          {/* Graphical Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:relative order-first md:order-last"
          >
             <div className="relative bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent group-hover:via-emerald-400 transition-all duration-1000" />
                
                <div className="flex flex-col gap-10">
                   <div className="flex justify-between items-start">
                      <div className="space-y-1">
                         <h4 className="text-2xl font-bold uppercase tracking-tighter text-slate-900">ARCH: JAGA V1.0</h4>
                         <span className="text-[10px] uppercase font-bold text-slate-300 tracking-[0.2em]">{`// EDGE INFERENCE MODE`}</span>
                      </div>
                      <Infinity className="w-8 h-8 text-emerald-500/20" />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center space-y-2 group-hover:bg-emerald-50 transition-all group-hover:border-emerald-100">
                         <Zap className="w-6 h-6 text-emerald-500 mx-auto" />
                         <div className="text-2xl font-bold tracking-tight text-slate-800">40ms</div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">Latency</div>
                      </div>
                      <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center space-y-2 group-hover:bg-blue-50 transition-all group-hover:border-blue-100">
                         <Smartphone className="w-6 h-6 text-blue-500 mx-auto" />
                         <div className="text-2xl font-bold tracking-tight text-slate-800">12MB</div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">RAM Usage</div>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                         <span>Cloud Dependency</span>
                         <span className="text-red-500">0.0%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full w-0 bg-red-400 rounded-full" />
                      </div>
                      
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 pt-2">
                         <span>AI Efficiency</span>
                         <span className="text-emerald-500">98.2%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '98.2%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" 
                         />
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-2xl">
                      <ServerOff className="w-6 h-6 text-emerald-400" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">Off-Grid Offline Protection Enabled</span>
                   </div>
                </div>
                
                {/* Decorative circuit lines effect */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.4] bg-dot-pattern" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
