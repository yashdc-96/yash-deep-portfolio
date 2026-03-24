import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops" }} />
      <View className="flex-1 items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
        <Text className="text-lg font-semibold text-slate-900 dark:text-white">Route not found</Text>
        <Link href="/(tabs)" className="mt-3 text-brand-600 dark:text-brand-300">
          Go back home
        </Link>
      </View>
    </>
  );
}
