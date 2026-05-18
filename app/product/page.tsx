"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PRODUCTS = [
  { id: 1, name: "AURORA SHELL", price: "$420", category: "OUTERWEAR", img: "/women-product.png.jpg" },
  { id: 2, name: "PHANTOM TIGHTS", price: "$180", category: "PERFORMANCE", img: "/men-product.png.jpg" },
  { id: 3, name: "CORE VEST", price: "$310", category: "LAYERING", img: "/women-product.png.jpg" },
  { id: 4, name: "VECTOR RUNNER", price: "$250", category: "FOOTWEAR", img: "/men-product.png.jpg" },
  { id: 5, name: "ONYX BASE", price: "$120", category: "ESSENTIALS", img: "/women-product.png.jpg" },
  { id: 6, name: "STORM SHIELD", price: "$550", category: "TACTICAL", img: "/men-product.png.jpg" },
];

export default function ProductArchive() {
  return (
    <div className="bg-black min-h-screen pt-40 pb-32 px-8">
      
      {/* HEADER: MINIMAL & AIRY */}
      <div className="max-w-[1400px] mx-auto mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="text-[9px] tracking-[0.6em] uppercase font-light text-white"
        >
          System / Archive_2026
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-extralight uppercase mt-4 tracking-tighter text-white">
          All_Products
        </h2>
      </div>

      {/* GRID: SMALLER IMAGES (4 COLUMNS) */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
        {PRODUCTS.map((product, i) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group cursor-pointer relative"
            >
              {/* IMAGE STAGE: NO BLACK HOVER */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] border border-white/5 mb-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* CLICK ME SHINE TEXT (Hover Reveal) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[8px] tracking-[0.8em] uppercase font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Click_To_View
                  </span>
                </div>
              </div>

              {/* DETAILS: TECHNICAL & THIN */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <p className="text-[8px] tracking-[0.4em] text-[#9b2915] uppercase font-bold">
                    {product.category}
                  </p>
                  <span className="text-[10px] font-extralight text-white/30 tracking-widest">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-sm font-extralight tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}