# Gaia Live — EV Fleet Demo

Production-ready Expo React Native (TypeScript) portfolio app demonstrating real-time EV fleet telemetry using Firebase Realtime Database + Firestore.

## Why this project

This app is designed as a polished showcase for senior front-end/mobile roles, including modern architecture, clean UI systems, and real-time data engineering patterns.

## Tech stack

- Expo SDK 55 + Expo Router (file-based routing)
- React Native + TypeScript
- NativeWind (Tailwind CSS in React Native) with dark mode
- Firebase JS SDK v10+ (Realtime Database + Firestore)
- React Native Maps + expo-location
- Context API + custom hooks for state and data orchestration

## Screens

1. Home / Dashboard  
   - Name: **Yash Deep**  
   - Tagline: **Senior UX Engineer | AI-Augmented Front-End Architect**  
   - Quick fleet stats with animated, glassmorphism cards
2. Live Map  
   - Interactive map with 6 simulated EV markers  
   - Realtime telemetry from Firebase (lat, lng, speed, battery, status)
3. Vehicles List  
   - FlatList of vehicle telemetry with live updates
4. Projects  
   - Experience highlights: Oracle AI tooling, UK Gov Gaia, Allstate
5. Settings  
   - Dark mode toggle + Firebase setup placeholder

## Run locally

```bash
cd gaia-firebase-demo
npm install
npm run start
```

Then open via Expo Go or run:

```bash
npm run android
# or
npm run ios
```

## Firebase setup (step-by-step)

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Add a Web app inside Firebase Project Settings.
3. Copy config keys and paste them into `lib/firebase.ts`:
   - `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`, `databaseURL`
4. Enable **Realtime Database** and set rules for dev/testing.
5. Enable **Firestore Database** (optional for dynamic Projects screen content).
6. Realtime data path used by the app:
   - `fleet/vehicles`
7. Run the app; vehicles auto-simulate and sync every 3 seconds.

## Live demo note

- Record an Expo demo video/gif and place in your portfolio README or releases.
- Screenshot placeholders (add your own):
  - `docs/screenshots/home.png`
  - `docs/screenshots/live-map.png`
  - `docs/screenshots/vehicles.png`
  - `docs/screenshots/projects.png`
  - `docs/screenshots/settings.png`

## Production notes

- Add runtime config via EAS secrets instead of hardcoding Firebase keys.
- Tighten Firebase security rules before launch.
- Add analytics, crash reporting, and E2E tests for enterprise usage.

---

**Built with Cursor AI in one prompt – showcasing real-time Firebase + modern React Native for Google front-end roles.**
