// src/components/sections/Contact.jsx
import { useState, useReducer } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

// ── Form state machine via useReducer ─────────────────────────────────────────
const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  errors: {},
  status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
}

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'SET_STATUS':
      return { ...state, status: action.status }
    case 'RESET':
      return { ...initialFormState }
    default:
      return state
  }
}

// ── Validation ────────────────────────────────────────────────────────────────
function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Name is required'
  if (!email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email'
  if (!message.trim()) errors.message = 'Message is required'
  else if (message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

// ── Contact info cards ────────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon: '📧',
    label: 'Email',
    value: 'yashdc96@gmail.com',
    href: 'mailto:yashdc96@gmail.com',
    description: 'Best for detailed discussions',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 98105 80402',
    href: 'tel:+919810580402',
    description: 'Available IST business hours',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'yash-deep-78a392188',
    href: 'https://www.linkedin.com/in/yash-deep-78a392188/',
    description: 'Connect professionally',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Noida, India',
    href: null,
    description: 'Open to remote worldwide',
  },
]

/**
 * Contact section — split layout with contact info + form.
 * Form uses useReducer for clean state management (demonstrates advanced patterns).
 * Sends via EmailJS (configured via .env variables).
 */
export function Contact() {
  const [form, dispatch] = useReducer(formReducer, initialFormState)

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate(form)
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors })
      return
    }

    dispatch({ type: 'SET_STATUS', status: 'loading' })

    try {
      // EmailJS integration — requires .env vars to be set
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        // Dev mode: simulate success if EmailJS not configured
        await new Promise((r) => setTimeout(r, 1200))
        dispatch({ type: 'SET_STATUS', status: 'success' })
        setTimeout(() => dispatch({ type: 'RESET' }), 4000)
        return
      }

      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'Portfolio Enquiry',
          message: form.message,
        },
        publicKey
      )
      dispatch({ type: 'SET_STATUS', status: 'success' })
      setTimeout(() => dispatch({ type: 'RESET' }), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      dispatch({ type: 'SET_STATUS', status: 'error' })
    }
  }

  const isLoading = form.status === 'loading'
  const isSuccess = form.status === 'success'
  const isError = form.status === 'error'

  return (
    <section id="contact" className="py-32 relative" aria-label="Contact Yash Deep">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,229,160,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <SectionHeading
          label="// contact"
          title="Let's Work Together"
          subtitle="Open to senior frontend, lead, or staff engineer roles. Always happy to talk React, architecture, or AI tooling."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-text-primary text-lg mb-6">
              Get in touch
            </h3>

            {CONTACT_INFO.map(({ icon, label, value, href, description, external }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 glass-card rounded-xl p-4 group hover:border-accent/20 transition-all"
              >
                <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                <div className="min-w-0">
                  <p className="text-text-muted text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-text-primary text-sm font-medium hover:text-accent transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-text-primary text-sm font-medium">{value}</p>
                  )}
                  <p className="text-text-muted text-xs mt-0.5">{description}</p>
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 px-4 py-3 glass-card rounded-xl border-accent/20 mt-6"
              style={{ borderColor: 'rgba(0,229,160,0.2)' }}
            >
              <span className="status-dot shrink-0" aria-hidden="true" />
              <p className="text-text-secondary text-sm">
                <span className="text-text-primary font-medium">Currently open</span> to senior / staff
                frontend roles, contract & consulting.
              </p>
            </motion.div>
          </div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-text-muted mb-1.5 font-medium">
                    Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={!!form.errors.name}
                    aria-describedby={form.errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-surface-3 border text-text-primary text-sm placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:bg-surface-4 ${
                      form.errors.name ? 'border-red-500/60' : 'border-border'
                    }`}
                  />
                  {form.errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">{form.errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs text-text-muted mb-1.5 font-medium">
                    Email <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={!!form.errors.email}
                    aria-describedby={form.errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-surface-3 border text-text-primary text-sm placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:bg-surface-4 ${
                      form.errors.email ? 'border-red-500/60' : 'border-border'
                    }`}
                  />
                  {form.errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">{form.errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs text-text-muted mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity, collaboration, etc."
                  className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-border text-text-primary text-sm placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:bg-surface-4"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs text-text-muted mb-1.5 font-medium">
                  Message <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the role, project, or what you have in mind..."
                  required
                  aria-required="true"
                  aria-invalid={!!form.errors.message}
                  aria-describedby={form.errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-surface-3 border text-text-primary text-sm placeholder:text-text-muted outline-none transition-all focus:border-accent/50 focus:bg-surface-4 resize-none ${
                    form.errors.message ? 'border-red-500/60' : 'border-border'
                  }`}
                />
                {form.errors.message && (
                  <p id="message-error" role="alert" className="mt-1 text-xs text-red-400">{form.errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-full py-3.5 rounded-xl font-display font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  isSuccess
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                    : isError
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-accent text-surface hover:bg-accent/90 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed'
                }`}
                aria-live="polite"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>✅ Message sent! I'll be in touch soon.</>
                ) : isError ? (
                  <>❌ Failed to send. Try emailing directly.</>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
