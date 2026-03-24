# Gaia Live - EV Fleet Demo

A production-ready, portfolio-grade React web app showcasing real-time EV fleet telemetry with Firebase Realtime Database, React Leaflet maps, and polished glassmorphism UI.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS (shadcn/ui-inspired styling)
- React Router v6.4+
- Firebase JS SDK v10+ (Realtime Database)
- React Leaflet + OpenStreetMap

## Live Demo

- Coming soon: `https://your-live-demo-url.com`

## Run Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173`.

## Firebase Setup (Realtime Database)

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Create a **Web App** in your Firebase project.
3. Enable **Realtime Database** in test mode first.
4. Copy your Firebase config keys.
5. Open `src/lib/firebase.ts`.
6. Replace placeholder values in `firebaseConfig` with your project keys.
7. Ensure Realtime Database rules allow read/write for your demo (tighten before production):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
8. Restart the app with `npm run dev`.

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Production build + type check
- `npm run preview` - Preview production build
- `npm run lint` - Lint TypeScript/React code

## Portfolio Note

Built with Cursor AI - showcasing real-time Firebase + React Leaflet for Google front-end roles.
