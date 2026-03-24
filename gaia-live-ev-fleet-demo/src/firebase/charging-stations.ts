import type { ChargingStation } from '../types/charging-station'

/**
 * Static depot hubs around Greater London — placed in tight groups so
 * `leaflet.markercluster` merges them when zoomed out and expands when zoomed in.
 */
export const chargingStations: ChargingStation[] = [
  // Westminster cluster
  { id: 'cs-w1', name: 'Victoria St Ultra', lat: 51.4975, lng: -0.1357, powerKw: 150, available: 2, total: 4 },
  { id: 'cs-w2', name: 'Parliament Square', lat: 51.5008, lng: -0.1262, powerKw: 50, available: 1, total: 2 },
  { id: 'cs-w3', name: 'Whitehall Rapid', lat: 51.5033, lng: -0.1295, powerKw: 75, available: 3, total: 4 },
  { id: 'cs-w4', name: 'St James Park', lat: 51.4991, lng: -0.1339, powerKw: 22, available: 0, total: 2 },
  { id: 'cs-w5', name: 'Trafalgar Hub', lat: 51.508, lng: -0.1281, powerKw: 350, available: 1, total: 2 },
  // Canary Wharf cluster
  { id: 'cs-cw1', name: 'Canary Wharf Tower', lat: 51.5054, lng: -0.0235, powerKw: 150, available: 4, total: 6 },
  { id: 'cs-cw2', name: 'Jubilee Park', lat: 51.5034, lng: -0.0195, powerKw: 50, available: 2, total: 4 },
  { id: 'cs-cw3', name: 'Marsh Wall Depot', lat: 51.5064, lng: -0.0188, powerKw: 75, available: 1, total: 3 },
  { id: 'cs-cw4', name: 'South Dock', lat: 51.5019, lng: -0.0212, powerKw: 22, available: 2, total: 2 },
  { id: 'cs-cw5', name: 'Crossrail Place', lat: 51.5047, lng: -0.0175, powerKw: 150, available: 2, total: 4 },
  { id: 'cs-cw6', name: 'Harbour Exchange', lat: 51.5072, lng: -0.0161, powerKw: 350, available: 0, total: 2 },
  // Paddington / Marylebone cluster
  { id: 'cs-p1', name: 'Paddington Station', lat: 51.5154, lng: -0.1755, powerKw: 150, available: 3, total: 6 },
  { id: 'cs-p2', name: 'Edgware Road', lat: 51.5198, lng: -0.1677, powerKw: 50, available: 1, total: 2 },
  { id: 'cs-p3', name: 'Marylebone Lane', lat: 51.5139, lng: -0.1533, powerKw: 22, available: 2, total: 2 },
  { id: 'cs-p4', name: 'Hyde Park Corner', lat: 51.5028, lng: -0.1528, powerKw: 75, available: 2, total: 3 },
  { id: 'cs-p5', name: "Bishop's Bridge", lat: 51.5174, lng: -0.1789, powerKw: 350, available: 1, total: 2 },
]
