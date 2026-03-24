import { useMemo } from "react";
import { useFirebaseData } from "@/lib/firebase-context";

export function useVehicles() {
  const { vehicles, loading, error } = useFirebaseData();

  const stats = useMemo(() => {
    const total = vehicles.length;
    const active = vehicles.filter((v) => v.status === "in_transit").length;
    const avgBattery = total
      ? Math.round(vehicles.reduce((sum, v) => sum + v.battery, 0) / total)
      : 0;
    return { total, active, avgBattery };
  }, [vehicles]);

  return { vehicles, loading, error, stats };
}

export function useProjects() {
  const { projects } = useFirebaseData();
  return projects;
}
