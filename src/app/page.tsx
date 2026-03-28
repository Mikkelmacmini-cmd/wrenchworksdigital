'use client'

import { useState, useCallback } from 'react'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Page() {
  const [loaded, setLoaded] = useState(false)
  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Loader onComplete={handleLoaded} />
      {loaded && (
        <>
          <Navbar />
          <main className="flex-1">
            <Hero />
            <Marquee />
            <Services />
            <Process />
            <Results />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
