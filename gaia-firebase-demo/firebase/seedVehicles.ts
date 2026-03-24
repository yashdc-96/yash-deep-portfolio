import { VehicleTelemetry } from "@/types/vehicle";

export const initialVehicles: VehicleTelemetry[] = [
  { id: "ev-001", name: "Gaia Falcon", lat: 28.6139, lng: 77.209, speed: 38, battery: 87, status: "in_transit", updatedAt: Date.now() },
  { id: "ev-002", name: "Gaia Nova", lat: 28.6219, lng: 77.2185, speed: 26, battery: 74, status: "in_transit", updatedAt: Date.now() },
  { id: "ev-003", name: "Gaia Pulse", lat: 28.6052, lng: 77.2235, speed: 0, battery: 42, status: "charging", updatedAt: Date.now() },
  { id: "ev-004", name: "Gaia Volt", lat: 28.5991, lng: 77.2068, speed: 16, battery: 63, status: "idle", updatedAt: Date.now() },
  { id: "ev-005", name: "Gaia Orbit", lat: 28.6328, lng: 77.1992, speed: 0, battery: 31, status: "maintenance", updatedAt: Date.now() },
  { id: "ev-006", name: "Gaia Lynx", lat: 28.6265, lng: 77.2362, speed: 34, battery: 79, status: "in_transit", updatedAt: Date.now() },
];
