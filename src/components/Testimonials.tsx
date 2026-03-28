'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Lightning, Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    quote: "Before Wrench Works we were invisible online. Now we're the first result when people search for auto repair in our area. Phone hasn't stopped ringing.",
    author: 'Mike Reynolds',
    role: 'Owner, Reynolds Auto Care',
    location: 'Denver, CO',
    metric: '+340% calls',
  },
  {
    quote: "They rebuilt our entire digital presence in under two weeks. New website, Google profile completely optimized, review system running. Wish we'd done this years ago.",
    author: 'Sarah Chen',
    role: 'Manager, Pacific Auto Works',
    location: 'Portland, OR',
    metric: '47 new reviews',
  },
  {
    quote: "The review funnel alone paid for itself in the first month. We went from 12 Google reviews to over 80 in three months. Customers trust us before they even walk in.",
    author: 'James Okafor',
    role: 'Owner, Precision Garage',
    location: 'Austin, TX',
    metric: '4.9 avg rating',
  },
]

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" ref={ref} className="section-massive relative">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Section intro grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16 md:mb-32"
          style={{ borderBottom: '1px solid var(--grid-line)' }}
        >
          <div className="py-6">
            <span className="text-mono flex items-center gap-2" style={{ color: 'var(--accent)' }}>
              <Lightning size={10} weight="fill" />
              TESTIMONIALS
            </span>
          </div>
          <div className="py-6 md:px-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>REAL RESULTS</span>
          </div>
          <div className="py-6 md:px-8" style={{ borderLeft: '1px solid var(--grid-line)' }} />
          <div className="py-6 md:pl-8" style={{ borderLeft: '1px solid var(--grid-line)' }}>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* Glow line */}
        <div className="glow-line mb-10 md:mb-20" />

        {/* Testimonial display — centered large quote */}
        <div className="flex flex-col items-center text-center">
          {/* Large quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Quotes size={48} weight="fill" style={{ color: 'var(--accent)', opacity: 0.3 }} />
          </motion.div>

          {/* Large quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[800px]"
            >
              <p className="text-subtitle mb-12" style={{ color: 'var(--text-primary)', fontWeight: 300 }}>
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-2 mb-4">
                <span className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  {testimonials[active].author}
                </span>
                <span className="text-mono" style={{ color: 'var(--text-muted)' }}>
                  {testimonials[active].role} &middot; {testimonials[active].location}
                </span>
              </div>

              <span className="text-mono inline-flex items-center gap-1" style={{ color: 'var(--accent)', fontSize: '10px' }}>
                <Lightning size={10} weight="fill" />
                {testimonials[active].metric}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots — electric blue active */}
          <div className="flex gap-3 mt-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  background: i === active ? 'var(--accent)' : 'var(--border)',
                  boxShadow: i === active ? '0 0 8px var(--accent-glow)' : 'none',
                }}
              />
            ))}
          </div>

          {/* Auto-progress bar */}
          <div className="mt-8 w-48 relative" style={{ height: '1px', background: 'var(--border)' }}>
            <motion.div
              key={active}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'linear' }}
              style={{ height: '1px', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent-glow)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
