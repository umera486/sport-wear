"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Users, Trophy, Zap } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "Global Reach",
    desc: "A collective of elite athletes pushing limits across 40 countries.",
    icon: Globe,
    img: "/4_f088686e-ef18-493d-a0be-22a653393a8c.webp" 
  },
  {
    id: "02",
    title: "Absolute Standard",
    desc: "We don't settle for 'good enough.' Every stitch is a commitment.",
    icon: Trophy,
    img: "/5_2.webp"
  },
  {
    id: "03",
    title: "The Collective",
    desc: "Access to private training archives and early-access drop windows.",
    icon: Users,
    img: "/download.jpg"
  },
  {
    id: "04",
    title: "Peak Velocity",
    desc: "Engineered for high-output movement and rapid recovery cycles.",
    icon: Zap,
    img: "/g7.png" // Using one of your gallery images to expand the set
  }
];

export default function Principles() {
  // BRAND PALETTE
  const crimson = "#9b2915";
  const aquamarine = "#50a2a7";
  const ochre = "#e9b44c";
  const sand = "#e4d6a7";

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 border-b border-neutral-100 pb-8 md:pb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.85] md:leading-[0.8] text-black">
              Beyond <br /> <span style={{ color: crimson }}>The Fabric</span>
            </h2>
            <p className="mt-4 md:mt-6 text-neutral-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] leading-relaxed">
              Apex Elite is a philosophy of unrelenting progress.
            </p>
          </div>
          
          <div className="hidden md:block">
             <p 
               style={{ color: sand }} 
               className="text-[9px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] border-r border-neutral-100 pr-4"
             >
               EST. 2026 // APEX
             </p>
          </div>
        </div>

        {/* 2x2 Grid on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
          {principles.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Image Container - Aspect Ratio kept square for consistency */}
              <div className="relative aspect-square overflow-hidden bg-neutral-100 border border-neutral-100 mb-4 md:mb-6 shadow-sm">
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <span 
                    style={{ color: 'white', WebkitTextStroke: `1px ${aquamarine}` }} 
                    className="text-2xl md:text-4xl font-[1000] italic drop-shadow-md"
                  >
                    {p.id}
                  </span>
                </div>
              </div>

              {/* Text Content - Scaled Typography */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-4 md:w-8 h-[2px]" style={{ backgroundColor: aquamarine }} />
                  <h4 className="text-[11px] md:text-lg font-[1000] uppercase italic tracking-tighter text-black leading-tight">
                    {p.title}
                  </h4>
                </div>
                <p className="text-[7px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-normal md:leading-relaxed">
                  {p.desc}
                </p>
                <button 
                  style={{ color: ochre }} 
                  className="flex items-center gap-1 md:gap-2 text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] pt-1 md:pt-2 hover:opacity-70 transition-opacity"
                >
                  Explore <span className="hidden sm:inline">Principle</span> 
                  <ArrowUpRight size={10} strokeWidth={3} className="md:w-3 md:h-3" style={{ color: aquamarine }} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}