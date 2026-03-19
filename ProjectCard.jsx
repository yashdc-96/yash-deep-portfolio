// src/components/ui/ProjectCard.jsx
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

/**
 * ProjectCard — displays a single portfolio project.
 * Features: colour-coded accent, tech stack chips, highlight list, external links.
 *
 * @param {Object} props
 * @param {import('@/data/projects').projects[0]} props.project
 * @param {number} props.index - Used for staggered animation delay
 */
export function ProjectCard({ project, index = 0 }) {
  const {
    title, role, company, period, tagline, description,
    highlights, tech, color, icon, link, repo, type, isDemo,
  } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        'glass-card rounded-2xl p-6 md:p-8 transition-all duration-300',
        'group relative overflow-hidden'
      )}
      aria-label={`Project: ${title}`}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${color}0D 0%, transparent 60%)`,
        }}
      />

      {/* Top row: icon + type badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className="text-3xl w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
            aria-hidden="true"
          >
            {icon}
          </span>
          <div>
            <span
              className="text-2xs font-mono uppercase tracking-widest px-2 py-1 rounded-md font-medium"
              style={{ color, background: `${color}15` }}
            >
              {isDemo ? 'Demo Project' : type}
            </span>
          </div>
        </div>

        {/* External links */}
        <div className="flex gap-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-accent transition-colors hover:bg-accent-dim"
              aria-label={`Live demo of ${title}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-accent transition-colors hover:bg-accent-dim"
              aria-label={`GitHub repo for ${title}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Title + meta */}
      <h3 className="font-display text-xl font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-sm font-mono mb-1">
        {company} · {period}
      </p>
      <p className="text-text-secondary text-sm mb-4 italic">{tagline}</p>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">{description}</p>

      {/* Highlights */}
      <ul className="space-y-2 mb-6" aria-label="Key highlights">
        {highlights.slice(0, 3).map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-text-secondary">
            <span style={{ color }} className="mt-0.5 shrink-0" aria-hidden="true">▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack chips */}
      <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
        {tech.map((t) => (
          <span key={t} className="code-chip" role="listitem">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
