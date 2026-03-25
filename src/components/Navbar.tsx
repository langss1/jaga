"use client";

import { Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass bg-navy-950/20 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="p-2 bg-emerald-500/20 rounded-lg">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            JAGA<span className="text-emerald-400">.</span>
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#about" className="text-sm font-medium text-navy-200 hover:text-white transition-colors">Tujuan</a>
          <a href="#solutions" className="text-sm font-medium text-navy-200 hover:text-white transition-colors">Solusi</a>
          <a href="#technology" className="text-sm font-medium text-navy-200 hover:text-white transition-colors">Teknologi</a>
          <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-full transition-all flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Join Community
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
