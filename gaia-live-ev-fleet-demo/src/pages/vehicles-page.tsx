import { LoadingSkeleton } from '../components/loading-skeleton'
import { VehicleTable } from '../components/vehicle-table'
import { useVehicles } from '../lib/use-vehicles'

export function VehiclesPage() {
  const { vehicles, loading } = useVehicles()

  return (
    <section className="space-y-4">
      <header className="glass-card p-5">
        <h2 className="text-xl font-semibold">Vehicles</h2>
        <p className="text-sm text-muted-foreground">Operations list with real-time status, speed and battery monitoring.</p>
      </header>
      {loading ? <LoadingSkeleton /> : <VehicleTable vehicles={vehicles} />}
    </section>
  )
}
