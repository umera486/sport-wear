"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Hash, Share2, Video, Globe } from "lucide-react";

export default function PremiumFooter() {
  const crimson = "#9b2915";
  const crimsonDark = "#4a120a"; // Deep crimson for "shadows"
  const ochre = "#e9b44c";

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const footerLinks = [
    { title: "Navigation", links: ["Collections", "Archive", "Story", "Care"] },
    { title: "Technical", links: ["Specs", "Kinetic", "Sizing", "Return"] },
    { title: "Support", links: ["Shipping", "Returns", "Contact", "FAQ"] }
  ];

  return (
    // Removed bg-black, replaced with solid Crimson base
    <footer style={{ backgroundColor: crimsonDark }} className="relative w-full py-24 overflow-hidden border-t border-white/10">
      
      {/* 1. CRIMSON DEPTH LAYER: No black gradients here */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footer.png" 
          alt="Legacy" 
          className="w-full h-full object-cover opacity-[0.2] grayscale brightness-125 contrast-125 pointer-events-none"
        />
        {/* Layered Crimson Gradients for depth without using black */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: `linear-gradient(to bottom, ${crimsonDark}, transparent, ${crimson})` 
          }} 
        />
        <div 
          className="absolute inset-0 opacity-40" 
          style={{ 
            background: `radial-gradient(circle at 50% 50%, ${crimson} 0%, transparent 100%)` 
          }} 
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* TOP: BRANDING */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-7xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-[0.8]">
              APEX<span className="text-white/40">//</span>
            </h1>
            <p style={{ color: ochre }} className="text-[9px] font-black uppercase tracking-[0.8em] mt-4">
              Legacy Infrastructure
            </p>
          </motion.div>

          <div className="flex gap-6">
            {[<Hash size={18} key="h"/>, <Share2 size={18} key="s"/>, <Video size={18} key="v"/>, <Globe size={18} key="g"/>].map((icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ y: -3, color: "white" }}
                className="text-white/40 transition-colors duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* MIDDLE: LINKS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20"
        >
          {footerLinks.map((col, idx) => (
            <div key={idx} className="text-left">
              <h3 className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                {col.title}
              </h3>
              <ul className="space-y-4 list-none p-0">
                {col.links.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-200 group">
                      <span className="group-hover:translate-x-1 transition-transform italic underline-offset-4 group-hover:underline">
                        {link}
                      </span>
                      <ArrowUpRight size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM: STATUS BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-[8px] text-white/40 font-black uppercase tracking-[0.4em]">
              System Archive // 2026.04.27 // Pure Crimson
            </p>
          </div>
          
          <div className="flex gap-8 text-[8px] text-white/20 font-bold uppercase tracking-[0.4em]">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute right-[-2%] bottom-[-5%] pointer-events-none select-none">
        <h2 className="text-[15vw] font-[1000] text-white/[0.05] italic leading-none uppercase">
          Elite
        </h2>
      </div>
    </footer>
  );
}