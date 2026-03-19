// src/components/sections/Hero.jsx
import { motion } from 'framer-motion'

const WORDS = ['React 19', 'Vite', 'Redux', 'Accessibility', 'Performance']

/**
 * Hero section — the first impression.
 * Features:
 * - Animated name reveal with gradient
 * - Staggered tagline animation
 * - Rotating tech keywords
 * - CTA buttons
 * - Ambient grid background + radial glow
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background: grid + radial glow */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,160,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none animate-float"
        style={{ background: 'var(--color-accent)', animationDelay: '0s' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-5 pointer-events-none animate-float"
        style={{ background: '#00B5FF', animationDelay: '-3s' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center py-32">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border glass-card mb-8"
        >
          <span className="status-dot" aria-hidden="true" />
          <span className="text-text-secondary text-sm font-medium">
            Available for senior roles · Noida, India
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          <span className="text-text-primary">Hi, I'm </span>
          <span className="gradient-text">Yash Deep</span>
          <br />
          <span className="text-text-secondary text-[0.7em]">Senior React Engineer</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
        >
          8+ years crafting high-performance, accessible React applications.
          Currently shaping developer tools at{' '}
          <span className="text-text-primary font-medium">Oracle</span> as Member of Technical Staff.
        </motion.p>

        {/* Rotating tech keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          aria-label="Core technologies"
        >
          {WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="code-chip"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-surface font-display font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="mailto:yashdc96@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-text-primary font-display font-semibold text-sm hover:border-accent hover:text-accent transition-all glass-card"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-20 flex flex-col items-center gap-2 text-text-muted"
          aria-hidden="true"
        >
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
