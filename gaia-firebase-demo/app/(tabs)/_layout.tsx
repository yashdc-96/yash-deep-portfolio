import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "@/lib/theme";

export default function TabsLayout() {
  const { resolvedTheme } = useTheme();
  const active = resolvedTheme === "dark" ? "#22d3ee" : "#0e7490";
  const inactive = resolvedTheme === "dark" ? "#94a3b8" : "#64748b";
  const background = resolvedTheme === "dark" ? "#0f172a" : "#ffffff";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inactive,
        tabBarStyle: { backgroundColor: background, borderTopColor: "transparent" },
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="live-map" options={{ title: "Live Map" }} />
      <Tabs.Screen name="vehicles" options={{ title: "Vehicles" }} />
      <Tabs.Screen name="projects" options={{ title: "Projects" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
