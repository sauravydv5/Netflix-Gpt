// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDccUhttFIGtT81LuiTXdxoj62ax-5OcyM",
  authDomain: "netflix-gpt-ade79.firebaseapp.com",
  projectId: "netflix-gpt-ade79",
  storageBucket: "netflix-gpt-ade79.appspot.com", // ✅ Fixed storage bucket
  messagingSenderId: "284714697962",
  appId: "1:284714697962:web:511fc6fdec54ac09090393",
  measurementId: "G-FK0V7S8C9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app); // ✅ Ensuring Analytics runs only in the browser
}

export const auth = getAuth(app); // ✅ Pass 'app' explicitly
