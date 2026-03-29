'use client'

import Image from 'next/image'
import { Lightning } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 relative" style={{ borderTop: '1px solid var(--grid-line)' }}>
      {/* Glow line on top */}
      <div className="glow-line absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Large footer lettermark */}
        <div className="flex justify-center mb-20 relative">
          <Image src="/icon.png" alt="" width={200} height={200} className="h-20 w-auto opacity-10" />
          {/* Electric glow behind icon */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
            style={{ background: 'var(--accent)', opacity: 0.03, filter: 'blur(40px)' }}
          />
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center md:text-left pb-4" style={{ borderTop: '1px solid var(--grid-line)', paddingTop: '2rem' }}>
          <p className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
            &copy; {new Date().getFullYear()} WRENCH WORKS DIGITAL
          </p>
          <p className="text-mono text-center" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
            ALL RIGHTS RESERVED
          </p>
          <p className="text-mono md:text-right flex items-center justify-center md:justify-end gap-1" style={{ color: 'var(--accent)', fontSize: '10px' }}>
            <Lightning size={8} weight="fill" />
            FILLING BAYS. BUILDING EMPIRES.
          </p>
        </div>
      </div>
    </footer>
  )
}
