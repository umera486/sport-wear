"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_DATA } from "@/lib/navConfig";

export default function MegaMenu({ activeSection }: { activeSection: string | null }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const currentData = useMemo(() => {
    return activeSection ? NAV_DATA[activeSection] : null;
  }, [activeSection]);

  if (!currentData) return null;

  const crimson = "#9b2915";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-black border-b border-white/5 z-[90] pointer-events-auto"
    >
      <div className="max-w-[1800px] mx-auto grid grid-cols-12 h-[480px]">
        
        {/* LEFT: RESTORED HOVER STYLE */}
        <div className="col-span-4 border-r border-white/5 p-10 flex flex-col gap-2 overflow-y-auto">
          {currentData.subCategories.map((item, idx) => (
            <Link
              key={item.label}
              href={item.slug}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`group px-6 py-4 border-l-2 transition-all duration-200 ${
                hoveredIdx === idx 
                ? "bg-white/5 text-white" 
                : "border-transparent text-white/20 hover:text-white/40"
              }`}
              style={{ 
                borderLeftColor: hoveredIdx === idx ? crimson : "transparent" 
              }}
            >
              <span className="text-2xl font-extralight uppercase tracking-[0.2em]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* RIGHT: THE STAGE */}
        <div className="col-span-8 relative bg-[#050505] overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSection}-${hoveredIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center p-16"
            >
              <img
                src={currentData.subCategories[hoveredIdx].image}
                alt="Preview"
                className="w-full h-full object-contain brightness-75 grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* DESCRIPTION BOX */}
              <div className="absolute bottom-12 right-12 text-right">
                <p className="text-[9px] font-bold tracking-[0.6em] text-[#9b2915] mb-3 uppercase">
                  Technical_Specs
                </p>
                <h4 className="text-white font-extralight uppercase text-xl tracking-widest max-w-xs leading-relaxed">
                  {currentData.subCategories[hoveredIdx].description}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}