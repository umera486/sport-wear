'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BestSellers() {
  const [activeId, setActiveId] = useState<number | null>(1)
  const [isMobile, setIsMobile] = useState(false)

  // BRAND PALETTE
  const crimson = "#9b2915";
  const aquamarine = "#50a2a7";
  const ochre = "#e9b44c";
  const sand = "#e4d6a7";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const products = [
    {
      id: 1,
      name: 'APEX PRO LEGGINGS',
      price: '$120',
      image: '/women-product.png.jpg',
      tag: '01 / ELITE SERIES'
    },
    {
      id: 2,
      name: 'TRAINING TANK',
      price: '$85',
      image: '/men-product.png.jpg',
      tag: '02 / PERFORMANCE'
    },
    {
      id: 3,
      name: 'RUNNER SHORTS',
      price: '$95',
      image: '/women-product.png.jpg',
      tag: '03 / AERODYNAMIC'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white text-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Editorial Header */}
        <div className="relative mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ color: aquamarine }} 
            className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4 block"
          >
            Selected Pieces
          </motion.span>
          <h2 
            style={{ color: sand }} 
            className="text-[18vw] lg:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase italic opacity-30 absolute -top-6 md:-top-10 -left-2 md:-left-4 pointer-events-none select-none"
          >
            FAVORITES
          </h2>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase relative z-10 italic leading-none">
            Best <span style={{ color: crimson }}>Sellers</span>
          </h2>
        </div>

        {/* Asymmetric Product Display */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch">
          
          {/* List View (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col border-t border-neutral-100 order-2 lg:order-1">
            {products.map((product) => (
              <button
                key={product.id}
                onMouseEnter={() => !isMobile && setActiveId(product.id)}
                onClick={() => setActiveId(product.id)}
                className={`group py-8 md:py-12 border-b border-neutral-100 flex justify-between items-center transition-all duration-500 text-left outline-none ${
                  activeId === product.id ? 'opacity-100' : 'lg:opacity-30'
                }`}
              >
                <div className="max-w-[70%]">
                  <span style={{ color: ochre }} className="text-[9px] md:text-[10px] font-bold tracking-widest block mb-2">
                    {product.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter group-hover:italic transition-all leading-none">
                    {product.name}
                  </h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg md:text-xl font-light mb-2">{product.price}</span>
                  <div 
                    style={{ 
                        backgroundColor: activeId === product.id ? crimson : 'transparent',
                        borderColor: activeId === product.id ? crimson : '#e5e5e5' 
                    }}
                    className="w-8 h-8 md:w-10 md:h-10 border rounded-full flex items-center justify-center transition-all duration-500"
                  >
                    <Plus 
                      size={18}
                      style={{ color: activeId === product.id ? 'white' : 'black' }}
                      className={`transition-transform duration-500 ${activeId === product.id ? 'rotate-45' : ''}`} 
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Image Showcase (Right) */}
          <div className="w-full lg:w-2/3 relative aspect-[4/5] md:aspect-video lg:aspect-[16/9] bg-[#f7f7f7] overflow-hidden group border border-neutral-100 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {products.map((product) => (
                activeId === product.id && (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    
                    {/* Floating Detail Link */}
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20">
                      <Link href={`/product/${product.id}`}>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{ backgroundColor: 'white' }}
                          className="text-black h-14 w-14 md:h-20 md:w-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl hover:bg-black group/btn"
                        >
                          <ArrowUpRight 
                            size={24} 
                            md-size={32}
                            className="transition-colors group-hover/btn:text-white" 
                            style={{ color: crimson }} 
                          />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Corner Metadata Label */}
            <div className="absolute top-0 right-0 p-4 md:p-8 bg-white/10 backdrop-blur-md border-l border-b border-white/20 z-30 pointer-events-none">
              <p style={{ color: sand }} className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase leading-none">
                Apex Archive <br className="md:hidden" /> ©2026
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Infinite Text Ribbon */}
        <div className="mt-16 md:mt-24 border-y border-neutral-100 py-6 md:py-10 overflow-hidden flex whitespace-nowrap bg-neutral-50/50">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-10 md:gap-20 text-[12vw] md:text-[10vw] font-black uppercase italic opacity-10 select-none"
            style={{ color: crimson }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i}>Elite Performance</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}