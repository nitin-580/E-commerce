import CategoryGrid from '@/components/home/Category'
import CategoryBar from '@/components/home/CategoryBar'
import HeroBanner from '@/components/home/HeroBanner'
import HeroBanner2 from '@/components/home/HeroBanner2'
import Promotion from '@/components/home/Promotion'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ProductGrid from '@/components/product/ProductGrid'
import Newsletter from '@/components/home/NewsletterSignup'
import { main } from 'framer-motion/client'
import React from 'react'
import InfoSection from '@/components/home/InspirationGallery'
import HandicraftSection from '@/components/home/DisplayCard'
import ArtisianHighlight from '@/components/home/ArtisianHighlight'
import ConciousPacking from '@/components/home/ConciousPacking'

const page = () => {
  return (
    <main>
      <div className='w-full h-full '>
      <HeroBanner2 />
      <CategoryBar />
      <InfoSection />
      <HandicraftSection />
      <ArtisianHighlight />
      <ConciousPacking />
      {/* <ProductGrid/>  */}
      <Newsletter />
      <Footer />
      </div>
    </main>
  )
}

export default page