import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { onValue, ref, set } from 'firebase/database'
import { realtimeDb } from './firebase'
import type { VehicleTelemetry, VehicleStatus } from '../types/vehicle'
import { VehiclesContext } from './vehicles-store'

const baseVehicles: Omit<VehicleTelemetry, 'updatedAt'>[] = [
  { id: 'ev-101', name: 'Gaia-101', lat: 51.5076, lng: -0.1274, speed: 42, battery: 91, status: 'in-transit' },
  { id: 'ev-102', name: 'Gaia-102', lat: 51.4989, lng: -0.1416, speed: 0, battery: 73, status: 'charging' },
  { id: 'ev-103', name: 'Gaia-103', lat: 51.5138, lng: -0.0984, speed: 31, battery: 66, status: 'in-transit' },
  { id: 'ev-104', name: 'Gaia-104', lat: 51.5216, lng: -0.1138, speed: 22, battery: 49, status: 'in-transit' },
  { id: 'ev-105', name: 'Gaia-105', lat: 51.5031, lng: -0.1048, speed: 0, battery: 38, status: 'idle' },
  { id: 'ev-106', name: 'Gaia-106', lat: 51.4948, lng: -0.1199, speed: 12, battery: 84, status: 'maintenance' },
]

const statuses: VehicleStatus[] = ['idle', 'charging', 'in-transit', 'maintenance']
const statusProbability = (battery: number): VehicleStatus => {
  if (battery < 10) return 'maintenance'
  if (battery < 20) return 'charging'
  return statuses[Math.floor(Math.random() * statuses.length)]
}

const simulateVehicles = (current: VehicleTelemetry[]): VehicleTelemetry[] =>
  current.map((vehicle) => {
    const moved = vehicle.status === 'in-transit' ? (Math.random() - 0.5) * 0.01 : 0
    const speed = vehicle.status === 'in-transit' ? Math.max(10, Math.round(vehicle.speed + (Math.random() - 0.5) * 8)) : 0
    const batteryDelta = vehicle.status === 'charging' ? 3 : -Math.floor(Math.random() * 3)
    const battery = Math.min(100, Math.max(5, vehicle.battery + batteryDelta))

    return {
      ...vehicle,
      lat: Number((vehicle.lat + moved).toFixed(6)),
      lng: Number((vehicle.lng + moved * 0.8).toFixed(6)),
      speed,
      battery,
      status: statusProbability(battery),
      updatedAt: Date.now(),
    }
  })

export function VehiclesProvider({ children }: PropsWithChildren) {
  const [vehicles, setVehicles] = useState<VehicleTelemetry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const seedVehicles = useCallback(async () => {
    const seed: Record<string, VehicleTelemetry> = {}
    baseVehicles.forEach((vehicle) => {
      seed[vehicle.id] = { ...vehicle, updatedAt: Date.now() }
    })
    await set(ref(realtimeDb, 'vehicles'), seed)
  }, [])

  useEffect(() => {
    let isMounted = true
    seedVehicles().catch(() => {
      if (isMounted) setError('Unable to seed initial fleet data.')
    })

    const dbRef = ref(realtimeDb, 'vehicles')
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        if (!isMounted) return
        const values = snapshot.val()
        if (!values) {
          setVehicles([])
          setLoading(false)
          return
        }
        const nextVehicles = Object.values(values) as VehicleTelemetry[]
        setVehicles(nextVehicles)
        setLoading(false)
      },
      () => {
        if (isMounted) {
          setError('Realtime sync failed. Check Firebase config and rules.')
          setLoading(false)
        }
      },
    )

    const interval = window.setInterval(() => {
      setVehicles((current) => {
        if (!current.length) return current
        const next = simulateVehicles(current)
        const payload = Object.fromEntries(next.map((item) => [item.id, item]))
        set(ref(realtimeDb, 'vehicles'), payload).catch(() => {
          setError('Vehicle simulation write failed.')
        })
        return next
      })
    }, 3000)

    return () => {
      isMounted = false
      unsubscribe()
      window.clearInterval(interval)
    }
  }, [seedVehicles])

  const value = useMemo(() => ({ vehicles, loading, error }), [vehicles, loading, error])
  return <VehiclesContext.Provider value={value}>{children}</VehiclesContext.Provider>
}
