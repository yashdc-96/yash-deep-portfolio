// src/components/sections/Experience.jsx
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

/**
 * Experience section — vertical timeline of work history.
 * Each entry shows: title, company, period, responsibilities, tech stack.
 */
export function Experience() {
  return (
    <section id="experience" className="py-32 relative" aria-label="Work experience">
      {/* Subtle left-side background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)', opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="section-container">
        <SectionHeading
          label="// experience"
          title="Where I've Worked"
          subtitle="8+ years shipping production React across enterprise, government, and startup environments."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), rgba(0,229,160,0.1) 80%, transparent)' }}
            aria-hidden="true"
          />

          <ol className="space-y-10" aria-label="Work history timeline">
            {experience.map((job, index) => (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-4 md:left-6 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: job.color,
                    background: 'var(--color-surface)',
                    boxShadow: `0 0 12px ${job.color}40`,
                  }}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: job.color }} />
                </div>

                {/* Card */}
                <article
                  className="glass-card rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all group"
                  aria-label={`${job.title} at ${job.company}`}
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl" aria-hidden="true">{job.logo}</span>
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ color: job.color, background: `${job.color}15` }}
                        >
                          {job.type}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-white transition-colors">
                        {job.title}
                      </h3>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary text-sm hover:text-accent transition-colors"
                      >
                        {job.company} ↗
                      </a>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-text-primary text-sm font-medium font-mono">{job.period}</p>
                      <p className="text-text-muted text-xs">{job.duration} · {job.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{job.description}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-6" aria-label="Key responsibilities">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-2 text-sm text-text-secondary">
                        <span style={{ color: job.color }} className="mt-0.5 shrink-0" aria-hidden="true">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <span key={t} className="code-chip" role="listitem">{t}</span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Total experience callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-accent/20">
            <span className="status-dot" aria-hidden="true" />
            <span className="text-text-secondary text-sm">
              <span className="text-text-primary font-semibold">8+ years</span> total React experience ·
              Open to senior / lead frontend roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
