import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC7ss5oDlPFghPpZ9a-XrCYLfE16WIyiLM",
  authDomain: "movebaby-expo-app.firebaseapp.com",
  projectId: "movebaby-expo-app",
  storageBucket: "movebaby-expo-app.firebasestorage.app",
  messagingSenderId: "62254227739",
  appId: "1:62254227739:web:04cce5ae8a3e3241bf73be",
  measurementId: "G-2L8S1V8JLQ",
};

// Initialize Firebase app



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth with React Native persistence (AsyncStorage)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };
