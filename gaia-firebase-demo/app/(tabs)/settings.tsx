import React from "react";
import { Switch, Text, View } from "react-native";
import { GlassCard } from "@/components/glass-card";
import { useTheme } from "@/lib/theme";

export default function SettingsScreen() {
  const { mode, resolvedTheme, toggleDarkMode } = useTheme();

  return (
    <View className="flex-1 bg-slate-100 px-4 pt-5 dark:bg-slate-950">
      <Text className="text-2xl font-bold text-slate-900 dark:text-white">Settings</Text>
      <Text className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Configure app behavior and Firebase environment values.
      </Text>

      <GlassCard className="mt-4">
        <Text className="text-base font-semibold text-slate-900 dark:text-white">Dark mode</Text>
        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-sm text-slate-600 dark:text-slate-300">
            Current theme: {resolvedTheme} ({mode})
          </Text>
          <Switch value={resolvedTheme === "dark"} onValueChange={toggleDarkMode} />
        </View>
      </GlassCard>

      <GlassCard className="mt-3">
        <Text className="text-base font-semibold text-slate-900 dark:text-white">Firebase setup placeholder</Text>
        <Text className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Add your API keys in lib/firebase.ts and create:
          {"\n"}- Realtime Database path: fleet/vehicles
          {"\n"}- Firestore collection: projects (optional)
        </Text>
      </GlassCard>
    </View>
  );
}
