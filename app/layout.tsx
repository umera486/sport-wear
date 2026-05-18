import './globals.css'
import { Inter, Poppins, Playfair_Display, Space_Grotesk } from 'next/font/google'
import { cn } from '@/lib/utils'
import SmoothScrollProvider from '@/components/providers/smoothScrollProvider'
import Navbar from '@/components/layout/navbar'
import { CartProvider } from '@/app/context/cartContext'
import CartDrawer from "@/components/layout/cartDrawer"

// 1. Load Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins' 
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      inter.variable, 
      poppins.variable, 
      playfair.variable, 
      spaceGrotesk.variable,
      "scroll-smooth"
    )}>
      <body className="bg-black text-white antialiased overflow-x-hidden font-poppins">
        {/* STEP 1: The Cart Logic Wrapper */}
        <CartProvider>
          
          {/* STEP 2: The Visual/Scroll Wrapper */}
          <SmoothScrollProvider>
            
            {/* STEP 3: Global UI Elements */}
            <Navbar />
            <CartDrawer />
            
            {/* STEP 4: Page Content */}
            <main className="relative">
              {children}
            </main>
            
          </SmoothScrollProvider>
        </CartProvider>
      </body>
    </html>
  )
}