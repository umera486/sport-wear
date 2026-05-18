"use client";

import { useSearchParams } from "next/navigation";
import { MASTER_ARCHIVE } from "@/lib/productActions";
import { useCart } from "@/app/context/cartContext";
import { motion } from "framer-motion";
import { Plus, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

// Wrapper to handle useSearchParams in Next.js 16
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const { addToCart } = useCart();

  // Filter logic
  const results = MASTER_ARCHIVE.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6 md:px-12 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <header className="mb-16">
          <Link href="/product" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors mb-8 w-fit group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] tracking-[0.4em] uppercase">Return_To_Archive</span>
          </Link>
          
          <div className="flex flex-col gap-2">
            <span className="text-[#9b2915] text-[10px] font-bold tracking-[0.5em] uppercase">Search_Report</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">
              Query: <span className="text-white/40 italic">"{query}"</span>
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase mt-4">
              Found {results.length} Matching_Assets
            </p>
          </div>
        </header>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {results.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-[#0a0a0a] border border-white/5 overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                      className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2"
                    >
                      <Plus size={14} /> Add_To_Cart
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-white text-sm font-medium uppercase tracking-widest">{product.name}</h3>
                    <p className="text-white/30 text-[9px] tracking-widest uppercase">{product.category}</p>
                  </div>
                  <span className="font-mono text-white/60 text-sm">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center border border-white/5 bg-white/[0.02]">
            <Search size={40} className="mx-auto mb-6 text-white/10" />
            <p className="text-sm tracking-[0.4em] text-white/20 uppercase font-bold">No_Results_In_Sector</p>
            <Link href="/product" className="inline-block mt-8 text-[#9b2915] text-[10px] font-bold tracking-[0.5em] hover:text-white transition-colors">
              REFRESH_ARCHIVE
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Main page component with Suspense boundary (required for useSearchParams)
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen pt-40 text-center uppercase tracking-widest text-white/20">Decrypting_Data...</div>}>
      <SearchContent />
    </Suspense>
  );
}