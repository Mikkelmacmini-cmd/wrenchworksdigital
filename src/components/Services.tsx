'use client'

import { useRef } from 'react'
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

// Each card manages its own scroll-in-view state
function ServiceCard({ service, i, sectionInView }: { service: typeof services[0], i: number, sectionInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  // Fires when the card is centred-ish in the viewport
  const active = useInView(cardRef, { margin: '-25% 0px -25% 0px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...spring, delay: 0.3 + i * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-20 scan-border"
      style={{
        borderTop: '1px solid var(--grid-line)',
        background: active ? 'var(--accent-subtle)' : 'transparent',
        transition: 'background 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Mobile: number + image row */}
      <div className="flex items-center justify-between md:hidden mb-2">
        <span
          className="text-mono transition-colors duration-500"
          style={{ color: 'var(--accent)', opacity: active ? 1 : 0.4 }}
        >
          {service.number}
        </span>
        <div
          className="w-14 h-14 rounded-sm overflow-hidden transition-all duration-500"
          style={{
            border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
            boxShadow: active ? '0 0 20px var(--accent-dim)' : 'none',
          }}
        >
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: active ? 0.9 : 0.4 }}
          />
        </div>
      </div>

      {/* Number — desktop */}
      <div className="hidden md:block md:col-span-1">
        <span
          className="text-mono transition-colors duration-500"
          style={{ color: active ? 'var(--accent)' : 'var(--text-muted)' }}
        >
          {service.number}
        </span>
      </div>

      {/* Title + tagline */}
      <div className="md:col-span-4">
        <h3
          className="text-title mb-2 md:mb-3 transition-colors duration-500"
          style={{ color: active ? 'var(--text-primary)' : 'var(--text-secondary)' }}
        >
          {service.title}
        </h3>
        <p
          className="text-subtitle transition-colors duration-500"
          style={{ color: active ? 'var(--accent)' : 'var(--text-dim)' }}
        >
          {service.tagline}
        </p>
      </div>

      {/* Vertical divider — desktop */}
      <div
        className="hidden md:block md:col-span-1 mx-auto transition-all duration-500"
        style={{
          width: '1px',
          alignSelf: 'stretch',
          background: active ? 'var(--accent)' : 'var(--grid-line)',
          opacity: active ? 0.4 : 1,
        }}
      />

      {/* Description */}
      <div className="md:col-span-4">
        <p
          className="text-body transition-colors duration-500"
          style={{ color: active ? 'var(--text-primary)' : 'var(--text-body)', opacity: active ? 1 : 0.7 }}
        >
          {service.description}
        </p>
      </div>

      {/* Image — desktop */}
      <div className="hidden md:flex md:col-span-2 items-center justify-end">
        <div
          className="w-16 h-16 rounded-sm overflow-hidden transition-all duration-500"
          style={{
            border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
            boxShadow: active ? '0 0 20px var(--accent-dim)' : 'none',
          }}
        >
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: active ? 0.8 : 0.35 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="section-massive relative">
      {/* Dark atmospheric video background */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Circuit.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-16 md:mb-32"
          style={{ borderBottom: '1px solid var(--grid-line)' }}
        >
          <div className="py-5 md:py-6 md:pr-8">
            <span className="text-mono flex items-center gap-2" style={{ color: 'var(--accent)' }}>
              <Lightning size={10} weight="fill" />
              OUR VISION
            </span>
          </div>
          <div className="hidden md:block py-6 md:px-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>WRENCH WORKS DIGITAL</span>
          </div>
          <div className="hidden md:block py-6 md:px-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>@WRENCHWORKSDIGITAL</span>
          </div>
          <div className="py-5 md:py-6 md:pl-8 md:border-l" style={{ borderColor: 'var(--grid-line)' }}>
            <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
              We build systems that <span style={{ color: 'var(--accent)' }}>fill your bays</span> every single
              day. Not vanity metrics. Not empty promises. Real customers through your doors.
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.2 }}
          className="mb-20 md:mb-40"
        >
          <h2 className="text-headline" style={{ color: 'var(--text-primary)' }}>
            Four Systems.
            <br />
            <span style={{ color: 'var(--accent)' }}>One Goal.</span>
          </h2>
        </motion.div>

        {/* Service cards — each lights up on scroll */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} i={i} sectionInView={inView} />
          ))}
          <div className="grid-line-h" />
        </div>
      </div>
    </section>
  )
}
