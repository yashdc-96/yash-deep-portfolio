import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ErrorState } from "@/components/error-state";
import { GlassCard } from "@/components/glass-card";
import { StatCard } from "@/components/stat-card";
import { useVehicles } from "@/lib/hooks";

export default function HomeScreen() {
  const { stats, loading, error } = useVehicles();

  return (
    <ScrollView className="flex-1 bg-slate-100 dark:bg-slate-950" contentContainerStyle={{ padding: 16, paddingBottom: 28 }}>
      <Text className="text-3xl font-bold text-slate-900 dark:text-white">Gaia Live</Text>
      <Text className="mt-1 text-lg font-semibold text-brand-700 dark:text-brand-300">Yash Deep</Text>
      <Text className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Senior UX Engineer | AI-Augmented Front-End Architect
      </Text>

      {error ? <ErrorState message={error} /> : null}

      <View className="mt-5">
        <StatCard label="Fleet Size" value={loading ? "..." : String(stats.total)} />
        <StatCard label="Vehicles Active" value={loading ? "..." : String(stats.active)} accentClassName="bg-emerald-500" />
        <StatCard label="Avg Battery" value={loading ? "..." : `${stats.avgBattery}%`} accentClassName="bg-amber-500" />
      </View>

      <GlassCard className="mt-2">
        <Text className="text-base font-semibold text-slate-900 dark:text-white">Live Demo Focus</Text>
        <Text className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Real-time Firebase telemetry, map visualization, and production-grade mobile UX patterns for EV fleet operations.
        </Text>
      </GlassCard>
    </ScrollView>
  );
}
