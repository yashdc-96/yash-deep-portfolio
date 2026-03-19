// src/hooks/useScrollAnimation.js
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Returns a ref + boolean indicating if the element has entered the viewport.
 * Used for scroll-triggered animations throughout the portfolio.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.1] - Intersection threshold (0–1)
 * @param {boolean} [options.once=true] - Only trigger once (re-animate on false)
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export function useScrollAnimation({ threshold = 0.1, once = true } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount: threshold })
  return { ref, inView }
}


// src/hooks/useActiveSection.js

/**
 * Tracks which section is currently in the viewport.
 * Used by Navbar to highlight the active nav item.
 *
 * @param {string[]} sectionIds - Array of section element IDs
 * @returns {string} - ID of the currently active section
 */
import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px', // triggers when section is ~40% from top
      threshold: 0,
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(observerCallback, observerOptions)
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sectionIds])

  return activeSection
}
