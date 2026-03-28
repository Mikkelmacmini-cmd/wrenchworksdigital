'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const statusMessages = [
  'INITIALIZING...',
  'LOADING SYSTEMS...',
  'ESTABLISHING CONNECTION...',
  'ACCESS GRANTED',
]

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timers = statusMessages.map((_, i) =>
      setTimeout(() => setStep(i), i * 600 + 300)
    )
    const finishTimer = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 600)
    }, statusMessages.length * 600 + 800)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(finishTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#000' }}
        >
          <div className="grid grid-cols-12 gap-4 w-full max-w-[1200px] px-12 items-center">
            {/* Left: status code */}
            <div className="col-span-3">
              <span className="text-mono" style={{ color: 'var(--text-muted)' }}>
                WWD_{String(Math.random()).slice(2, 10).toUpperCase()}
              </span>
            </div>

            {/* Center: status + dot */}
            <div className="col-span-4 flex items-center gap-3">
              <div className="loader-dot" style={{ animationDelay: `${step * 0.2}s` }} />
              <span className="text-mono" style={{ color: 'var(--text-muted)' }}>
                {statusMessages[Math.min(step, statusMessages.length - 1)]}
              </span>
            </div>

            {/* Right: logo */}
            <div className="col-span-5 flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <Image
                  src="/icon.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-8 w-auto"
                  priority
                />
                <span
                  className="text-mono"
                  style={{ color: 'var(--text-primary)', letterSpacing: '0.15em', fontSize: '13px' }}
                >
                  WWD
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
