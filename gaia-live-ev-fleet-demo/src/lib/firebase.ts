import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'

// Web app config from Firebase Console → Project settings
const firebaseConfig = {
  apiKey: 'AIzaSyDR6mc1WQj9g-ZmrmO6sVwn4zHZiYaaSxc',
  authDomain: 'gaia-live-demo-1.firebaseapp.com',
  // Realtime Database URL (Console → Realtime Database → copy database URL)
  databaseURL: 'https://gaia-live-demo-1-default-rtdb.firebaseio.com',
  projectId: 'gaia-live-demo-1',
  storageBucket: 'gaia-live-demo-1.firebasestorage.app',
  messagingSenderId: '15456659024',
  appId: '1:15456659024:web:6745f32aa2fe69186cd355',
  measurementId: 'G-HHGHNN5WC4',
}

const app: FirebaseApp = initializeApp(firebaseConfig)

/** Used by `vehicles-context` for live fleet data */
export const realtimeDb = getDatabase(app)

// Analytics only when the browser supports it (avoids dev/SSR noise)
void isSupported().then((ok) => {
  if (ok) getAnalytics(app)
})
