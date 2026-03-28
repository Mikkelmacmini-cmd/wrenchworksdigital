'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import { Sun, Moon } from '@phosphor-icons/react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border-subtle)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {theme === 'light' ? (
          <Moon size={16} weight="bold" style={{ color: 'var(--text-secondary)' }} />
        ) : (
          <Sun size={16} weight="bold" style={{ color: 'var(--accent)' }} />
        )}
      </motion.div>
    </motion.button>
  )
}
