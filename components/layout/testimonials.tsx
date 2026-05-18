"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Thermometer, Wind, ArrowRight } from "lucide-react";

export default function TechnicalSpecs() {
  const crimson = "#9b2915";
  const aquamarine = "#50a2a7";
  const ochre = "#e9b44c";

  const specs = [
    {
      icon: Zap,
      title: "Kinetic Compression",
      desc: "Zero-distraction fit that mirrors your muscle fiber alignment.",
      stat: "4-Way Stretch"
    },
    {
      icon: Thermometer,
      title: "Thermal Regulation",
      desc: "Advanced micro-ventilation keeps core temperature at optimal levels.",
      stat: "Breathable"
    },
    {
      icon: ShieldCheck,
      title: "Durability Matrix",
      desc: "Reinforced bonded seams that withstand 2x the standard tension.",
      stat: "Pro-Tested"
    },
    {
      icon: Wind,
      title: "Aerodynamic Weave",
      desc: "Proprietary Italian fabric engineered to reduce drag during movement.",
      stat: "Ultra-Light"
    }
  ];

  return (
    <section className="w-full bg-white py-1">
      <div className="max-w-[1800px] mx-auto px-2 md:px-10">
        
        {/* Main Grid Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-black border-[2px] border-black overflow-hidden">
          
          {/* Left Side: The "Legacy Scan" Cell */}
          <div className="relative min-h-[600px] lg:h-auto overflow-hidden group bg-neutral-900">
            
            {/* BLACK SHIRT: High-Velocity Reveal */}
            <motion.div
              initial={{ scale: 1.1, y: 20 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0 flex items-center justify-center p-12"
            >
              <img 
                src="/blackshirt.png" 
                alt="Apex Black Shirt"
                className="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
              />
            </motion.div>

            {/* SCAN GRID OVERLAY */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* RADIANT CRIMSON RADIANCE */}
            <div 
              style={{ background: `radial-gradient(circle at 10% 90%, ${crimson}cc, transparent 60%)` }} 
              className="absolute inset-0 z-20" 
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/10 to-transparent" />

            {/* CONTENT: Tactical Typography */}
            <div className="relative z-30 h-full flex flex-col justify-between p-12">
              <div className="flex justify-between items-start">
                <div style={{ borderColor: ochre }} className="border-l-2 pl-4">
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Asset_ID</p>
                  <p style={{ color: ochre }} className="text-[10px] font-black uppercase tracking-[0.4em]">BLK_ALPHA_26</p>
                </div>
                <div className="text-right">
                   <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">04 // 27 // 2026</p>
                </div>
              </div>

              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-white text-6xl md:text-8xl font-[1000] uppercase italic leading-[0.75] tracking-tighter mb-8"
                >
                  LEGACY <br /> <span style={{ color: crimson }}>FABRIC</span>
                </motion.h3>
                <div className="flex items-center gap-6">
                    <p className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.4em] max-w-xs leading-relaxed">
                        Optimized for peak velocity. <br /> Developed in the Apex Lab.
                    </p>
                    <div className="w-12 h-[1px] bg-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Blueprint Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-black">
            {specs.map((spec, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: aquamarine, x: 8, y: -8 }}
                className="bg-white p-12 flex flex-col justify-between group transition-all duration-300 cursor-crosshair relative overflow-hidden"
              >
                {/* Legacy Watermark */}
                <span className="absolute -right-4 -bottom-4 text-[120px] font-[1000] italic text-neutral-100 opacity-0 group-hover:opacity-20 transition-opacity">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="p-3 bg-neutral-50 rounded-sm group-hover:bg-white/20 transition-colors">
                        <spec.icon size={28} className="text-black group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-right">
                        <p style={{ color: crimson }} className="text-[9px] font-black uppercase tracking-tighter group-hover:text-white mb-1">Status</p>
                        <p className="text-black text-[10px] font-black uppercase tracking-widest group-hover:text-white/80">
                          {spec.stat}
                        </p>
                    </div>
                  </div>

                  <h4 className="text-2xl font-[1000] uppercase italic text-black group-hover:text-white mb-4 tracking-tighter leading-none">
                    {spec.title}
                  </h4>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase leading-relaxed tracking-wider group-hover:text-white/70 max-w-[200px]">
                    {spec.desc}
                  </p>
                </div>
                
                <div className="mt-16 flex items-center gap-3 text-black group-hover:text-white relative z-10">
                    <div className="w-6 h-[1px] bg-black group-hover:bg-white transition-colors" />
                    <span className="text-[9px] font-[1000] uppercase tracking-[0.4em]">SPEC_V5</span>
                    <ArrowRight size={14} style={{ color: ochre }} className="group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}