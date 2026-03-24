import React from "react";
import { BlurView } from "expo-blur";
import { View } from "react-native";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <View className={`overflow-hidden rounded-2xl border border-white/20 ${className}`}>
      <BlurView intensity={30} tint="systemThinMaterial" className="px-4 py-4">
        {children}
      </BlurView>
    </View>
  );
}
