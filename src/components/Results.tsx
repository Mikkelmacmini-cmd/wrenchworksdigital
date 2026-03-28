'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightning } from '@phosphor-icons/react'

const stats = [
  { value: '94%', label: 'Of our shops see increased calls within 30 days' },
  { value: '+312%', label: 'Average review growth across all clients' },
]

const comparisons = [
  {
    category: 'Visibility',
    subtitle: 'vs Being Invisible',
    ours: 'Dominate page one of Google Maps and local search. Be the first name customers see.',
    old: 'Buried on page three. Invisible to the customers searching right now in your city.',
  },
  {
    category: 'Reviews',
    subtitle: 'vs Empty Profiles',
    ours: 'Automated systems capture reviews at the perfect moment. 4.8+ star average.',
    old: '12 reviews from 2019. No system. Competitors with 200+ reviews stealing your calls.',
  },
  {
    category: 'Website',
    subtitle: 'vs Digital Brochures',
    ours: 'Mobile-first, conversion-focused. Click-to-call, online booking, instant trust.',
    old: 'Desktop-only site from 2016. Slow loading. No click-to-call. Customers bounce in seconds.',
  },
  {
    category: 'Growth',
    subtitle: 'vs Stagnation',
    ours: 'Monthly optimization. Real reporting. Compounding visibility month over month.',
    old: 'Set it and forget it. No tracking. No idea if marketing is working or wasting money.',
  },
]

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function Results() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section id="results" ref={ref} className="section-massive">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-20"
        >
          <Lightning size={10} weight="fill" style={{ color: 'var(--accent)' }} />
          <span className="text-mono" style={{ color: 'var(--accent)' }}>PROVEN RESULTS</span>
        </motion.div>

        {/* Stat counters with circular decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-48"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: i * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular ring decoration — electric blue */}
              <div className="relative flex items-center justify-center mb-6 md:mb-8 w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
                <div
                  className="absolute inset-0 rounded-full pulse-ring"
                  style={{ border: '1px dashed var(--accent)', opacity: 0.3 }}
                />
                <div
                  className="absolute rounded-full"
                  style={{ inset: '15px', border: '1px solid var(--accent)', opacity: 0.1 }}
                />
                <span
                  className="relative z-10"
                  style={{
                    fontSize: 'clamp(48px, 8vw, 96px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    color: 'var(--accent)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {stat.value}
                </span>
              </div>
              <p className="text-body text-center" style={{ color: 'var(--text-body)', maxWidth: '320px' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Glow line separator */}
        <div className="glow-line mb-16 md:mb-32" />

        {/* Comparison section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-headline text-center" style={{ color: 'var(--text-primary)' }}>
            The Wrench Works Way<br />
            <span style={{ color: 'var(--text-dim)' }}>vs The Old World.</span>
          </h2>
        </motion.div>

        {/* Comparison cards with corner brackets */}
        <div className="flex flex-col gap-6">
          {comparisons.map((comp, i) => (
            <motion.div
              key={comp.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.5 + i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 scan-border"
              style={{ borderTop: '1px solid var(--grid-line)' }}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {/* Category label */}
              <div className="md:col-span-3 py-8 md:pr-8">
                <span
                  className="text-mono block mb-1 transition-colors duration-300"
                  style={{ color: hoveredRow === i ? 'var(--accent)' : 'var(--text-muted)' }}
                >
                  {String(i + 1).padStart(2, '0')} / {String(comparisons.length).padStart(2, '0')}
                </span>
                <h3 className="text-title transition-colors duration-300" style={{ color: hoveredRow === i ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {comp.category}
                </h3>
                <span className="text-small" style={{ color: 'var(--text-dim)' }}>{comp.subtitle}</span>
              </div>

              {/* WWD — corner bracket card */}
              <div className="md:col-span-4 md:col-start-5 py-8 md:px-6">
                <div className="bracket-card bracket-card-inner relative" style={{ padding: '1.5rem' }}>
                  <span className="text-label block mb-3" style={{ color: 'var(--accent)' }}>
                    <Lightning size={10} weight="fill" className="inline mr-1" style={{ verticalAlign: 'middle' }} />
                    WWD
                  </span>
                  <p className="text-body" style={{ color: 'var(--text-primary)' }}>{comp.ours}</p>
                </div>
              </div>

              {/* Old World */}
              <div className="md:col-span-4 py-8 md:px-6">
                <div className="bracket-card bracket-card-inner relative" style={{ padding: '1.5rem' }}>
                  <span className="text-label block mb-3" style={{ color: 'var(--text-muted)' }}>THE OLD WORLD</span>
                  <p className="text-body" style={{ color: 'var(--text-dim)' }}>{comp.old}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="grid-line-h" />
        </div>
      </div>
    </section>
  )
}
