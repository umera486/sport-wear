"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { ShoppingBag, Search, X } from "lucide-react"; 
import { NAV_DATA } from "@/lib/navConfig"; 
import MegaMenu from "./MegaMenu"; 
import MobileTerminal from "./MobileTerminal"; 
import { useCart } from "@/app/context/cartContext"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const { cart, setIsCartOpen } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const crimson = "#9b2915"; 

  // Tactical shortcut: Close search on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Direct push to our new search route
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery(""); 
    }
  };

  return (
    <nav 
      onMouseLeave={() => setActiveSection(null)} 
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        isScrolled || activeSection || isMobileOpen
          ? "bg-black py-4 border-b border-white/5" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 grid grid-cols-2 lg:grid-cols-3 items-center">
        
        {/* 1. NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-12 justify-start">
          {Object.keys(NAV_DATA).map((key) => (
            <button 
              key={key}
              onMouseEnter={() => setActiveSection(key)} 
              className={`text-[10px] uppercase tracking-[0.5em] transition-all relative py-2 ${
                activeSection === key ? "text-white font-bold" : "text-white/40 font-light hover:text-white"
              }`}
            >
              {key}
              {activeSection === key && (
                <motion.span 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-white" 
                />
              )}
            </button>
          ))}
        </div>

        {/* 2. LOGO ENGINE */}
        <div className="flex flex-col items-start lg:items-center justify-center">
          <Link href="/" className="flex flex-col items-center group">
            <div className="flex items-center gap-3">
              <h1 className="text-xl md:text-2xl font-extralight uppercase tracking-[0.2em] text-white">
                APEX<span className="font-black italic" style={{ color: crimson }}>ELITE</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[7px] tracking-[0.6em] text-white/20 uppercase mt-2 font-light">
              <span className="w-1 h-1 bg-[#00ffd9] rounded-full animate-pulse" />
              System_Online
            </div>
          </Link>
        </div>

        {/* 3. TACTICAL HUD */}
        <div className="flex items-center gap-4 md:gap-10 justify-end">
          <div className="hidden sm:flex items-center gap-6 pr-8 border-r border-white/10">
            
            {/* SEARCH INPUT FIELD */}
            <div className="flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearchSubmit}
                    className="relative mr-4 overflow-hidden"
                  >
                    <input 
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="ENTER_QUERY..."
                      className="bg-transparent border-b border-white/20 text-[10px] tracking-widest text-white w-full outline-none focus:border-white/60 transition-colors uppercase py-1 px-2"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Toggle Search"
              >
                {isSearchOpen ? <X size={14} strokeWidth={1.5} /> : <Search size={16} strokeWidth={1.5} />}
              </button>
            </div>
            
            {/* CART TRIGGER */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative group text-white/30 hover:text-white transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-3 text-[8px] font-bold text-white transition-all duration-300 drop-shadow-[0_0_5px_rgba(155,41,21,0.8)]"
                    style={{ color: crimson }}
                  >
                    {cartCount.toString().padStart(2, '0')}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <Link 
            href="/products"
            className="hidden xl:block text-[10px] text-white/40 hover:text-white border border-white/10 px-6 py-2.5 uppercase tracking-[0.3em] transition-all duration-500 hover:border-white hover:bg-white/5"
          >
            Access_Archive
          </Link>

          {/* MOBILE TERMINAL TRIGGER */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-6 z-[110] relative"
          >
            <motion.span 
              animate={isMobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              className="w-full h-[1px] bg-white block" 
            />
            <motion.span 
              animate={isMobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              className="w-full h-[1px] bg-white block" 
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {activeSection && <MegaMenu activeSection={activeSection} />}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen && (
          <MobileTerminal 
            isOpen={isMobileOpen} 
            onClose={() => setIsMobileOpen(false)} 
          />
        )}
      </AnimatePresence>
    </nav>
  );
}