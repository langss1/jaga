"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Technology() {
  const { t } = useLanguage();

  const techFeatures = [
    {
      title: "Edge AI & TFLite",
      subtitle: "Smart Efficiency",
      desc: "Optimasi model AI super ringan yang berjalan lancar di smartphone spesifikasi rendah tanpa lag.",
      img: "/assets/Phising.png",
      color: "emerald"
    },
    {
      title: "100% On-Device",
      subtitle: "Privacy First",
      desc: "Semua data diproses lokal di perangkat Anda. JAGA tidak pernah mengirimkan data pribadi ke cloud.",
      img: "/assets/Privacy.png",
      color: "blue"
    },
    {
      title: "Low Device Optimized",
      subtitle: "ASEAN Connectivity",
      desc: "Hemat baterai dan RAM. Dirancang khusus untuk menjangkau setiap pengguna di seluruh kawasan ASEAN.",
      img: "/assets/AI.png",
      color: "emerald"
    }
  ];

  return (
    <section id="technology" className="py-24 md:py-32 px-6 relative bg-white border-y border-slate-100 overflow-hidden">
      
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
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase rounded-lg">
              {t('tech_badge')}
           </div>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mx-auto max-w-3xl">
             Khawatir Isu Privacy dan Kualitas Perangkat?
           </h2>
           <p className="text-slate-400 text-lg font-bold">Pelajari bagaimana JAGA bekerja</p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {techFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative">
                 <div className={`absolute -inset-4 bg-${feature.color === 'emerald' ? 'emerald' : 'blue'}-500/5 blur-[50px] rounded-full`} />
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl"
                 >
                    <Image 
                      src={feature.img} 
                      alt={feature.title} 
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                 </motion.div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                 <div className="space-y-3">
                    <span className={`text-xs font-black uppercase tracking-[0.3em] ${feature.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}`}>
                      {feature.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
                      {feature.title}
                    </h3>
                 </div>
                 <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                   {feature.desc}
                 </p>
                 <div className="h-1 w-20 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                       initial={{ x: -80 }}
                       whileInView={{ x: 0 }}
                       transition={{ duration: 1, delay: 0.5 }}
                       className={`h-full w-full bg-${feature.color === 'emerald' ? 'emerald' : 'blue'}-500`} 
                    />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
