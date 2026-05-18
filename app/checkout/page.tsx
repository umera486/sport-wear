"use client";

import { useCart } from "@/app/context/cartContext";
import { parsePrice } from "@/lib/productActions";
import { useState, useEffect } from "react";
import { ShieldCheck, Truck, ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

function CheckoutField({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold group-focus-within:text-[#9b2915] transition-colors">
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="bg-white/[0.03] border border-white/10 px-4 py-4 text-base tracking-widest text-white outline-none focus:border-[#9b2915] focus:bg-white/5 transition-all uppercase placeholder:text-white/10 rounded-none" 
      />
    </div>
  );
}

export default function CheckoutPage() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  const subtotal = cart.reduce((acc, item) => 
    acc + parsePrice(item.price) * item.quantity, 0
  );
  const total = subtotal + 25.00;

  return (
    <div className="bg-black min-h-screen pt-24 pb-20 px-4 md:px-12 text-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* MOBILE-FRIENDLY HEADER */}
        <header className="mb-10 md:mb-16 border-b border-white/5 pb-8">
          <Link href="/product" className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-6 w-fit">
            <ArrowLeft size={14} />
            <span className="text-[10px] tracking-[0.2em] uppercase">Return_to_store</span>
          </Link>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase">Checkout</h1>
            <div className="flex items-center gap-2 text-[#9b2915] w-fit">
              <Lock size={12} />
              <span className="text-[9px] tracking-[0.3em] font-bold uppercase">Encrypted_Session</span>
            </div>
          </div>
        </header>

        {/* RESPONSIVE GRID: 1 COL ON MOBILE, 12 COLS ON DESKTOP */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: FORM (ORDER 1 ON MOBILE) */}
          <div className="lg:col-span-7 space-y-16 order-1">
            
            <section className="space-y-8">
              <h2 className="text-xs tracking-[0.4em] text-white font-bold uppercase flex items-center gap-3">
                <span className="text-[#9b2915]">01.</span> Shipping_Logistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CheckoutField label="Full_Name" placeholder="OPERATOR NAME" />
                <CheckoutField label="Email" placeholder="EMAIL@DOMAIN.COM" />
                <div className="md:col-span-2">
                  <CheckoutField label="Address" placeholder="SECTOR / STREET / BUILDING" />
                </div>
              </div>
            </section>
            
            <section className="space-y-8">
              <h2 className="text-xs tracking-[0.4em] text-white font-bold uppercase flex items-center gap-3">
                <span className="text-[#9b2915]">02.</span> Payment_Auth
              </h2>
              <div className="bg-white/[0.02] border border-white/5 p-6 md:p-10 space-y-8">
                <CheckoutField label="Card_Number" placeholder="0000 0000 0000 0000" />
                <div className="grid grid-cols-2 gap-6">
                  <CheckoutField label="Expiry" placeholder="MM/YY" />
                  <CheckoutField label="CVC" placeholder="***" type="password" />
                </div>
              </div>
            </section>

            {/* MOBILE ACTION BUTTON */}
            <Link href="/checkout/success">
              <button className="w-full bg-white text-black py-6 md:py-8 text-xs font-bold uppercase tracking-[0.5em] hover:bg-[#9b2915] hover:text-white transition-all duration-500">
                Finalize_Order
              </button>
            </Link>
          </div>

          {/* RIGHT: SUMMARY (ORDER 2 ON MOBILE - FLOWS BELOW FORM) */}
          <div className="lg:col-span-5 order-2">
            <div className="bg-[#050505] border border-white/10 p-6 md:p-10 lg:sticky lg:top-32">
              <h3 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8 border-b border-white/5 pb-4">Manifest_Summary</h3>
              
              <div className="space-y-6 mb-10">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-xs text-white uppercase tracking-wider">{item.name}</span>
                      <span className="text-[9px] text-white/30 uppercase">Qty: {item.quantity}</span>
                    </div>
                    <span className="text-sm font-mono">${(parsePrice(item.price) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-[10px] text-white/40 uppercase tracking-widest">
                  <span>Logistics</span>
                  <span>$25.00</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-[10px] tracking-[0.4em] text-[#9b2915] font-bold">TOTAL</span>
                  <span className="text-3xl md:text-4xl font-light tracking-tighter">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-8">
                <div className="flex items-center gap-3 text-[9px] tracking-widest text-white/20 uppercase">
                  <ShieldCheck size={14} className="text-[#9b2915]" />
                  <span>Verified Security</span>
                </div>
                <div className="flex items-center gap-3 text-[9px] tracking-widest text-white/20 uppercase">
                  <Truck size={14} className="text-[#9b2915]" />
                  <span>Priority Dispatch</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}