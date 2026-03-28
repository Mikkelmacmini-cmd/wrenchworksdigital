'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Lightning, Phone, MapPin, Globe, User, Storefront } from '@phosphor-icons/react'

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <section id="contact" ref={ref} className="section-massive relative overflow-hidden">
      {/* Video background */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Charge.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-24"
        >
          <span className="text-mono flex items-center justify-center gap-2 mb-8" style={{ color: 'var(--accent)' }}>
            <Lightning size={10} weight="fill" />
            CHARGE UP YOUR SHOP
            <Lightning size={10} weight="fill" />
          </span>
          <h2 className="text-headline mb-8" style={{ color: 'var(--text-primary)' }}>
            Growth Is Not Wished For.<br />
            <span style={{ color: 'var(--accent)' }}>It Is Engineered.</span>
          </h2>
          <p className="text-body mx-auto text-center" style={{ color: 'var(--text-body)', maxWidth: '480px' }}>
            Book a free 20-minute audit. We&apos;ll pull up your Google presence live,
            show you where competitors outrank you, and give you the exact roadmap to dominate.
          </p>
        </motion.div>

        {/* Form — redesigned with better readability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.2 }}
          className="max-w-[640px] mx-auto"
        >
          {/* Outer bracket decoration */}
          <div className="relative" style={{ padding: '3px' }}>
            {/* Corner brackets - outer */}
            <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)', opacity: 0.5 }} />
            <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: '1px solid var(--accent)', borderRight: '1px solid var(--accent)', opacity: 0.5 }} />
            <div className="absolute bottom-0 left-0 w-8 h-8" style={{ borderBottom: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)', opacity: 0.5 }} />
            <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)', opacity: 0.5 }} />

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border)',
                padding: 'clamp(2rem, 5vw, 3rem)',
              }}
            >
              <h3 className="text-label mb-2 text-center" style={{ color: 'var(--accent)' }}>
                REQUEST YOUR FREE INSPECTION
              </h3>
              <p className="text-mono text-center mb-10" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
                NO COMMITMENT &middot; NO CREDIT CARD &middot; JUST ANSWERS
              </p>

              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: Name + Shop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-mono block mb-2" style={{ color: focused === 'name' ? 'var(--accent)' : 'var(--text-dim)', fontSize: '9px', transition: 'color 0.3s' }}>
                      YOUR NAME
                    </label>
                    <div className="relative flex items-center">
                      <User size={14} weight="light" className="absolute left-0" style={{ color: focused === 'name' ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.3s' }} />
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="form-input"
                        style={{ paddingLeft: '24px' }}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-mono block mb-2" style={{ color: focused === 'shop' ? 'var(--accent)' : 'var(--text-dim)', fontSize: '9px', transition: 'color 0.3s' }}>
                      SHOP NAME
                    </label>
                    <div className="relative flex items-center">
                      <Storefront size={14} weight="light" className="absolute left-0" style={{ color: focused === 'shop' ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.3s' }} />
                      <input
                        type="text"
                        placeholder="Smith's Auto Repair"
                        className="form-input"
                        style={{ paddingLeft: '24px' }}
                        onFocus={() => setFocused('shop')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div className="relative">
                  <label className="text-mono block mb-2" style={{ color: focused === 'phone' ? 'var(--accent)' : 'var(--text-dim)', fontSize: '9px', transition: 'color 0.3s' }}>
                    PHONE NUMBER
                  </label>
                  <div className="relative flex items-center">
                    <Phone size={14} weight="light" className="absolute left-0" style={{ color: focused === 'phone' ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.3s' }} />
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="form-input"
                      style={{ paddingLeft: '24px' }}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Row 3: City + Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-mono block mb-2" style={{ color: focused === 'city' ? 'var(--accent)' : 'var(--text-dim)', fontSize: '9px', transition: 'color 0.3s' }}>
                      CITY
                    </label>
                    <div className="relative flex items-center">
                      <MapPin size={14} weight="light" className="absolute left-0" style={{ color: focused === 'city' ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.3s' }} />
                      <input
                        type="text"
                        placeholder="Denver, CO"
                        className="form-input"
                        style={{ paddingLeft: '24px' }}
                        onFocus={() => setFocused('city')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-mono block mb-2" style={{ color: focused === 'website' ? 'var(--accent)' : 'var(--text-dim)', fontSize: '9px', transition: 'color 0.3s' }}>
                      CURRENT WEBSITE
                    </label>
                    <div className="relative flex items-center">
                      <Globe size={14} weight="light" className="absolute left-0" style={{ color: focused === 'website' ? 'var(--accent)' : 'var(--text-dim)', transition: 'color 0.3s' }} />
                      <input
                        type="url"
                        placeholder="www.example.com"
                        className="form-input"
                        style={{ paddingLeft: '24px' }}
                        onFocus={() => setFocused('website')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>
                </div>

                {/* Glow divider */}
                <div className="glow-line" />

                {/* Submit */}
                <button type="submit" className="btn-accent w-full mt-2">
                  <Lightning size={14} weight="fill" />
                  Request Free Inspection
                  <ArrowRight size={14} weight="bold" />
                </button>

                {/* Trust badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-2">
                  <span className="text-mono flex items-center gap-1" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
                    <Lightning size={8} weight="fill" style={{ color: 'var(--accent)' }} />
                    FREE AUDIT
                  </span>
                  <span className="hidden sm:block" style={{ width: '1px', height: '10px', background: 'var(--border)' }} />
                  <span className="text-mono flex items-center gap-1" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
                    <Lightning size={8} weight="fill" style={{ color: 'var(--accent)' }} />
                    NO COMMITMENT
                  </span>
                  <span className="hidden sm:block" style={{ width: '1px', height: '10px', background: 'var(--border)' }} />
                  <span className="text-mono flex items-center gap-1" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
                    <Lightning size={8} weight="fill" style={{ color: 'var(--accent)' }} />
                    RESULTS IN 30 DAYS
                  </span>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
