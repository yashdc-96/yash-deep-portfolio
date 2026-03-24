import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ErrorFallbackProps = {
  error: Error;
  retry: () => void;
};

export default function ErrorFallback({ error, retry }: ErrorFallbackProps) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <Text className="text-lg font-semibold text-slate-900 dark:text-white">Something went wrong</Text>
      <Text className="mt-2 text-center text-sm text-slate-600 dark:text-slate-300">{error.message}</Text>
      <TouchableOpacity onPress={retry} className="mt-5 rounded-lg bg-brand-600 px-4 py-2">
        <Text className="font-semibold text-white">Try again</Text>
      </TouchableOpacity>
    </View>
  );
}
