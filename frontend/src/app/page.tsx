import CategoryGrid from '@/components/home/Category'
import HeroBanner from '@/components/home/HeroBanner'
import HeroBanner2 from '@/components/home/HeroBanner2'
import Promotion from '@/components/home/Promotion'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ProductGrid from '@/components/product/ProductGrid'
import { main } from 'framer-motion/client'
import React from 'react'

const page = () => {
  return (
    <main>
      <div className=''>
      <HeroBanner />
      <Navbar/>
      <HeroBanner2 />
      <ProductGrid/>
      <Promotion />
      <CategoryGrid/>
      <Footer />
      </div>
    </main>
  )
}

export default page