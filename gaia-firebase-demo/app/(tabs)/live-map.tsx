import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { ErrorState } from "@/components/error-state";
import { useVehicles } from "@/lib/hooks";

export default function LiveMapScreen() {
  const { vehicles, loading, error } = useVehicles();
  const [locationStatus, setLocationStatus] = useState<string>("Requesting location...");

  useEffect(() => {
    const request = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationStatus(status === "granted" ? "Location enabled" : "Location denied");
    };
    void request();
  }, []);

  const initialRegion = useMemo(
    () => ({
      latitude: vehicles[0]?.lat ?? 28.6139,
      longitude: vehicles[0]?.lng ?? 77.209,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    }),
    [vehicles]
  );

  return (
    <View className="flex-1 bg-slate-100 dark:bg-slate-950">
      {error ? <ErrorState message={error} /> : null}
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#06b6d4" />
          <Text className="mt-3 text-slate-600 dark:text-slate-300">Syncing vehicles...</Text>
        </View>
      ) : (
        <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
          {vehicles.map((vehicle) => (
            <Marker key={vehicle.id} coordinate={{ latitude: vehicle.lat, longitude: vehicle.lng }} title={vehicle.name}>
              <Callout>
                <View className="w-44 p-1">
                  <Text className="font-semibold">{vehicle.name}</Text>
                  <Text>Speed: {vehicle.speed} km/h</Text>
                  <Text>Battery: {vehicle.battery}%</Text>
                  <Text>Status: {vehicle.status.replace("_", " ")}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
      <View className="absolute left-4 right-4 top-4 rounded-xl bg-black/55 px-3 py-2">
        <Text className="text-xs text-white">Telemetry refresh: every 3s • {locationStatus}</Text>
      </View>
    </View>
  );
}
