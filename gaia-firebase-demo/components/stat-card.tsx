import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { GlassCard } from "@/components/glass-card";

interface StatCardProps {
  label: string;
  value: string;
  accentClassName?: string;
}

export function StatCard({ label, value, accentClassName = "bg-brand-500" }: StatCardProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 350, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 350, useNativeDriver: true }),
    ]).start();
  }, [opacity, translateY]);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      <GlassCard className="mb-3">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-300">
              {label}
            </Text>
            <Text className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{value}</Text>
          </View>
          <View className={`h-3 w-3 rounded-full ${accentClassName}`} />
        </View>
      </GlassCard>
    </Animated.View>
  );
}
