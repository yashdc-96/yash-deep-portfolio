import { StatCard } from '../components/stat-card'
import { LoadingSkeleton } from '../components/loading-skeleton'
import { useVehicles } from '../lib/use-vehicles'

export function DashboardPage() {
  const { loading, error, stats } = useVehicles()

  return (
    <section className="space-y-6">
      <header className="glass-card p-6">
        <p className="text-sm text-primary">Yash Deep</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Senior UX Engineer | AI-Augmented Front-End Architect
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Real-time EV fleet operations dashboard built for design-forward front-end leadership portfolios.
        </p>
      </header>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Vehicles" value={stats.totalVehicles} />
          <StatCard label="In Transit" value={stats.inTransit} />
          <StatCard label="Avg Speed" value={`${stats.avgSpeed} km/h`} />
          <StatCard label="Avg Battery" value={`${stats.avgBattery}%`} />
        </div>
      )}

      {error ? (
        <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-100">{error}</div>
      ) : null}
    </section>
  )
}
