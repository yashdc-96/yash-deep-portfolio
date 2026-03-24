import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import type { VehicleTelemetry } from '../types/vehicle'
import type { ChargingStation } from '../types/charging-station'
import { chargingStations as defaultStations } from '../firebase/charging-stations'

const vehicleIcon = new L.DivIcon({
  className: 'custom-marker',
  html: '<div style="width: 14px; height: 14px; border-radius: 999px; background:#3b82f6; border:2px solid #fff; box-shadow:0 0 0 6px rgba(59,130,246,.25)"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
})

const chargingIcon = new L.DivIcon({
  className: 'charging-marker',
  html: '<div style="width: 16px; height: 16px; border-radius: 6px; background:#10b981; border:2px solid #fff; box-shadow:0 0 0 5px rgba(16,185,129,.3); display:flex; align-items:center; justify-content:center; font-size:10px;">⚡</div>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
})

interface LiveMapProps {
  vehicles: VehicleTelemetry[]
  /** Optional override (e.g. tests); defaults to bundled London hubs */
  chargingStations?: ChargingStation[]
}

export function LiveMap({ vehicles, chargingStations = defaultStations }: LiveMapProps) {
  return (
    <div className="glass-card h-[calc(100vh-9.5rem)] overflow-hidden p-2">
      <MapContainer center={[51.5072, -0.1276]} zoom={13} className="h-full w-full rounded-xl">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vehicles.map((vehicle) => (
          <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]} icon={vehicleIcon}>
            <Popup>
              <div className="space-y-1 text-xs">
                <p className="font-semibold">{vehicle.name}</p>
                <p>Status: {vehicle.status}</p>
                <p>Speed: {vehicle.speed} km/h</p>
                <p>Battery: {vehicle.battery}%</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {/*
          Marker clusters: radius scales with zoom — far out = fewer, larger clusters;
          zoom in = split into sub-clusters / individual chargers until disableClusteringAtZoom.
        */}
        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={72}
          spiderfyOnMaxZoom
          showCoverageOnHover={false}
          disableClusteringAtZoom={17}
        >
          {chargingStations.map((station) => (
            <Marker key={station.id} position={[station.lat, station.lng]} icon={chargingIcon}>
              <Popup>
                <div className="space-y-1 text-xs">
                  <p className="font-semibold">{station.name}</p>
                  <p>
                    {station.powerKw} kW · {station.available}/{station.total} available
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}
