import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// eslint-disable-next-line import/named
import { getReactNativePersistence } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ss5oDlPFghPpZ9a-XrCYLfE16WIyiLM",
  authDomain: "movebaby-expo-app.firebaseapp.com",
  projectId: "movebaby-expo-app",
  storageBucket: "movebaby-expo-app.firebasestorage.app",
  messagingSenderId: "62254227739",
  appId: "1:62254227739:web:04cce5ae8a3e3241bf73be",
  measurementId: "G-2L8S1V8JLQ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
