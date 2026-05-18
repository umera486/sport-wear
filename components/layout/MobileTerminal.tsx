"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { NAV_DATA } from "@/lib/navConfig";
import Link from "next/link";
import { ChevronRight, Zap, Activity, Search, ShoppingBag } from "lucide-react"; // Imported ShoppingBag
import { useCart } from "@/app/context/cartContext"; // Imported useCart for integration

export default function MobileTerminal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const { cart, setIsCartOpen } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const crimson = "#9b2915";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-black z-[105] flex flex-col pt-32 px-6 overflow-y-auto pb-10"
    >
      {/* 1. MOBILE SEARCH INPUT & QUICK CART */}
      <div className="flex items-center gap-4 mb-12 relative z-10 w-full">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="flex items-center gap-4 border-b border-white/10 py-4 focus-within:border-[#9b2915] transition-colors">
            <Search size={18} className="text-white/20" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH_SYSTEM..."
              className="bg-transparent text-white uppercase tracking-[0.3em] text-sm w-full outline-none placeholder:text-white/10"
            />
          </div>
          <p className="text-[7px] text-white/20 tracking-[0.4em] mt-2 uppercase">Input_Command_Required</p>
        </form>

        {/* CART TRIGGER WITHIN TERMINAL MENU */}
        <button 
          onClick={() => {
            setIsCartOpen(true);
            onClose();
          }}
          className="relative text-white/40 hover:text-white p-4 border border-white/10 rounded-none flex items-center justify-center mt-[-12px]"
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span 
              className="absolute top-2 right-2 text-[9px] font-black"
              style={{ color: crimson }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* BACKGROUND DECAL */}
      <div className="fixed top-20 right-0 opacity-[0.03] pointer-events-none">
        <h2 className="text-[30vw] font-black italic rotate-90 origin-top-right">APEX</h2>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        {Object.keys(NAV_DATA).map((key) => (
          <div key={key} className="border-b border-white/5 pb-4">
            <button
              onClick={() => setExpandedSection(expandedSection === key ? null : key)}
              className="flex items-center justify-between w-full"
            >
              <span className={`text-4xl font-[1000] uppercase italic tracking-tighter transition-colors ${expandedSection === key ? "text-[#9b2915]" : "text-white"}`}>
                {key}
              </span>
              <ChevronRight 
                className={`transition-transform duration-300 ${expandedSection === key ? "rotate-90 text-[#9b2915]" : "text-white/20"}`} 
              />
            </button>

            <motion.div
              initial={false}
              animate={{ height: expandedSection === key ? "auto" : 0, opacity: expandedSection === key ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-6 pt-6 pl-4">
                {NAV_DATA[key].subCategories.map((sub) => (
                  <Link 
                    key={sub.label} 
                    href={sub.slug} 
                    onClick={onClose}
                    className="group"
                  >
                    <div className="flex flex-col">
                      <span className="text-white font-black uppercase text-lg italic group-hover:text-[#9b2915] transition-colors flex items-center gap-2">
                        {sub.label} <Zap size={12} className="opacity-0 group-hover:opacity-100" />
                      </span>
                      <span className="text-white/30 text-[10px] uppercase tracking-widest mt-1">
                        {sub.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

        <Link 
          href="/shop" 
          onClick={onClose}
          className="bg-white text-black p-5 text-center font-black uppercase italic tracking-[0.2em] mt-4 flex items-center justify-center gap-3"
        >
          <Activity size={16} className="text-[#9b2915]" />
          Establish_Link_Now
        </Link>
      </div>

      {/* FOOTER STATS */}
      <div className="mt-auto pt-10 flex justify-between items-center text-[8px] font-black text-white/20 tracking-[0.3em] uppercase">
        <span>System_v2.0_Mobile</span>
        <span>Secure_Connection_Active</span>
      </div>
    </motion.div>
  );
}