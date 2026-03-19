// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme, selectIsDark } from '@/store/themeSlice'
import { useActiveSection } from '@/hooks/useScrollAnimation'
import { cn } from '@/utils/cn'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact']

/**
 * Sticky navbar with:
 * - Active section highlighting via IntersectionObserver
 * - Mobile hamburger menu with Framer Motion
 * - Redux-driven dark/light mode toggle
 * - Frosted glass blur on scroll
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dispatch = useDispatch()
  const isDark = useSelector(selectIsDark)
  const activeSection = useActiveSection(SECTION_IDS)

  // Add blur + border on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    // Smooth scroll with offset for navbar height
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <nav
          className="section-container h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-display font-bold text-lg tracking-tight text-text-primary hover:text-accent transition-colors"
            aria-label="Yash Deep — scroll to top"
          >
            <span className="text-accent">Y</span>ash Deep
            <span className="text-accent">.</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-0 rounded-lg bg-accent-dim"
                        transition={{ type: 'spring', duration: 0.4 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-3 transition-all"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
              )}
            </button>

            {/* CTA */}
            <a
              href="mailto:yashdc96@gmail.com"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-surface hover:bg-accent/90 transition-colors font-display"
            >
              Hire me
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-3 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{mobileOpen ? 'Close' : 'Open'} menu</span>
              <div className="w-5 flex flex-col gap-1" aria-hidden="true">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface-1/95 backdrop-blur-xl border-b border-border md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="section-container py-4 flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-3 rounded-lg transition-all"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:yashdc96@gmail.com"
                  className="block w-full text-center px-4 py-3 rounded-lg text-sm font-medium bg-accent text-surface font-display"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
