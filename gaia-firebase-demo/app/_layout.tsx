import "@/global.css";
import React from "react";
import { Stack } from "expo-router";
import { FirebaseProvider } from "@/lib/firebase-context";
import { ThemeProvider, useTheme } from "@/lib/theme";

function AppShell() {
  const { resolvedTheme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: resolvedTheme === "dark" ? "#020617" : "#e2e8f0" },
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <FirebaseProvider>
        <AppShell />
      </FirebaseProvider>
    </ThemeProvider>
  );
}
