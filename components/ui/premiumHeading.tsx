'use client'

import { motion, Easing } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PremiumHeadingProps {
  children: React.ReactNode
  variant?: 'luxury' | 'modern' | 'heading' | 'poppins' | 'playfair' | 'space-grotesk'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'glow' | 'typewriter'
  delay?: number
  duration?: number
  className?: string
  gradient?: boolean
  accent?: boolean
  glow?: boolean
}

export default function PremiumHeading({
  children,
  variant = 'luxury',
  size = '4xl',
  weight = 'bold',
  animation = 'slideUp',
  delay = 0,
  duration = 0.8,
  className = '',
  gradient = false,
  accent = false,
  glow = false,
}: PremiumHeadingProps) {
  const fontClasses = {
    luxury: 'font-playfair',
    modern: 'font-space-grotesk',
    heading: 'font-poppins',
    poppins: 'font-poppins',
    playfair: 'font-playfair',
    'space-grotesk': 'font-space-grotesk',
  }

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  }

  const animationVariants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 },
    },
    glow: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: 'easeOut' as Easing,
        },
      },
    },
    typewriter: {
      hidden: { width: 0 },
      visible: { 
        width: 'auto',
        transition: {
          duration: duration * 2,
          delay: delay,
          ease: 'easeOut' as Easing,
        },
      },
    },
  }

  const gradientClasses = gradient ? 'bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent' : ''
  const accentClasses = accent ? 'text-accent' : 'text-neutral'
  const glowClasses = glow ? 'drop-shadow-luxury' : ''

  return (
    <motion.h1
      variants={animationVariants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut' as Easing,
      }}
      className={cn(
        fontClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        gradientClasses,
        accentClasses,
        glowClasses,
        'leading-tight tracking-tight',
        className
      )}
    >
      {children}
    </motion.h1>
  )
}
