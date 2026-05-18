"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowLeft, ShoppingBag, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PremiumFooter from "@/components/layout/premiumFooter";
import KineticRibbon from "@/components/layout/kineticRibbon";

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Onyx");

  const product = {
    name: "AURORA SHELL",
    price: "$420.00",
    description: "Architectural precision meets technical resilience. Engineered with a triple-layer membrane for absolute climate control.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Onyx", hex: "#111111" },
      { name: "Slate", hex: "#2A2A2A" },
      { name: "Crimson", hex: "#9b2915" }
    ]
  };

  return (
    <div className="bg-black min-h-screen pt-40 text-white">
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* BACK LINK */}
        <Link href="/product" className="group flex items-center gap-3 mb-12 text-[9px] tracking-[0.5em] uppercase opacity-30 hover:opacity-100 transition-all">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Archive_Access
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
          
          {/* LEFT: SMALLER IMAGE STAGE (5 columns) */}
          <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="lg:col-span-5 aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden max-w-[500px]"
>
  <img 
    src="/women-product.png.jpg" 
    alt={product.name}
    className="w-full h-full object-cover" 
  />
</motion.div>

          {/* RIGHT: CONTENT (7 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[#9b2915] text-[10px] tracking-[0.6em] font-bold mb-6 uppercase">ID_REF_{id}</span>
            <h1 className="text-5xl md:text-6xl font-extralight uppercase tracking-tighter mb-4">{product.name}</h1>
            <p className="text-xl font-thin text-white/40 mb-10 tracking-widest">{product.price}</p>
            
            <p className="text-sm font-extralight leading-relaxed text-white/30 mb-12 max-w-md italic">
              {product.description}
            </p>

            {/* COLOR SELECTION */}
            <div className="mb-10">
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-4 font-bold">Select_Color: {selectedColor}</p>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button 
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border transition-all ${selectedColor === color.name ? "border-white scale-110" : "border-white/10"}`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="mb-16">
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 mb-4 font-bold">Select_Size</p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-[10px] tracking-widest border transition-all ${selectedSize === size ? "bg-white text-black border-white" : "bg-transparent border-white/10 text-white/40 hover:border-white/40"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full max-w-md border border-white/10 py-6 text-[10px] font-extralight uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 flex items-center justify-center gap-4">
              <ShoppingBag size={14} /> Commit_to_Cart
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER ELEMENTS */}
      <KineticRibbon />
      <PremiumFooter />
    </div>
  );
}