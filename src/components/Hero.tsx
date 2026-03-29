'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lightning } from '@phosphor-icons/react'

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden" style={{ minHeight: '100dvh' }}>
      {/* Dark atmospheric video background */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Decorative corner brackets — large */}
      <div className="absolute top-[15%] left-[8%] w-12 h-12 z-10 pointer-events-none" style={{ borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)', opacity: 0.2 }} />
      <div className="absolute bottom-[15%] right-[8%] w-12 h-12 z-10 pointer-events-none" style={{ borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)', opacity: 0.2 }} />

      {/* Floating electric dots */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[25%] right-[15%] glow-dot z-10"
      />
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[30%] left-[12%] glow-dot z-10"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12 flex flex-col items-center gap-10 md:gap-16">
        {/* Tiny label with icon */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-mono flex items-center gap-2"
          style={{ color: 'var(--accent)' }}
        >
          <Lightning size={12} weight="fill" />
          DIGITAL SYSTEMS FOR AUTO REPAIR
          <Lightning size={12} weight="fill" />
        </motion.span>

        {/* Massive thin headline */}
        <motion.h1
          className="text-display"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.5 }}
        >
          Get Found.<br />
          Get More<br />
          <span style={{ color: 'var(--accent)' }}>Appointments.</span>
        </motion.h1>

        {/* Subtle glow line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glow-line w-48"
        />

        {/* Subtitle — centered, muted */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.8 }}
          className="text-subtitle text-center"
          style={{ color: 'var(--text-body)', maxWidth: '520px' }}
        >
          We engineer digital systems that drive <span style={{ color: 'var(--accent)' }}>real customers</span>{' '}
          through your bay doors — not vanity metrics.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a href="#contact" className="btn-primary">
            Free Inspection
            <ArrowRight size={14} weight="bold" />
          </a>
          <a href="#services" className="btn-ghost">
            Our Vision
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '11px' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '1px', height: '20px', background: 'var(--accent)', opacity: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
