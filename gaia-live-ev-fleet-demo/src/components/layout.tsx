import { Link, NavLink, Outlet } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/live-map', label: 'Live Map' },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/projects', label: 'My Projects' },
  { to: '/about', label: 'About' },
]

export function AppLayout() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <header className="glass-card sticky top-4 z-[1000] mb-6 flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="text-sm font-semibold tracking-wide text-primary">
          Gaia Live - EV Fleet Demo
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/60 dark:hover:bg-slate-700/60',
                  isActive ? 'bg-primary/90 text-primary-foreground' : 'text-muted-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle dark mode"
            className="ml-2 rounded-xl border border-border/70 p-2 text-muted-foreground transition hover:bg-white/60 dark:hover:bg-slate-700/60"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
