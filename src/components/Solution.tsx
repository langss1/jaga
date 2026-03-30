"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mic, Globe, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Solution() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    {
      id: "WEB",
      name: t('sol_web_name'),
      icon: <Globe className="w-5 h-5" />,
      desc: t('sol_web_desc'),
      img: "/assets/1.png"
    },
    {
      id: "MSG",
      name: t('sol_msg_name'),
      icon: <MessageSquare className="w-5 h-5" />,
      desc: t('sol_msg_desc'),
      img: "/assets/2.png"
    },
    {
      id: "VC",
      name: t('sol_voice_name'),
      icon: <Mic className="w-5 h-5" />,
      desc: t('sol_voice_desc'),
      img: "/assets/3.png"
    }
  ];

  // Auto-slide for mobile & desktop (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % solutions.length;
      setActiveIndex(nextIndex);
      
      // Auto-scroll on mobile
      if (scrollRef.current && window.innerWidth < 1024) {
        const scrollAmount = window.innerWidth * 0.85 + 32; // card width + gap
        scrollRef.current.scrollTo({
          left: nextIndex * scrollAmount,
          behavior: 'smooth'
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, solutions.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const index = Math.round(scrollRef.current.scrollLeft / (window.innerWidth * 0.85 + 32));
      if (index >= 0 && index < solutions.length && index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="features" className="py-12 md:py-20 px-6 relative bg-white overflow-hidden min-h-fit">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 space-y-2">
           <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none">
            {t('solution_title')}
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            {t('solution_desc')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Mobile-Only Controls */}
          <div className="lg:hidden absolute left-0 top-[35%] -translate-y-1/2 z-20 pointer-events-none w-full flex justify-between px-2">
             <button 
               onClick={() => scroll('left')}
               className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-lg active:scale-90 pointer-events-auto"
             >
                <ChevronLeft className="w-4 h-4 text-slate-600" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 flex items-center justify-center shadow-lg active:scale-90 pointer-events-auto"
             >
                <ChevronRight className="w-4 h-4 text-slate-600" />
             </button>
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0"
          >
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[80vw] md:min-w-[300px] lg:min-w-0 snap-center"
              >
                <div 
                  className={`group relative bg-white rounded-[2.5rem] p-[2px] transition-all duration-700 h-full overflow-hidden ${activeIndex === idx ? 'scale-[1.01]' : 'opacity-40 scale-[0.98]'}`}
                >
                  {/* Border Rotating Segment Animation */}
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                      >
                         <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#10b981_320deg,transparent_360deg)] animate-border-rotate" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-white rounded-[2.5rem] p-6 flex flex-col h-full relative z-10 shadow-sm">
                    {/* Full Mockup Area */}
                    <div className="relative aspect-[3/2] md:aspect-[4/3] rounded-[1.8rem] overflow-hidden bg-[#fafafa] border border-slate-50 mb-6 group-hover:bg-white transition-all">
                       <Image 
                         src={sol.img} 
                         alt={sol.name} 
                         fill 
                         className="object-contain p-2" 
                       />
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      <div className="flex items-center gap-3">
                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 shadow-sm ${activeIndex === idx ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                            {sol.icon}
                         </div>
                         <h3 className={`text-xl font-black tracking-tight transition-colors duration-500 ${activeIndex === idx ? 'text-emerald-600' : 'text-slate-900'}`}>{sol.name}</h3>
                      </div>
                      
                      <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">{sol.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Indicator Dots */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-4">
             {solutions.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-8 bg-emerald-500' : 'w-1.5 bg-slate-200'}`} />
             ))}
          </div>
        </div>

        {/* Development Disclaimer */}
        <div className="mt-8 flex flex-col items-center gap-2 text-center">
           <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 rounded-xl border border-slate-100">
              <Info className="w-3.5 h-3.5 text-emerald-600" />
              <p className="text-[10px] font-bold text-slate-500 tracking-tight">
                *Mockup masih dalam tahap awal pengembangan (Draft/MVP Phase).
              </p>
           </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-border-rotate {
          animation: border-rotate 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
