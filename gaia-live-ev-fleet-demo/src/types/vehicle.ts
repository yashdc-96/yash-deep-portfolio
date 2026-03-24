export type VehicleStatus = 'idle' | 'charging' | 'in-transit' | 'maintenance'

export interface VehicleTelemetry {
  id: string
  name: string
  lat: number
  lng: number
  speed: number
  battery: number
  status: VehicleStatus
  updatedAt: number
}
