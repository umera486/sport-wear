"use client";

import dynamic from "next/dynamic";
import Navbar from '@/components/layout/navbar'
import Hero from '@/components/layout/hero'
import Collections from '@/components/layout/collections'
import BestSellers from '@/components/layout/bestSellers'
import BrandStory from '@/components/layout/brandStory'
import Testimonials from '@/components/layout/testimonials'
import Newsletter from '@/components/layout/newsletter'
import PremiumFooter from '@/components/layout/premiumFooter'
import KineticRibbon from '@/components/layout/kineticRibbon'

// Error Fix: Dynamic import with SSR disabled for ApexBlueprint
const ApexBlueprint = dynamic(() => import('@/components/layout/apexBlueprint'), {
  ssr: false,
});

import ApexGallery from '@/components/layout/apexGallery'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ApexBlueprint />
      <Collections />
      <BestSellers />
      <BrandStory />
      <ApexGallery />
      <Testimonials />
      <Newsletter />
      <KineticRibbon />
      <PremiumFooter />
    </main>
  )
}