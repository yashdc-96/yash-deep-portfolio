import React from "react";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { GlassCard } from "@/components/glass-card";
import { useProjects } from "@/lib/hooks";

export default function ProjectsScreen() {
  const projects = useProjects();

  return (
    <ScrollView className="flex-1 bg-slate-100 px-4 pt-5 dark:bg-slate-950" contentContainerStyle={{ paddingBottom: 22 }}>
      <Text className="text-2xl font-bold text-slate-900 dark:text-white">Highlighted Projects</Text>
      <Text className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Real-world product impact across enterprise and public-sector platforms.
      </Text>

      <View className="mt-4">
        {projects.map((project) => (
          <GlassCard className="mb-3" key={project.id}>
            <Text className="text-base font-semibold text-slate-900 dark:text-white">{project.title}</Text>
            <Text className="mt-0.5 text-xs uppercase tracking-widest text-brand-700 dark:text-brand-300">{project.company}</Text>
            <Text className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.summary}</Text>
            <TouchableOpacity onPress={() => void Linking.openURL(project.link)} className="mt-3 self-start rounded-lg bg-brand-600 px-3 py-2">
              <Text className="text-xs font-semibold text-white">Open Link</Text>
            </TouchableOpacity>
          </GlassCard>
        ))}
      </View>
    </ScrollView>
  );
}
