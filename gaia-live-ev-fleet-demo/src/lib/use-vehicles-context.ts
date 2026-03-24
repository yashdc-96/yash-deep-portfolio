import { useContext } from 'react'
import { VehiclesContext } from './vehicles-store'

export const useVehiclesContext = () => {
  const context = useContext(VehiclesContext)
  if (!context) {
    throw new Error('useVehiclesContext must be used within VehiclesProvider')
  }
  return context
}
