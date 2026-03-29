'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightning } from '@phosphor-icons/react'

const steps = [
  {
    number: '01',
    title: 'Selection',
    description: 'We audit your digital presence. Website, Google profile, local rankings, review velocity. Every weakness identified.',
  },
  {
    number: '02',
    title: 'Alignment',
    description: 'Custom digital system designed for your shop. No templates. Every element built to convert searchers into booked appointments.',
  },
  {
    number: '03',
    title: 'Access',
    description: 'Your new system goes live. Mobile-first website, optimized GBP, local SEO foundation, review funnel — all activated together.',
  },
  {
    number: '04',
    title: 'Compounding',
    description: 'We monitor, adjust, and accelerate. Monthly reporting on calls, clicks, and customers your digital presence generates.',
  },
]

const spring = { type: 'spring' as const, stiffness: 60, damping: 20 }

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" ref={ref} className="section-massive relative overflow-hidden">
      {/* Video background */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Grid.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Section headline — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="text-center mb-16 md:mb-32"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-mono flex items-center justify-center gap-2 mb-6"
            style={{ color: 'var(--accent)' }}
          >
            <Lightning size={10} weight="fill" />
            OUR PROCESS
          </motion.span>
          <h2 className="text-headline" style={{ color: 'var(--text-primary)' }}>
            From Selection<br />
            <span style={{ color: 'var(--text-dim)' }}>to Legacy.</span>
          </h2>
        </motion.div>

        {/* 4-column process strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Step counter */}
          <div className="flex items-center gap-2 mb-12">
            <span className="text-mono" style={{ color: 'var(--accent)' }}>
              {String(activeStep + 1).padStart(2, '0')}
            </span>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>
              {String(steps.length).padStart(2, '0')}
            </span>
          </div>

          {/* Progress bar */}
          <div className="relative mb-0" style={{ height: '2px', background: 'var(--border)' }}>
            <motion.div
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '2px', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent-glow)' }}
            />
          </div>

          {/* Steps grid — stacks on mobile, 4-col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0" style={{ borderTop: '1px solid var(--grid-line)' }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="py-8 md:py-10 md:pr-8 cursor-pointer transition-all duration-300"
                style={{
                  borderBottom: '1px solid var(--grid-line)',
                  borderRight: undefined,
                  paddingLeft: '0',
                  background: activeStep === i ? 'var(--accent-subtle)' : 'transparent',
                }}
                onMouseEnter={() => setActiveStep(i)}
                onClick={() => setActiveStep(i)}
              >
                {/* Mobile: number + title on same row */}
                <div className="flex items-center gap-3 mb-3 md:block">
                  <span
                    className="text-mono transition-colors duration-300"
                    style={{ color: activeStep === i ? 'var(--accent)' : 'var(--accent)', opacity: activeStep === i ? 1 : 0.5 }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-title md:hidden transition-colors duration-300"
                    style={{ color: activeStep === i ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <h3
                  className="text-title mb-4 md:mb-6 transition-colors duration-300 hidden md:block"
                  style={{ color: activeStep === i ? 'var(--text-primary)' : 'var(--text-dim)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-body transition-colors duration-300"
                  style={{ color: activeStep === i ? 'var(--text-body)' : 'var(--text-secondary)', opacity: activeStep === i ? 1 : 0.7 }}
                >
                  {step.description}
                </p>
                {/* Active indicator dot */}
                {activeStep === i && (
                  <motion.div
                    layoutId="activeStepDot"
                    className="glow-dot mt-5"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
