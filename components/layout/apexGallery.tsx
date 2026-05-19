"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, ChevronLeft, ChevronRight, Target, Cpu } from "lucide-react";

const PRODUCT_DATA = {
  SHIRTS: [
    { id: "S1", name: "VORTEX-14", price: "$140", quality: "CORE RIPSTOP", img: "/g1.png" },
    { id: "S2", name: "KINETIC ALPHA", price: "$120", quality: "CARBON WEAVE", img: "/g2.png" },
    { id: "S3", name: "THERMAL NODE", price: "$165", quality: "HEAT-SYNC", img: "/g3.png" },
    { id: "S4", name: "APEX TITAN", price: "$155", quality: "MIL-SPEC", img: "/g4.png" },
    { id: "S5", name: "OZONE BREAKER", price: "$130", quality: "AERO-FIBER", img: "/g5.png" },
    { id: "S6", name: "NEO-STRIKE", price: "$145", quality: "BIO-ALIGN", img: "/g6.png" },
    { id: "S7", name: "LEGACY PRIME", price: "$190", quality: "ITALIAN RAW", img: "/g7.png" },
  ],
  TROUSERS: [{ id: "T1", name: "NODE PANTS", price: "$180", quality: "FLEX-GEAR", img: "/t1.png" }],
  JACKETS: [{ id: "J1", name: "CORE SHELL", price: "$290", quality: "STORM-PROOF", img: "/j1.png" }],
  SHOES: [{ id: "H1", name: "APEX GLIDE", price: "$210", quality: "KINETIC SOLE", img: "/h1.png" }],
};

export default function ApexCommandGallery() {
  const [activeCat, setActiveCat] = useState("SHIRTS");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const crimson = "#9b2915";
  const ochre = "#e9b44c";

  // FIXED: Explicitly casting activeCat as keyof typeof PRODUCT_DATA to bypass TS index error
  const currentItems = useMemo(() => {
    const categoryKey = activeCat as keyof typeof PRODUCT_DATA;
    return PRODUCT_DATA[categoryKey] || [];
  }, [activeCat]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-10 lg:py-16 overflow-hidden">
      
      {/* 1. CATEGORY NAV */}
      <nav className="relative z-30 max-w-[1800px] mx-auto px-6 lg:px-10 mb-8 lg:mb-16 flex items-center justify-between border-b border-white/10 pb-6 lg:pb-8">
        <div className="flex gap-8 lg:gap-16 overflow-x-auto no-scrollbar scroll-smooth">
          {Object.keys(PRODUCT_DATA).map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCat(cat)} 
              className="relative py-2 group flex-shrink-0"
            >
              <span className={`text-[11px] lg:text-sm font-black tracking-[0.4em] lg:tracking-[0.6em] uppercase transition-all duration-300 ${activeCat === cat ? "text-white opacity-100 scale-110" : "text-white/40 hover:text-white/70"}`}>
                {cat}
              </span>
              {activeCat === cat && (
                <motion.div 
                  layoutId="activeLaser" 
                  className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_0_15px_#9b2915]" 
                  style={{ backgroundColor: crimson }} 
                />
              )}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-[#e9b44c]">
          <Target size={14} />
          <span>LIVE_STREAM_ACTIVE</span>
        </div>
      </nav>

      {/* 2. THE KINETIC STREAM / GRID */}
      <div className="relative group/stream">
        
        {/* DESKTOP NAV BUTTONS */}
        <button 
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-40 p-6 bg-black/80 border border-white/10 hover:border-white transition-all text-white/50 hover:text-white backdrop-blur-md"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        <button 
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-40 p-6 bg-black/80 border border-white/10 hover:border-white transition-all text-white/50 hover:text-white backdrop-blur-md"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>

        {/* IMAGE CONTAINER: Grid on Mobile, Flex on Desktop */}
        <div 
          ref={scrollRef}
          className="grid grid-cols-2 lg:flex lg:flex-row gap-2 lg:gap-4 overflow-x-hidden lg:overflow-x-hidden px-4 lg:px-24 select-none"
        >
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative w-full lg:min-w-[450px] h-[35vh] lg:h-[70vh] flex-shrink-0 cursor-none group overflow-hidden border border-white/5 lg:border-x"
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
                alt={item.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 lg:bottom-12 left-4 lg:left-12">
                <p className="text-[7px] lg:text-[10px] font-black tracking-[0.3em] lg:tracking-[0.5em] text-[#e9b44c] mb-1 lg:mb-2">{item.id}</p>
                <h3 className="text-xl lg:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. FOCUS MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-6 lg:p-12 overflow-y-auto"
          >
            <div className="relative w-full max-w-[1600px] flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              
              <div className="relative h-[40vh] lg:h-[75vh] aspect-[4/5] bg-neutral-900 shadow-[0_0_80px_rgba(155,41,21,0.2)]">
                <img src={selectedItem.img} className="w-full h-full object-cover" alt={selectedItem.name} />
                <div className="absolute top-6 left-6 lg:top-10 lg:left-10 p-3 lg:p-5 bg-black/80 border-l-2 border-[#e9b44c]">
                  <span className="text-[8px] lg:text-[10px] font-black tracking-[0.5em] text-[#e9b44c] uppercase">Quality_Metrics</span>
                  <p className="text-[10px] lg:text-sm font-bold uppercase tracking-widest">{selectedItem.quality}</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-4xl lg:text-[120px] font-[1000] italic leading-[0.8] tracking-tighter uppercase mb-8 lg:mb-12">
                  {selectedItem.name}
                </h2>

                <div className="w-full max-w-md flex flex-col gap-6 lg:gap-10">
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-4 lg:pb-6">
                    <span className="text-[9px] lg:text-[11px] font-black tracking-[0.6em] text-white/30 uppercase">Unit_Price</span>
                    <span className="text-4xl lg:text-6xl font-[1000] italic" style={{ color: crimson }}>{selectedItem.price}</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {['S', 'M', 'L', 'XL'].map(s => (
                      <button key={s} className="py-3 lg:py-5 border border-white/10 hover:bg-white hover:text-black text-[10px] lg:text-[11px] font-black transition-all">
                        {s}
                      </button>
                    ))}
                  </div>

                  <button className="w-full py-6 lg:py-8 bg-[#9b2915] text-white flex items-center justify-center gap-4 lg:gap-6 group relative overflow-hidden">
                    <span className="relative z-10 text-[10px] lg:text-[12px] font-black tracking-[0.5em] lg:tracking-[0.8em] uppercase flex items-center gap-3">
                      <ShoppingCart size={18} /> Add_To_Archive
                    </span>
                    <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </div>

                <button 
                  onClick={() => setSelectedItem(null)}
                  className="mt-8 lg:mt-10 p-3 lg:p-4 border border-white/10 hover:bg-white hover:text-black transition-all"
                >
                  <X size={28} strokeWidth={1} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="max-w-[1800px] mx-auto px-10 mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between items-center gap-4 opacity-20 text-[8px] lg:text-[10px] font-black tracking-[0.4em] uppercase text-center">
        <div className="flex items-center gap-6 lg:gap-10">
           <div className="flex items-center gap-2">
              <Cpu size={14} /> <span>Buffer_Optimized</span>
           </div>
           <span className="hidden lg:inline">Hardware_Accel: Active</span>
        </div>
        <span>© Apex_Legacy_2026</span>
      </footer>

      <style jsx>{`
        button:hover span { color: black; transition: color 0.3s ease; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </section>
  );
}