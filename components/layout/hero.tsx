"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ASSETS = [
  {
    url: "/women-product.png.jpg",
    title: "NEW SEASON",
    subtitle: "STRENGTH IN SILENCE"
  },
  {
    url: "/men-product.png.jpg",
    title: "ELITE CORE",
    subtitle: "PRECISION ENGINEERED"
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ASSETS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] bg-black overflow-hidden flex items-center justify-center">
      
      {/* 1. PERSISTENT DARK VEIL (Prevents the brightness flash) */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

      {/* 2. IMAGE ENGINE */}
      <AnimatePresence mode="alternate">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }} // Smoother, longer fade
          className="absolute inset-0"
        >
          <motion.img
            src={ASSETS[index].url}
            initial={{ scale: 1.1, filter: "brightness(0.7)" }}
            animate={{ scale: 1, filter: "brightness(0.5)" }} // Keep images naturally darker
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 3. MINIMALIST CONTENT */}
      <div className="relative z-20 text-center text-white px-6">
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="block text-[10px] md:text-[12px] tracking-[0.8em] font-light mb-6 uppercase text-white/60">
            {ASSETS[index].subtitle}
          </span>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-extralight tracking-[ -0.05em] uppercase mb-12">
            {ASSETS[index].title}
          </h1>

          <div className="flex justify-center">
           <Link 
  href="/product" 
  className="text-[10px] tracking-[0.5em] uppercase font-extralight border border-white/10 px-12 py-5 hover:bg-white hover:text-black transition-all duration-700"
>
  Explore_Archive
</Link>
          </div>
        </motion.div>
      </div>

      {/* 4. NAVIGATIONAL PROGRESS (Thin & Minimal) */}
      <div className="absolute bottom-12 flex gap-3 z-30">
        {ASSETS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[1px] transition-all duration-1000 ${
              i === index ? 'w-16 bg-white' : 'w-8 bg-white/20'
            }`}
          />
        ))}
      </div>

    </section>
  );
}