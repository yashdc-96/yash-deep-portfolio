import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { ErrorState } from "@/components/error-state";
import { VehicleRow } from "@/components/vehicle-row";
import { useVehicles } from "@/lib/hooks";

export default function VehiclesScreen() {
  const { vehicles, loading, error } = useVehicles();

  return (
    <View className="flex-1 bg-slate-100 px-4 pt-5 dark:bg-slate-950">
      <Text className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">Fleet Vehicles</Text>
      {error ? <ErrorState message={error} /> : null}
      {loading ? (
        <View className="mt-10 items-center">
          <ActivityIndicator color="#06b6d4" />
          <Text className="mt-3 text-slate-600 dark:text-slate-300">Loading telemetry feed...</Text>
        </View>
      ) : (
        <FlatList
          data={vehicles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VehicleRow vehicle={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
