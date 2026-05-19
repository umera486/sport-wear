"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Volume2, VolumeX, Pause, Play, Sparkles, ArrowRight } from "lucide-react";

export default function VideoHero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // BRAND PALETTE
  const crimson = "#9b2915";
  const aquamarine = "#50a2a7";
  const ochre = "#e9b44c";
  const sand = "#e4d6a7";

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // FIXED: Added "as const" at the end to force TypeScript to lock the cubic-bezier array type
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  } as const;

  return (
    <section className="w-full bg-white py-2 md:py-6">
      <div className="max-w-[1800px] mx-auto px-4 md:px-10">

        {/* 1. TOP STRIP: THE RECOGNITION BAR */}
        <div 
          style={{ backgroundColor: crimson }} 
          className="text-white mb-1 flex items-center justify-between px-6 md:px-10 py-6 md:py-10 border-b-4 border-[#50a2a7]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex items-center gap-4">
              <Sparkles size={20} style={{ color: ochre }} className="animate-pulse" />
              <h4 className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em]">
                Exclusively For You
              </h4>
            </div>
            <Link href="/recommendations">
              <button className="bg-white text-black px-8 py-3 md:px-12 md:py-5 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#50a2a7] hover:text-white transition-all duration-500 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Unlock Catalog
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-4">
             <span style={{ color: sand }} className="text-[10px] font-black uppercase tracking-widest">Archive 2026</span>
             <ArrowRight size={24} style={{ color: sand }} />
          </div>
        </div>

        {/* 2. THE MAIN STAGE: FULL BLEED VIDEO */}
        <div style={{ backgroundColor: 'black' }} className="relative w-full h-[65vh] md:h-[80vh] lg:h-[900px] overflow-hidden group">
          
          {/* THE ENGINE: Optimized Video Implementation */}
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* THE SHIELD: Cinematic Color Overlay */}
          <div 
            style={{ 
              background: `linear-gradient(75deg, ${crimson} 0%, rgba(155, 41, 21, 0.4) 40%, transparent 100%)` 
            }} 
            className="absolute inset-0 z-10 pointer-events-none" 
          />

          {/* THE CONTENT: Sophisticated Typography */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-20 lg:px-32">
            
            <motion.div {...fadeIn} className="flex items-center gap-4 mb-6 md:mb-10">
               <span className="w-12 md:w-20 h-[3px]" style={{ backgroundColor: aquamarine }} />
               <span style={{ color: sand }} className="text-[10px] md:text-sm font-[1000] uppercase tracking-[0.6em]">
                 The Elite Standard
               </span>
            </motion.div>

            <motion.h1
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-white text-[15vw] lg:text-[12rem] font-[1000] uppercase italic leading-[0.8] tracking-[-0.06em]"
            >
              EVERY<span style={{ color: ochre }}>WEAR</span>
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="mt-8 md:mt-12 text-white text-[11px] md:text-sm lg:text-base font-black uppercase tracking-[0.2em] leading-relaxed max-w-xs md:max-w-lg lg:max-w-2xl"
            >
              Precision-tuned apparel for the relentless. <br className="hidden md:block" />
              <span style={{ color: aquamarine }} className="underline underline-offset-8">Engineered to outlast</span> the absolute standard.
            </motion.p>

            {/* ACTION CENTER */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="mt-12 md:mt-20 flex flex-row gap-0 border-4 border-white/5 p-1 backdrop-blur-xl bg-black/10 self-start"
            >
              <button className="bg-white text-black px-8 md:px-20 py-5 md:py-8 text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#50a2a7] hover:text-white transition-all duration-500 rounded-none border-r border-black/10">
                Women
              </button>
              <button className="bg-transparent text-white px-8 md:px-20 py-5 md:py-8 text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-500 rounded-none">
                Men
              </button>
            </motion.div>
          </div>

          {/* FLOATING SYSTEM CONTROLS */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-30 flex gap-3 md:gap-5">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              style={{ borderColor: sand }}
              className="w-12 h-12 md:w-20 md:h-20 bg-white/10 backdrop-blur-md text-white border flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button 
              onClick={toggleVideo}
              style={{ borderColor: sand }}
              className="w-12 h-12 md:w-20 md:h-20 bg-white/10 backdrop-blur-md text-white border flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          {/* VERTICAL ARCHIVE IDENTIFIER */}
          <div className="hidden sm:block absolute top-12 right-12 z-20">
             <div className="flex flex-col items-center gap-6">
                <p style={{ color: ochre }} className="text-[11px] font-black uppercase tracking-[0.6em] [writing-mode:vertical-lr]">
                  EST. 2026 // APEX COLLECTIVE
                </p>
                <div className="w-[1px] h-32 bg-white/20" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}