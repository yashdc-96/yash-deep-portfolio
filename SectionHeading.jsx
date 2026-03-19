// src/components/ui/SectionHeading.jsx
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

/**
 * Reusable animated section heading.
 * Shows a small label above, a large title, and an optional subtitle.
 */
export function SectionHeading({ label, title, subtitle, className, align = 'left' }) {
  return (
    <div className={cn('mb-16', align === 'center' && 'text-center', className)}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="code-chip inline-block mb-4"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg max-w-2xl leading-relaxed"
          style={{ marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}


// src/components/ui/ScrollProgress.jsx — exported from same file for brevity
import { useEffect, useState } from 'react'

/**
 * Thin scroll progress bar fixed at the top of the viewport.
 * Uses native scroll events for maximum performance.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}
