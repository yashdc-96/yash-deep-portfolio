// src/components/sections/About.jsx
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const STATS = [
  { value: '8+', label: 'Years with React' },
  { value: '3', label: 'Companies' },
  { value: '5+', label: 'Major Projects' },
  { value: '50K+', label: 'Daily Users Served' },
]

const VALUES = [
  {
    icon: '⚡',
    title: 'Performance-First',
    desc: 'I obsess over Core Web Vitals, bundle budgets, and runtime efficiency. Fast UIs are respectful UIs.',
  },
  {
    icon: '♿',
    title: 'Accessibility by Default',
    desc: 'WCAG 2.1 AA compliance isn\'t a checkbox — it\'s baked into every component I build from day one.',
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    desc: 'From folder structure to state management patterns, I design systems that scale to 50+ engineers.',
  },
  {
    icon: '🤖',
    title: 'AI-Augmented Dev',
    desc: 'I leverage Cline AI and modern coding agents to ship higher quality code faster — without shortcuts.',
  },
]

/**
 * About section — personal introduction, stats, and values.
 */
export function About() {
  return (
    <section id="about" className="py-32 relative" aria-label="About Yash Deep">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <SectionHeading
              label="// about me"
              title="Turning complex problems into elegant UIs"
            />

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I'm a Senior Frontend Engineer based in{' '}
                <span className="text-text-primary font-medium">Noida, India</span> with over 8 years
                of deep React experience. I currently work as{' '}
                <span className="text-text-primary font-medium">Member of Technical Staff (Frontend)</span>{' '}
                at Oracle, where I architect developer tooling used by engineers across the globe.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Before Oracle, I spent 4 years at Infosys delivering React applications for the{' '}
                <span className="text-text-primary font-medium">UK Government</span> (electric
                vehicle fleet management), public transport route optimization, and Allstate's
                enterprise insurance portal — collectively serving hundreds of thousands of users.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My engineering philosophy centres on three things:{' '}
                <span className="text-accent">performance</span>,{' '}
                <span className="text-accent">accessibility</span>, and{' '}
                <span className="text-accent">maintainability</span>. I believe the best frontend
                code is invisible — it just works, for everyone, on every device.
              </motion.p>
            </div>

            {/* Contact quick-links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { href: 'mailto:yashdc96@gmail.com', label: 'yashdc96@gmail.com', icon: '📧' },
                { href: 'tel:+919810580402', label: '+91 98105 80402', icon: '📱' },
                { href: 'https://www.linkedin.com/in/yash-deep-78a392188/', label: 'LinkedIn', icon: '🔗', external: true },
              ].map(({ href, label, icon, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-all"
                >
                  <span aria-hidden="true">{icon}</span>
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + values */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
              aria-label="Career statistics"
            >
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5 text-center"
                >
                  <p className="font-display text-3xl font-bold text-accent mb-1">{value}</p>
                  <p className="text-text-muted text-sm">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Values */}
            <div className="space-y-3" aria-label="Engineering values">
              {VALUES.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 glass-card rounded-xl p-4 group hover:border-accent/20 transition-all"
                >
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary text-sm mb-1 group-hover:text-accent transition-colors">
                      {title}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
