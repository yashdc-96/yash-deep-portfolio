import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Database, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID",
  databaseURL: "REPLACE_WITH_YOUR_REALTIME_DATABASE_URL",
};

// Replace all values above with your Firebase project keys.
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const firestore: Firestore = getFirestore(app);
export const realtimeDb: Database = getDatabase(app);
export default app;
