"use client";

import { motion } from "framer-motion";
import { MoveUpRight, ArrowUpLeft, ArrowDownRight, ArrowDownLeft, ShieldCheck, Zap } from "lucide-react";

const tacPoints = [
  // Positions are adjusted: Mobile uses the second set of values for centering
  { id: 1, title: "Precision-Core_V", top: "15%", left: "50%", mTop: "20%", mLeft: "50%", arrow: <MoveUpRight size={14} />, detail: "Thermal_Reg" }, 
  { id: 2, title: "Kinetic_Node", top: "35%", left: "20%", mTop: "35%", mLeft: "30%", arrow: <ArrowUpLeft size={14} />, detail: "Energy_Dist" }, 
  { id: 3, title: "Armor-Matrix", top: "75%", left: "18%", mTop: "70%", mLeft: "32%", arrow: <ArrowDownLeft size={14} />, detail: "Impact_Res" }, 
  { id: 4, title: "Bio-Sync_Sensor", top: "42%", left: "80%", mTop: "42%", mLeft: "70%", arrow: <ArrowUpLeft size={14} />, detail: "Neural_Link" }, 
  { id: 5, title: "Ochre-Seams", top: "82%", left: "75%", mTop: "75%", mLeft: "65%", arrow: <ArrowDownRight size={14} />, detail: "Structural" }
];

export default function ApexSpecOverlay() {
  const crimson = "#9b2915";
  const ochre = "#e9b44c";

  return (
    <section className="w-full bg-black py-10 md:py-20 flex items-center justify-center min-h-screen relative overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none">
        <h2 className="text-[30vw] md:text-[25vw] font-black uppercase leading-none tracking-tighter text-white">APEX</h2>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-6 z-10">
        
        {/* HEADER */}
        <div className="mb-8 md:mb-12 border-l-2 pl-4 md:pl-6" style={{ borderColor: crimson }}>
          <span className="text-[9px] md:text-[10px] tracking-[0.6em] uppercase font-bold text-white/20 mb-2 block">
            Technical_Blueprint / Vol_01
          </span>
          <h1 className="text-white text-4xl md:text-8xl font-extralight uppercase tracking-tighter leading-none">
            SPEC_<span style={{ color: crimson }}>MATRIX</span>
          </h1>
        </div>

        {/* MAIN VISUAL STAGE */}
        <div className="group relative w-full aspect-[3/4] md:aspect-video overflow-hidden border border-white/5 bg-[#050505]">
          
          {/* IMAGE BASE - BIGGER ON MOBILE */}
          <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
            <motion.img 
              src="/redshirt.png" 
              alt="Apex Shirt"
              animate={{ y: [0, -10, 0], rotate: [0, 0.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-contain scale-[1.4] md:scale-125 opacity-90 group-hover:opacity-100 transition-opacity duration-1000" 
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)] pointer-events-none" />
          </div>

          {/* HUD POINTS */}
          {tacPoints.map((point, idx) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // Uses separate positioning logic for mobile to keep them centered
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"
              style={{ 
                top: typeof window !== 'undefined' && window.innerWidth < 768 ? point.mTop : point.top, 
                left: typeof window !== 'undefined' && window.innerWidth < 768 ? point.mLeft : point.left 
              }}
            >
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex flex-col items-center">
                  {/* PULSING NODE */}
                  <motion.div 
                    animate={{ boxShadow: ["0 0 0px rgba(233,180,76,0)", "0 0 15px rgba(233,180,76,0.3)", "0 0 0px rgba(233,180,76,0)"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    style={{ color: ochre }} 
                    className="bg-black/90 p-1 md:p-2 border border-white/10 backdrop-blur-xl rounded-full md:rounded-none"
                  >
                    <div className="hidden md:block">{point.arrow}</div>
                    <div className="block md:hidden w-2 h-2 bg-[#e9b44c] rounded-full shadow-[0_0_10px_#e9b44c]" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" 
                  />
                </div>

                {/* TEXT NODE */}
                <div className="flex flex-col pt-0.5 md:pt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  <span className="text-[10px] md:text-[11px] text-white tracking-[0.1em] md:tracking-[0.2em] font-bold uppercase whitespace-nowrap bg-black/40 px-1 md:px-0">
                    {point.title}
                  </span>
                  <span className="text-[7px] md:text-[8px] text-[#50a2a7] tracking-[0.2em] md:tracking-[0.3em] uppercase font-mono italic bg-black/40 px-1 md:px-0">
                    {point.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* SCAN LINE */}
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20"
          />

          {/* STATUS BAR FOOTER */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md p-4 md:p-6 flex justify-between items-center border-t border-white/5 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="flex gap-6 md:gap-12 items-center">
               <div className="flex flex-col">
                 <span className="text-[7px] md:text-[8px] tracking-[0.4em] text-white/20 uppercase font-bold">Model</span>
                 <span className="text-[10px] md:text-[11px] tracking-widest text-white font-mono">AX-26_R</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[7px] md:text-[8px] tracking-[0.4em] text-white/20 uppercase font-bold">Status</span>
                 <span className="text-[10px] md:text-[11px] tracking-widest text-[#50a2a7] font-mono">STABLE</span>
               </div>
            </div>
            <Zap size={14} className="text-[#e9b44c] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}