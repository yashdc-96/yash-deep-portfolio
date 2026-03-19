// src/components/sections/Skills.jsx
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories, techBadges } from '@/data/experience'

/**
 * Individual animated skill bar.
 */
function SkillBar({ name, level, years, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-text-muted">
          {years}yr · {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}% proficiency`}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, var(--color-accent), #00B5FF)',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

/**
 * Skills section — categorised skill bars + tech badge cloud.
 */
export function Skills() {
  return (
    <section id="skills" className="py-32 relative" aria-label="Technical skills">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 20% 60%, rgba(0,229,160,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <SectionHeading
          label="// skills"
          title="Tech Stack & Expertise"
          subtitle="8 years deep in the React ecosystem. Here's what I reach for on day one of any project."
        />

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-16"
          aria-label="Key technologies"
          role="list"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              role="listitem"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 rounded-lg glass-card text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill categories grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="Skills by category"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              className="glass-card rounded-2xl p-6"
              aria-label={`${category.label} skills`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl" aria-hidden="true">{category.icon}</span>
                <h3 className="font-display font-semibold text-text-primary text-sm">
                  {category.label}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    years={skill.years}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tooling highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass-card rounded-2xl p-6 md:p-8 border-accent/20"
          style={{ borderColor: 'rgba(0,229,160,0.15)' }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl shrink-0" aria-hidden="true">🤖</span>
            <div>
              <h3 className="font-display font-semibold text-text-primary mb-2">
                AI-Augmented Development
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I actively use <span className="text-accent font-medium">Cline AI</span> and
                modern coding agents as part of my daily workflow — not as a crutch, but as a
                force multiplier. I know when to trust AI output, when to override it, and
                how to prompt it for production-quality code. This portfolio itself was
                scaffolded with Cline AI, then refined with senior-level judgment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
