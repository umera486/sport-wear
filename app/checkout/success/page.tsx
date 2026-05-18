"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Box, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/app/context/cartContext";

export default function SuccessPage() {
  const { cart, removeFromCart } = useCart();

  // Clean up: Clear the cart since the order is "placed"
  useEffect(() => {
    cart.forEach((item) => removeFromCart(item.id));
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="max-w-[600px] w-full border border-white/10 bg-[#050505] p-8 md:p-16 text-center">
        
        {/* Animated Success Icon */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <CheckCircle2 size={80} className="text-[#9b2915]" strokeWidth={1} />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#9b2915]/20 blur-2xl rounded-full"
            />
          </div>
        </motion.div>

        <header className="space-y-4 mb-12">
          <span className="text-[10px] tracking-[0.6em] text-[#9b2915] font-bold uppercase">Transaction_Complete</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter text-white uppercase">Order_Confirmed</h1>
          <p className="text-white/40 text-xs tracking-widest leading-relaxed max-w-[300px] mx-auto">
            YOUR ASSETS HAVE BEEN ALLOCATED AND ARE PREPARING FOR SECTOR DISPATCH.
          </p>
        </header>

        {/* Data readout */}
        <div className="border-y border-white/5 py-8 mb-12 space-y-4">
          <div className="flex justify-between text-[10px] tracking-widest text-white/30 uppercase font-mono">
            <span>Manifest_ID</span>
            <span className="text-white">#APX-9921-00X</span>
          </div>
          <div className="flex justify-between text-[10px] tracking-widest text-white/30 uppercase font-mono">
            <span>Auth_Status</span>
            <span className="text-[#00ffd9]">APPROVED</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/product">
            <button className="w-full bg-white text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#9b2915] hover:text-white transition-all flex items-center justify-center gap-3 group">
              Return_To_Archive
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <button className="w-full border border-white/10 text-white/40 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all flex items-center justify-center gap-3">
            <Download size={14} />
            Download_Invoice_PDF
          </button>
        </div>

        <footer className="mt-12">
          <div className="flex items-center justify-center gap-3 text-[8px] tracking-[0.3em] text-white/10 uppercase">
            <Box size={12} />
            <span>Estimated Delivery: 48-72 Hours</span>
          </div>
        </footer>
      </div>
    </div>
  );
}