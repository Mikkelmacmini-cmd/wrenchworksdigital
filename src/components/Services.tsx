'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightning } from '@phosphor-icons/react'

const services = [
  {
    number: '01',
    title: 'Mobile-First Websites',
    tagline: 'Your digital bay door.',
    description: 'Fast, conversion-focused sites designed for the phone in your customer\'s hand. Click-to-call, service pages, instant trust.',
    image: '/mobile-website.png',
  },
  {
    number: '02',
    title: 'Google Business Profile',
    tagline: 'Your second storefront.',
    description: 'Optimized and actively managed. Weekly posts, review responses, photo updates. Every field maximized for clicks and calls.',
    image: '/gbp.png',
  },
  {
    number: '03',
    title: 'Local SEO & Maps',
    tagline: 'Dominate local search.',
    description: 'When someone searches "oil change near me" — you appear first. Citation networks, signal optimization, position tracking.',
    image: '/seo.png',
  },
  {
    number: '04',
    title: 'Automated Reviews',
    tagline: 'Reputation on autopilot.',
    description: 'Capture 5-star reviews at the perfect moment. Route negative feedback privately. More reviews, better ratings, zero effort.',
    image: '/review-funnel.png',
  },
]

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" ref={ref} className="section-massive relative">
      {/* Dark atmospheric video background */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Circuit.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Section intro — 4 column grid with vertical dividers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-16 md:mb-32"
        >
          <div className="py-6 md:pr-8">
            <span className="text-mono flex items-center gap-2" style={{ color: 'var(--accent)' }}>
              <Lightning size={10} weight="fill" />
              OUR VISION
            </span>
          </div>
          <div className="py-6 md:px-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>WRENCH WORKS DIGITAL</span>
          </div>
          <div className="py-6 md:px-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>@WRENCHWORKSDIGITAL</span>
          </div>
          <div className="py-6 md:pl-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <p className="text-small" style={{ color: 'var(--text-muted)' }}>
              We build systems that <span style={{ color: 'var(--accent)' }}>fill your bays</span> every single day. Not vanity metrics. Not empty promises. Real customers through your doors.
            </p>
          </div>
        </motion.div>

        {/* Large staggered headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.2 }}
          className="mb-20 md:mb-40"
        >
          <h2 className="text-headline" style={{ color: 'var(--text-primary)' }}>
            Four Systems.
            <br />
            <span style={{ color: 'var(--text-dim)' }}>One Goal.</span>
          </h2>
        </motion.div>

        {/* Service cards — stacked with grid lines */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.3 + i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-16 md:py-20 scan-border cursor-pointer"
              style={{
                borderTop: '1px solid var(--grid-line)',
                background: hoveredIndex === i ? 'var(--accent-subtle)' : 'transparent',
                transition: 'background 0.4s',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span
                  className="text-mono transition-colors duration-300"
                  style={{ color: hoveredIndex === i ? 'var(--accent)' : 'var(--text-muted)' }}
                >
                  {service.number}
                </span>
              </div>

              {/* Title + tagline */}
              <div className="md:col-span-4">
                <h3 className="text-title mb-3 transition-colors duration-300" style={{ color: hoveredIndex === i ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {service.title}
                </h3>
                <p className="text-subtitle transition-colors duration-300" style={{ color: hoveredIndex === i ? 'var(--accent)' : 'var(--text-dim)' }}>
                  {service.tagline}
                </p>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block md:col-span-1 mx-auto" style={{ width: '1px', alignSelf: 'stretch', background: hoveredIndex === i ? 'var(--accent)' : 'var(--grid-line)', transition: 'background 0.3s', opacity: hoveredIndex === i ? 0.4 : 1 }} />

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-body" style={{ color: 'var(--text-body)' }}>
                  {service.description}
                </p>
              </div>

              {/* Image thumbnail */}
              <div className="md:col-span-2 flex items-center justify-end">
                <div
                  className="w-16 h-16 rounded-sm overflow-hidden transition-all duration-300"
                  style={{
                    border: hoveredIndex === i ? '1px solid var(--accent)' : '1px solid var(--border)',
                    boxShadow: hoveredIndex === i ? '0 0 20px var(--accent-dim)' : 'none',
                  }}
                >
                  <img src={service.image} alt="" className="w-full h-full object-cover transition-opacity duration-300" style={{ opacity: hoveredIndex === i ? 0.8 : 0.4 }} />
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="grid-line-h" />
        </div>
      </div>
    </section>
  )
}
