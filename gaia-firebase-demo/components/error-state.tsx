import React from "react";
import { Text, View } from "react-native";

export function ErrorState({ message }: { message: string }) {
  return (
    <View className="mx-4 mt-6 rounded-2xl border border-rose-300 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950">
      <Text className="font-semibold text-rose-700 dark:text-rose-300">Configuration required</Text>
      <Text className="mt-1 text-rose-600 dark:text-rose-200">{message}</Text>
    </View>
  );
}
