export interface ChargingStation {
  id: string
  name: string
  lat: number
  lng: number
  /** Charger capacity (kW) — for popup context */
  powerKw: number
  /** Simulated free connectors */
  available: number
  total: number
}
