import { LoadingSkeleton } from '../components/loading-skeleton'
import { LiveMap } from '../components/live-map'
import { useVehicles } from '../lib/use-vehicles'

export function LiveMapPage() {
  const { vehicles, loading, error } = useVehicles()

  if (loading) return <LoadingSkeleton />

  return (
    <section className="space-y-4">
      <header className="glass-card p-5">
        <h2 className="text-xl font-semibold">Live Vehicle Map</h2>
        <p className="text-sm text-muted-foreground">
          Realtime vehicle GPS from Firebase; green markers are charging hubs — they cluster when zoomed out and expand as you zoom in.
        </p>
      </header>
      {error ? <p className="text-sm text-amber-300">{error}</p> : null}
      <LiveMap vehicles={vehicles} />
    </section>
  )
}
