import React from "react";
import { Text, View } from "react-native";
import { GlassCard } from "@/components/glass-card";
import { VehicleTelemetry } from "@/types/vehicle";

function statusColor(status: VehicleTelemetry["status"]) {
  switch (status) {
    case "charging":
      return "bg-emerald-500";
    case "in_transit":
      return "bg-cyan-500";
    case "maintenance":
      return "bg-amber-500";
    default:
      return "bg-slate-500";
  }
}

export function VehicleRow({ vehicle }: { vehicle: VehicleTelemetry }) {
  return (
    <GlassCard className="mb-3">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-semibold text-slate-900 dark:text-white">{vehicle.name}</Text>
          <Text className="text-sm text-slate-600 dark:text-slate-300">
            {vehicle.speed} km/h • {vehicle.battery}% battery
          </Text>
        </View>
        <View className="items-end">
          <View className={`h-2.5 w-2.5 rounded-full ${statusColor(vehicle.status)}`} />
          <Text className="mt-2 text-xs uppercase text-slate-500 dark:text-slate-300">
            {vehicle.status.replace("_", " ")}
          </Text>
        </View>
      </View>
    </GlassCard>
  );
}
