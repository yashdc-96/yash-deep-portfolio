import type { VehicleTelemetry } from '../types/vehicle'

const statusColor: Record<VehicleTelemetry['status'], string> = {
  idle: 'bg-slate-400/20 text-slate-300',
  charging: 'bg-emerald-400/20 text-emerald-300',
  'in-transit': 'bg-blue-400/20 text-blue-300',
  maintenance: 'bg-amber-400/20 text-amber-300',
}

export function VehicleTable({ vehicles }: { vehicles: VehicleTelemetry[] }) {
  return (
    <div className="glass-card overflow-x-auto p-4">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="text-muted-foreground">
            <th className="py-3">Vehicle</th>
            <th className="py-3">Status</th>
            <th className="py-3">Speed</th>
            <th className="py-3">Battery</th>
            <th className="py-3">Coordinates</th>
            <th className="py-3">Updated</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="border-t border-border/70">
              <td className="py-4 font-medium">{vehicle.name}</td>
              <td className="py-4">
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[vehicle.status]}`}>
                  {vehicle.status}
                </span>
              </td>
              <td className="py-4">{vehicle.speed} km/h</td>
              <td className="py-4">{vehicle.battery}%</td>
              <td className="py-4">
                {vehicle.lat.toFixed(4)}, {vehicle.lng.toFixed(4)}
              </td>
              <td className="py-4 text-muted-foreground">{new Date(vehicle.updatedAt).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
