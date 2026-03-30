'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightning, Star } from '@phosphor-icons/react'

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" ref={ref} className="section-massive relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-32"
          style={{ borderBottom: '1px solid var(--grid-line)' }}
        >
          {/* Mobile */}
          <div className="flex items-center justify-between py-5 md:hidden">
            <span className="text-mono flex items-center gap-2" style={{ color: 'var(--accent)' }}>
              <Lightning size={10} weight="fill" />
              TESTIMONIALS
            </span>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>REAL RESULTS</span>
          </div>
          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-4 gap-0">
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
              <span className="text-mono" style={{ color: 'var(--text-muted)' }}>COMING SOON</span>
            </div>
          </div>
        </motion.div>

        {/* Glow line */}
        <div className="glow-line mb-16 md:mb-24" />

        {/* Coming Soon display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          {/* Star row */}
          <div className="flex items-center gap-2 mb-12">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ ...spring, delay: 0.4 + i * 0.08 }}
              >
                <Star
                  size={24}
                  weight="fill"
                  style={{ color: 'var(--accent)', opacity: 0.4 + i * 0.12 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Main message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.6 }}
            className="text-headline mb-6"
            style={{ color: 'var(--text-primary)', fontWeight: 300 }}
          >
            Results Are Being Built.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-body text-center mb-12"
            style={{ color: 'var(--text-body)', maxWidth: '480px' }}
          >
            We&apos;re in the early stages of charging up auto repair shops across the country.
            Client results and verified reviews are on the way.
          </motion.p>

          {/* Placeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[900px] mb-16">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.7 + i * 0.1 }}
                className="bracket-card bracket-card-inner"
                style={{ padding: '2rem', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                {/* Fake redacted lines */}
                <div className="flex flex-col gap-3 mb-6">
                  {[90, 70, 80, 55].map((w, j) => (
                    <div
                      key={j}
                      style={{
                        height: '8px',
                        width: `${w}%`,
                        background: 'var(--border)',
                        borderRadius: '2px',
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div style={{ width: '80px', height: '8px', background: 'var(--border)', borderRadius: '2px', marginBottom: '6px' }} />
                    <div style={{ width: '120px', height: '6px', background: 'var(--border)', borderRadius: '2px', opacity: 0.5 }} />
                  </div>
                  <span className="text-mono" style={{ color: 'var(--accent)', opacity: 0.4, fontSize: '10px' }}>
                    PENDING
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA nudge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-mono flex items-center gap-2" style={{ color: 'var(--accent)', opacity: 0.7 }}>
              <Lightning size={10} weight="fill" />
              BE AMONG THE FIRST
            </span>
            <a href="#contact" className="btn-accent">
              <Lightning size={14} weight="fill" />
              Claim Your Free Audit
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
