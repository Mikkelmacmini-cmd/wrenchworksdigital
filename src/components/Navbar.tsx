'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Lightning, List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Vision', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="transition-all duration-500"
          style={{
            height: '72px',
            background: scrolled || menuOpen ? 'rgba(0,0,0,0.95)' : 'transparent',
            backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-5 md:px-12">
            <div className="flex items-center justify-between h-[72px]">
              {/* Logo */}
              <a href="#" className="flex items-center gap-3">
                <Image src="/icon.png" alt="" width={100} height={100} className="h-7 w-auto md:h-8" priority />
                <span className="text-mono hidden md:block" style={{ color: 'var(--text-secondary)', fontSize: '11px', letterSpacing: '0.15em' }}>
                  WRENCH WORKS DIGITAL
                </span>
              </a>

              {/* Desktop nav links */}
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-mono relative transition-colors duration-300"
                    style={{ color: hoveredLink === link.label ? 'var(--accent)' : 'var(--text-muted)', fontSize: '10px' }}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-[1px] transition-all duration-300"
                      style={{
                        width: hoveredLink === link.label ? '100%' : '0%',
                        background: 'var(--accent)',
                        boxShadow: '0 0 4px var(--accent-glow)',
                      }}
                    />
                  </a>
                ))}
              </nav>

              {/* Desktop CTA */}
              <a
                href="#contact"
                className="hidden lg:flex text-mono transition-all duration-300 items-center gap-2"
                style={{
                  color: 'var(--accent)',
                  fontSize: '10px',
                  textShadow: '0 0 10px var(--accent-dim)',
                }}
              >
                <Lightning size={10} weight="fill" />
                GET IN TOUCH
              </a>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: 'var(--accent)', background: 'none', border: 'none' }}
              >
                {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(0,0,0,0.97)', paddingTop: '72px' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08 }}
                className="text-title transition-colors duration-300"
                style={{ color: 'var(--text-primary)', fontWeight: 300, fontSize: '32px' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="glow-line w-24 my-4"
            />
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btn-accent"
              onClick={() => setMenuOpen(false)}
            >
              <Lightning size={14} weight="fill" />
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
