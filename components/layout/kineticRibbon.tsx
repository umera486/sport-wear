"use client";

import { motion } from "framer-motion";
import { Zap, Crown, Star, ShieldCheck } from "lucide-react";

const marqueeItems = [
  { text: "APEX ELITE PERFORMANCE", icon: Zap },
  { text: "ENGINEERED EXCELLENCE", icon: ShieldCheck },
  { text: "LIMITLESS INNOVATION", icon: Crown },
  { text: "ARCHIVE ©2026", icon: Star },
  { text: "GLOBAL COLLECTIVE", icon: Zap },
  { text: "THE STANDARD", icon: ShieldCheck },
];

export default function BrandMarquee() {
  // BRAND PALETTE
  const crimson = "#9b2915";
  const aquamarine = "#50a2a7";
  const ochre = "#e9b44c";
  const sand = "#e4d6a7";

  return (
    <div 
      style={{ backgroundColor: crimson, borderColor: aquamarine }} 
      className="w-full py-6 md:py-10 overflow-hidden border-y-2 flex items-center"
    >
      {/* Container for the infinite scroll */}
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: [0, "-50%"], 
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render the list twice for seamless looping */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center mx-8 md:mx-16 group">
            {/* Icon - Uses Golden Ochre for a premium metallic feel */}
            <item.icon 
              style={{ color: ochre }}
              className="mr-6 md:mr-10 transition-transform duration-700 group-hover:rotate-[360deg]" 
              size={24} 
              strokeWidth={3} 
            />
            
            {/* The Text - Uses Champagne Sand for high-end contrast */}
            <span 
              style={{ color: sand }}
              className="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter transition-colors duration-300 group-hover:text-white"
            >
              {item.text}
            </span>

            {/* Separator Symbol - Aquamarine for technical accent */}
            <span 
              style={{ color: aquamarine }}
              className="ml-8 md:ml-16 opacity-40 text-4xl font-light"
            >
              /
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}