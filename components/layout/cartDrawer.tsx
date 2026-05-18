"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/cartContext";
import { parsePrice } from "@/lib/productActions";
import Link from "next/link"; // Changed from productDataimport Link from "next/link";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => 
    acc + parsePrice(item.price) * item.quantity, 0
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#050505] border-l border-white/10 z-[160] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <span className="text-[8px] tracking-[0.5em] text-[#9b2915] font-bold">SYSTEM_LOG</span>
                <h2 className="text-xl font-extralight tracking-[0.2em] text-white">CART_MANIFEST</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="text-white/30 hover:text-white text-[10px] tracking-widest uppercase font-bold">
                [ Close ]
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-20">
                  <span className="text-[10px] tracking-[1em]">EMPTY_STORAGE</span>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-6 border-b border-white/5 pb-8">
                    <img src={item.img} alt={item.name} className="w-20 h-24 object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/5" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white text-[12px] tracking-[0.1em] font-light uppercase">{item.name}</h3>
                        <p className="text-[#9b2915] text-[10px] font-bold mt-1">{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex border border-white/10 items-center">
                          <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 text-white/50 hover:text-white">-</button>
                          <span className="px-3 text-[10px] text-white font-mono">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 text-white/50 hover:text-white">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-[8px] tracking-widest text-white/20 hover:text-[#9b2915] uppercase transition-colors">Delete</button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="border-t border-white/10 pt-8 mt-auto">
              <div className="flex justify-between items-end text-white mb-8">
                <div className="flex flex-col">
                  <span className="text-[8px] opacity-30 uppercase tracking-[0.4em] mb-1">Asset_Subtotal</span>
                  <span className="text-2xl font-extralight tracking-tighter">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                <button className="w-full bg-white text-black py-6 font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-[#9b2915] hover:text-white transition-all duration-500">
                  Authorize_Checkout_Sequence
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}