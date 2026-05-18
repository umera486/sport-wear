"use client";

import { motion } from "framer-motion";
import { Heart, Star, Sparkles, ChevronLeft, ChevronRight, ShoppingCart, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/cartContext"; 

const products = [
  {
    id: 1,
    name: "Flex High Waisted Leggings",
    variant: "Forest Green / Vanilla Beige",
    price: 35,
    oldPrice: 50,
    rating: "4.1",
    image: "/4_f088686e-ef18-493d-a0be-22a653393a8c.webp",
  },
  {
    id: 2,
    name: "Weightlifting Club Joggers",
    variant: "Oversized Fit / Black",
    price: 32.40,
    oldPrice: 54,
    rating: "4.7",
    image: "/5_2.webp",
  },
  {
    id: 3,
    name: "Flex Sports Crop Top",
    variant: "Midnight Black",
    price: 28,
    oldPrice: 40,
    rating: "4.5",
    image: "/American Final Front Images-800x865.jpg",
  },
  {
    id: 4,
    name: "Heritage Wash Oversized Tee",
    variant: "Dusk Green",
    price: 28,
    oldPrice: 40,
    rating: "4.4",
    image: "/download.jpg",
  },
];

export default function Collections() {
  const router = useRouter();
  const { addToCart } = useCart();

  const crimson = "#9b2915";
  const aquamarine = "#50a2a7";
  const ochre = "#e9b44c";

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[2px]" style={{ backgroundColor: aquamarine }}></span>
              <span style={{ color: aquamarine }} className="font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Archive ©2026</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-[1000] uppercase tracking-tighter leading-[0.85] md:leading-[0.8] italic text-black">
              Elite <br />
              <span className="text-neutral-200 transition-colors duration-700 hover:text-black">Selections</span>
            </h2>
          </motion.div>

          <div className="hidden md:flex items-center justify-end gap-8">
            <Link
              href="/collections"
              style={{ borderColor: ochre }}
              className="text-black text-[10px] font-black uppercase tracking-[0.3em] border-b-2 pb-1 transition-all hover:opacity-70"
            >
              Full Archive
            </Link>
            <div className="flex gap-0">
              <button className="w-14 h-14 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"><ChevronLeft size={18} /></button>
              <button style={{ backgroundColor: 'black' }} className="w-14 h-14 text-white flex items-center justify-center transition-all"><ChevronRight size={18} style={{ color: ochre }} /></button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] bg-[#F8FAFC] overflow-hidden border border-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110"
                />

                {/* Status Badges */}
                <div className="absolute top-0 left-0 z-20">
                  <div className="bg-black text-white text-[7px] md:text-[8px] font-black tracking-widest px-2 md:px-4 py-1.5 md:py-2 uppercase">
                    Elite Drop
                  </div>
                </div>

                {/* DESKTOP: Hover "Add to Bag" */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out hidden md:block z-30">
                  <button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, img: product.image })}
                    style={{ backgroundColor: 'black' }}
                    className="w-full flex items-center justify-center gap-3 text-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#50a2a7]"
                  >
                    <ShoppingCart size={14} style={{ color: ochre }} />
                    <span>Add to Bag</span>
                  </button>
                </div>

                {/* MOBILE: Quick Action Floating Button */}
                <button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, img: product.image })}
                  className="md:hidden absolute bottom-2 right-2 w-10 h-10 bg-black flex items-center justify-center z-30 active:scale-90 transition-transform shadow-xl"
                >
                  <Plus size={18} style={{ color: ochre }} />
                </button>

                <button className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white border border-neutral-100 flex items-center justify-center transition-all hover:bg-black hover:text-white">
                  <Heart size={12} />
                </button>
              </div>

              {/* Product Meta */}
              <div className="mt-4">
                <h3 className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.05em] text-black">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm md:text-lg font-black text-black">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star size={10} style={{ color: ochre, fill: ochre }} />
                    <span className="text-[9px] font-black">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex justify-center mt-12 md:mt-20 pt-10 border-t border-neutral-100">
          <Link
            href="/collections"
            style={{ backgroundColor: 'black' }}
            className="w-full md:w-auto flex items-center justify-center gap-4 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#50a2a7]"
          >
            <Sparkles size={16} style={{ color: ochre }} />
            Explore Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
}