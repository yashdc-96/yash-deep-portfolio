// src/components/layout/Footer.jsx

/**
 * Footer — minimal, elegant.
 * Shows copyright, social links, and the Cline AI credit.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32" role="contentinfo">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-text-muted text-sm">
              © {year}{' '}
              <span className="text-text-secondary font-medium">Yash Deep</span>
              {' '}· Built with{' '}
              <span className="text-accent">❤️</span>
              {' '}using{' '}
              <a
                href="https://github.com/cline/cline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors underline underline-offset-2"
              >
                Cline AI
              </a>
            </p>
          </div>

          {/* Right — social links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-4" role="list">
              <li>
                <a
                  href="https://www.linkedin.com/in/yash-deep-78a392188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-1.5"
                  aria-label="LinkedIn profile"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:yashdc96@gmail.com"
                  className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-1.5"
                  aria-label="Email Yash Deep"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
