import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { initialVehicles } from "@/firebase/seedVehicles";
import { featuredProjects } from "@/firebase/projects";
import { firestore, realtimeDb } from "@/lib/firebase";
import { PortfolioProject } from "@/types/project";
import { VehicleStatus, VehicleTelemetry } from "@/types/vehicle";

interface FirebaseContextValue {
  vehicles: VehicleTelemetry[];
  projects: PortfolioProject[];
  loading: boolean;
  error: string | null;
}

const FirebaseContext = createContext<FirebaseContextValue | undefined>(undefined);

const VEHICLES_PATH = "fleet/vehicles";

function getRandomStatus(current: VehicleStatus): VehicleStatus {
  const statuses: VehicleStatus[] = ["idle", "charging", "in_transit", "maintenance"];
  if (Math.random() < 0.7) return current;
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function simulateVehicle(vehicle: VehicleTelemetry): VehicleTelemetry {
  const drift = () => (Math.random() - 0.5) * 0.0034;
  const nextSpeed = Math.max(0, Math.min(120, vehicle.speed + (Math.random() - 0.5) * 18));
  const consumption = nextSpeed > 0 ? Math.random() * 1.4 : -0.3;
  return {
    ...vehicle,
    lat: vehicle.lat + drift(),
    lng: vehicle.lng + drift(),
    speed: Math.round(nextSpeed),
    battery: Math.round(Math.max(5, Math.min(100, vehicle.battery - consumption))),
    status: getRandomStatus(vehicle.status),
    updatedAt: Date.now(),
  };
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [vehicles, setVehicles] = useState<VehicleTelemetry[]>([]);
  const [projects, setProjects] = useState<PortfolioProject[]>(featuredProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const vehiclesRef = ref(realtimeDb, VEHICLES_PATH);

    const bootstrap = async () => {
      try {
        await set(vehiclesRef, initialVehicles);
        const projectsQuery = query(collection(firestore, "projects"), limit(10));
        const snapshot = await getDocs(projectsQuery);
        if (!snapshot.empty && mounted) {
          const fromFirestore = snapshot.docs.map((doc) => doc.data() as PortfolioProject);
          setProjects(fromFirestore);
        }
      } catch (e) {
        if (mounted) {
          setError("Firebase is not configured yet. Add your Firebase keys in lib/firebase.ts.");
        }
      }
    };

    void bootstrap();

    const unsubscribe = onValue(
      vehiclesRef,
      (snapshot) => {
        const raw = snapshot.val() as VehicleTelemetry[] | null;
        if (mounted) {
          setVehicles(raw ?? []);
          setLoading(false);
        }
      },
      () => {
        if (mounted) {
          setError("Unable to read telemetry stream from Firebase Realtime Database.");
          setLoading(false);
        }
      }
    );

    const timer = setInterval(() => {
      setVehicles((prev) => {
        if (!prev.length) return prev;
        const next = prev.map(simulateVehicle);
        void set(vehiclesRef, next);
        return next;
      });
    }, 3000);

    return () => {
      mounted = false;
      clearInterval(timer);
      unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      vehicles,
      projects,
      loading,
      error,
    }),
    [vehicles, projects, loading, error]
  );

  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
}

export function useFirebaseData() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebaseData must be used inside FirebaseProvider.");
  }
  return context;
}
