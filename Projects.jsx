// src/components/sections/Projects.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Featured' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'government', label: 'Government' },
  { id: 'demo', label: 'Demo' },
]

/**
 * Projects section — filterable project grid.
 * Filter state is purely local (no Redux needed here — good demonstration
 * of knowing WHEN to use Redux vs local state).
 */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = projects.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return p.featured
    return p.type === activeFilter
  })

  return (
    <section id="projects" className="py-32 relative" aria-label="Portfolio projects">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,181,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <SectionHeading
          label="// projects"
          title="Things I've Built"
          subtitle="From UK Government fleet systems to enterprise Oracle tooling — each project pushed my React craft further."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeFilter === id}
              onClick={() => setActiveFilter(id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeFilter === id
                  ? 'bg-accent text-surface font-semibold'
                  : 'glass-card text-text-secondary hover:text-text-primary hover:border-white/10'
                }
              `}
            >
              {label}
              <span className="ml-2 text-xs opacity-60">
                {id === 'all'
                  ? projects.length
                  : id === 'featured'
                  ? projects.filter((p) => p.featured).length
                  : projects.filter((p) => p.type === id).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
          aria-live="polite"
          aria-label={`Showing ${filtered.length} projects`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16" role="status">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  )
}
