"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Story() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 px-4"
        >
           <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 tracking-tighter mb-4">
             Message from <span className="text-emerald-500 underline decoration-emerald-200 decoration-4">Emma.</span>
           </h2>
        </motion.div>

        {/* Minimalist Centered Message Design */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-white p-8 md:p-20 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50 text-center"
        >
          {/* Subtle Quote Background Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none"
          >
             <Quote className="w-32 h-32 text-emerald-500" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center gap-6">
             {/* Circular Profile at Top */}
             <motion.div 
                variants={itemVariants}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative ring-8 ring-emerald-50 ring-offset-0"
             >
                <Image 
                  src="/assets/Emma/profil.png" 
                  alt="Emma" 
                  fill 
                  className="object-cover" 
                />
             </motion.div>

             <motion.div variants={itemVariants} className="space-y-4 max-w-2xl">
                <p className="text-xl md:text-3xl font-serif italic text-slate-800 leading-[1.6] tracking-tight">
                  "I worked tirelessly for my parents' medical fund. One bank alert changed everything. I clicked the link, and in minutes, 
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }}
                    whileInView={{ backgroundSize: "100% 100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-no-repeat bg-left px-1 rounded-sm"
                  >
                    my entire life's work vanished
                  </motion.span> 
                  into the void of a phishing scam."
                </p>

                <div className="flex flex-col items-center gap-2">
                   <div className="flex flex-col items-center">
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Emma S.</h3>
                      <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1">Phishing Victim #12401</p>
                   </div>
                </div>
             </motion.div>

             {/* Divider Line */}
             <motion.div 
                variants={itemVariants}
                className="h-[2px] w-12 bg-slate-900 rounded-full" 
             />

             {/* Secondary Message & Evidence */}
             <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4 mt-2 w-full"
             >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  className="w-28 h-28 md:w-36 md:h-36 bg-slate-50 p-2.5 rounded-2xl shadow-lg relative group transition-transform"
                >
                   <Image 
                     src="/assets/Emma/Link Klik.png" 
                     alt="The Trap" 
                     fill 
                     className="object-cover rounded-xl" 
                   />
                   <div className="absolute inset-0 bg-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                
                <div className="text-center md:text-left space-y-4 max-w-sm">
                   <p className="text-sm font-bold text-slate-500 italic leading-relaxed">
                     "Imagine this happening… not just to me… but to millions. Our families, our countries, our future. We can’t let this continue."
                   </p>
                </div>
             </motion.div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 italic"
        >
          Just a fictional story
        </motion.p>

      </div>

    </section>
  );
}
