'use client'

import { useEffect, useRef, useState } from 'react'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

export default function Marquee({ 
  children, 
  speed = 30, 
  direction = 'left', 
  pauseOnHover = true,
  className = '' 
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current

    // Create duplicate content for seamless loop
    const clone = content.cloneNode(true) as HTMLElement
    container.appendChild(clone)

    let animationId: number
    let position = 0

    const animate = () => {
      if (!isPaused) {
        const contentWidth = content.offsetWidth
        const moveSpeed = speed / 10 // Convert to pixels per frame
        
        position += direction === 'left' ? -moveSpeed : moveSpeed
        
        // Reset position when content scrolls out of view
        if (Math.abs(position) >= contentWidth) {
          position = 0
        }
        
        container.style.transform = `translateX(${position}px)`
      }
      
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [speed, direction, isPaused])

  return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={containerRef} className="flex whitespace-nowrap">
        <div ref={contentRef} className="inline-block">
          {children}
        </div>
      </div>
    </div>
  )
}

// Lightweight variant for better performance
export function FastMarquee({ 
  children, 
  speed = 20, 
  direction = 'left', 
  className = '' 
}: Omit<MarqueeProps, 'pauseOnHover'>) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex whitespace-nowrap animate-marquee"
        style={{ 
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        <div className="inline-block">{children}</div>
        <div className="inline-block">{children}</div>
      </div>
    </div>
  )
}
