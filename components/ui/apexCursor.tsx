"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Shirt } from "lucide-react";

export default function ApexCursor() {
  const [cursorColor, setCursorColor] = useState("#9b2915"); // Default Crimson
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring physics for the "trailing" effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const edgeX = useSpring(mouseX, springConfig);
  const edgeY = useSpring(mouseY, springConfig);

  // BRAND PALETTE
  const colors = ["#9b2915", "#50a2a7", "#e9b44c", "#e4d6a7"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // CRAZY LOGIC: Change color based on screen position
      // Moving to the right makes it more "Aquamarine", moving down makes it "Ochre"
      const colorIndex = Math.floor((e.clientX / window.innerWidth) * colors.length);
      setCursorColor(colors[colorIndex % colors.length]);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: edgeX,
        y: edgeY,
        pointerEvents: "none",
        zIndex: 9999,
        display: isVisible ? "block" : "none",
      }}
      className="hidden lg:block" // Hide on mobile for better UX
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [0, 10, -10, 0], // Subtle "swaying" animation
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 2, ease: "linear" }
        }}
        className="relative flex items-center justify-center"
      >
        {/* The Shirt Icon */}
        <Shirt 
          size={48} 
          strokeWidth={1.5}
          style={{ 
            color: cursorColor, 
            fill: `${cursorColor}20`, // 20% opacity fill
            filter: `drop-shadow(0px 0px 15px ${cursorColor}80)` 
          }}
          className="transition-colors duration-300"
        />

        {/* Speed Trails */}
        <motion.div 
          animate={{ opacity: [0.5, 0], scale: [1, 1.5] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ backgroundColor: cursorColor }}
          className="absolute inset-0 rounded-full blur-xl -z-10"
        />
        
        {/* Cursor Label */}
        <span 
          style={{ color: cursorColor }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-[0.3em] whitespace-nowrap"
        >
          Apex Mode
        </span>
      </motion.div>
    </motion.div>
  );
}