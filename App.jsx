// src/App.jsx
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/themeSlice'

// Layout
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Sections
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

// UI
import { ScrollProgress } from '@/components/ui/SectionHeading'

/**
 * Root App component.
 *
 * Responsibilities:
 * - Syncs Redux theme state → <html> class for Tailwind dark mode
 * - Renders the single-page layout: Navbar → sections → Footer
 * - Provides a scroll progress bar (purely presentational)
 *
 * Note on architecture: sections are lazy-loadable with React.lazy()
 * for an easy performance win on initial load if the bundle grows.
 */
export default function App() {
  const theme = useSelector(selectTheme)

  // Keep <html> class in sync with Redux theme state
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-surface text-text-primary relative">
      {/* Scroll progress indicator — fixed, z-[9999] */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
