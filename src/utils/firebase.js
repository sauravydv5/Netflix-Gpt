// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDccUhttFIGtT81LuiTXdxoj62ax-5OcyM",
  authDomain: "netflix-gpt-ade79.firebaseapp.com",
  projectId: "netflix-gpt-ade79",
  storageBucket: "netflix-gpt-ade79.firebasestorage.app",
  messagingSenderId: "284714697962",
  appId: "1:284714697962:web:511fc6fdec54ac09090393",
  measurementId: "G-FK0V7S8C9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
