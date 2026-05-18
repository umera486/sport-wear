'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LuxuryButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'luxury' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function LuxuryButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  icon,
  iconPosition = 'right',
  ...props
}: LuxuryButtonProps) {
  const baseStyles = 'relative overflow-hidden group inline-flex items-center justify-center font-bold transition-all duration-500 ease-out focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#0B5E48] to-[#52B69A] text-white shadow-luxury hover:shadow-luxury-lg',
    secondary: 'bg-gradient-to-r from-[#168AAD] to-[#184E77] text-white shadow-luxury hover:shadow-luxury-lg',
    accent: 'bg-gradient-to-r from-[#9D0208] to-[#FFBA08] text-white shadow-luxury hover:shadow-luxury-lg',
    luxury: 'bg-gradient-to-r from-[#0B5E48] via-[#52B69A] to-[#168AAD] text-white shadow-luxury-xl hover:shadow-luxury-2xl',
    outline: 'border-2 border-[#0B5E48] text-[#0B5E48] bg-transparent hover:bg-[#0B5E48] hover:text-white'
  }
  
  const sizes = {
    sm: 'px-6 py-2.5 text-sm rounded-lg',
    md: 'px-8 py-3 text-base rounded-xl',
    lg: 'px-10 py-4 text-lg rounded-2xl',
    xl: 'px-12 py-5 text-xl rounded-3xl'
  }

  const buttonContent = (
    <>
      {/* Liquid Fill Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#52B69A] via-[#168AAD] to-[#FFBA08] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        {icon && iconPosition === 'left' && (
          <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>
        )}
        <span className="transition-all duration-300 group-hover:scale-105">{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
        )}
      </span>
      
      {/* Premium Border */}
      <div className="absolute inset-0 rounded-inherit border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  )

  const Component = href ? 'a' : 'button'
  const componentProps = href ? { href, ...props } : { onClick, disabled, ...props }

  return (
    <Component
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...componentProps}
    >
      {buttonContent}
    </Component>
  )
}
