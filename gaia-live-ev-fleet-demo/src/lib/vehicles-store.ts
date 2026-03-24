import { createContext } from 'react'
import type { VehicleTelemetry } from '../types/vehicle'

export interface VehiclesContextValue {
  vehicles: VehicleTelemetry[]
  loading: boolean
  error: string | null
}

export const VehiclesContext = createContext<VehiclesContextValue | null>(null)
