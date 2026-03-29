'use client'

import { useRef, useState, useEffect } from 'react'
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

// Each step tracks its own scroll visibility and reports back
function ProcessStep({
  step,
  i,
  active,
  onEnterView,
}: {
  step: typeof steps[0]
  i: number
  active: boolean
  onEnterView: (i: number) => void
}) {
  const stepRef = useRef<HTMLDivElement>(null)
  // Fires when this step is roughly centred in the viewport
  const inView = useInView(stepRef, { margin: '-30% 0px -30% 0px' })

  useEffect(() => {
    if (inView) onEnterView(i)
  }, [inView, i, onEnterView])

  return (
    <div
      ref={stepRef}
      className="py-8 md:py-10 md:pr-8 transition-all duration-500"
      style={{
        borderBottom: '1px solid var(--grid-line)',
        background: active ? 'var(--accent-subtle)' : 'transparent',
        paddingLeft: '0',
      }}
    >
      {/* Mobile: number + title inline */}
      <div className="flex items-center gap-3 mb-3 md:block">
        <span
          className="text-mono transition-colors duration-500"
          style={{ color: 'var(--accent)', opacity: active ? 1 : 0.4 }}
        >
          {step.number}
        </span>
        <h3
          className="text-title md:hidden transition-colors duration-500"
          style={{ color: active ? 'var(--text-primary)' : 'var(--text-secondary)' }}
        >
          {step.title}
        </h3>
      </div>

      {/* Desktop: title on its own line */}
      <h3
        className="hidden md:block text-title mb-4 md:mb-6 transition-colors duration-500"
        style={{ color: active ? 'var(--text-primary)' : 'var(--text-dim)' }}
      >
        {step.title}
      </h3>

      <p
        className="text-body transition-all duration-500"
        style={{
          color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
          opacity: active ? 1 : 0.55,
        }}
      >
        {step.description}
      </p>

      {/* Active glow dot */}
      {active && (
        <motion.div
          layoutId="activeStepDot"
          className="glow-dot mt-5"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  )
}

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
        {/* Section headline */}
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
            <span style={{ color: 'var(--accent)' }}>to Legacy.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Step counter */}
          <div className="flex items-center gap-2 mb-12">
            <span className="text-mono transition-all duration-500" style={{ color: 'var(--accent)' }}>
              {String(activeStep + 1).padStart(2, '0')}
            </span>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="text-mono" style={{ color: 'var(--text-muted)' }}>
              {String(steps.length).padStart(2, '0')}
            </span>
          </div>

          {/* Animated progress bar */}
          <div className="relative mb-0" style={{ height: '2px', background: 'var(--border)' }}>
            <motion.div
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '2px',
                background: 'var(--accent)',
                boxShadow: '0 0 10px var(--accent-glow)',
              }}
            />
          </div>

          {/* Steps — each fires onEnterView when scrolled into view */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-0"
            style={{ borderTop: '1px solid var(--grid-line)' }}
          >
            {steps.map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                i={i}
                active={activeStep === i}
                onEnterView={setActiveStep}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
