"use client";

import { motion } from "framer-motion";
import { Cpu, Smartphone, Lock, Zap, ServerOff, Infinity } from "lucide-react";

export default function Technology() {
  return (
    <section id="technology" className="py-32 px-6 relative bg-navy-950/80 backdrop-blur-xl border-y border-white/5 overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-500/10 border border-navy-500/20 text-xs font-bold text-navy-200 tracking-widest uppercase rounded-full mb-6">
               The Tech Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Arsitektur Ringan & <span className="text-emerald-500">Privacy-First</span>.</h2>
            
            <div className="space-y-12">
               <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6">
                     <Cpu className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2 tracking-tight">Edge AI & TFLite Optimization</h3>
                     <p className="text-navy-200 text-sm leading-relaxed">
                        Arsitektur ringan yang dioptimalkan khusus menggunakan TensorFlow Lite (TFLite) agar dapat berjalan dengan lancar bahkan pada smartphone spesifikasi rendah (low-end). Menghemat baterai dan data internet secara signifikan.
                     </p>
                  </div>
               </div>

               <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:-rotate-6">
                     <Lock className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2 tracking-tight">On-Device Privacy Engine</h3>
                     <p className="text-navy-200 text-sm leading-relaxed">
                        Perlindungan on-device sepenuhnya. JAGA tidak pernah mengirimkan data pribadi, isi pesan, atau rekaman suara Anda ke server mana pun (cloud-free inference), menjamin privasi mutlak bagi setiap pengguna.
                     </p>
                  </div>
               </div>
               
               <div className="flex gap-4 p-6 glass rounded-2xl border border-white/5 opacity-80 italic text-sm text-navy-200">
                  <span className="text-emerald-500 font-bold shrink-0">Quote:</span>
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
             <div className="relative glass p-10 rounded-[40px] border border-white/10 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent group-hover:via-emerald-400 transition-all duration-1000" />
                
                <div className="flex flex-col gap-10">
                   <div className="flex justify-between items-start">
                      <div className="space-y-1">
                         <h4 className="text-2xl font-black uppercase tracking-tighter">ARCH: JAGA V1.0</h4>
                         <span className="text-[10px] uppercase font-bold text-white/30 tracking-[0.2em]">{`// EDGE INFERENCE MODE`}</span>
                      </div>
                      <Infinity className="w-8 h-8 text-emerald-500/50" />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center space-y-2 group-hover:bg-emerald-500/5 transition-all">
                         <Zap className="w-6 h-6 text-emerald-500 mx-auto" />
                         <div className="text-2xl font-bold tracking-tight">40ms</div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 italic">Latency</div>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center space-y-2 group-hover:bg-blue-500/5 transition-all">
                         <Smartphone className="w-6 h-6 text-blue-500 mx-auto" />
                         <div className="text-2xl font-bold tracking-tight">12MB</div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 italic">RAM Usage</div>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-40">
                         <span>Cloud Dependency</span>
                         <span className="text-red-400">0.0%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full w-0 bg-red-400/50 rounded-full" />
                      </div>
                      
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-40 pt-2">
                         <span>AI Efficiency</span>
                         <span className="text-emerald-400">98.2%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '98.2%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-emerald-500 rounded-full" 
                         />
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3 p-4 bg-navy-950 border border-emerald-500/30 rounded-2xl">
                      <ServerOff className="w-6 h-6 text-emerald-500" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Off-Grid Offline Protection Enabled</span>
                   </div>
                </div>
                
                {/* Decorative circuit lines effect */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
