import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="glass-card mx-auto mt-20 max-w-xl p-8 text-center">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="mt-2 text-muted-foreground">The route you opened does not exist in this demo app.</p>
      <Link to="/" className="mt-4 inline-block rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
        Return to dashboard
      </Link>
    </section>
  )
}
