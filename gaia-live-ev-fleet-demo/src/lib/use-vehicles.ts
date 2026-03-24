import { useMemo } from 'react'
import { useVehiclesContext } from './use-vehicles-context'

export const useVehicles = () => {
  const { vehicles, loading, error } = useVehiclesContext()

  const stats = useMemo(() => {
    const inTransit = vehicles.filter((v) => v.status === 'in-transit').length
    const charging = vehicles.filter((v) => v.status === 'charging').length
    const avgBattery = vehicles.length
      ? Math.round(vehicles.reduce((sum, v) => sum + v.battery, 0) / vehicles.length)
      : 0
    const avgSpeed = vehicles.length ? Math.round(vehicles.reduce((sum, v) => sum + v.speed, 0) / vehicles.length) : 0

    return {
      totalVehicles: vehicles.length,
      inTransit,
      charging,
      avgBattery,
      avgSpeed,
    }
  }, [vehicles])

  return { vehicles, loading, error, stats }
}
