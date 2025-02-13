import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d50fa.firebaseapp.com",
  projectId: "mern-estate-d50fa",
  storageBucket: "mern-estate-d50fa.firebasestorage.app",
  messagingSenderId: "759508013826",
  appId: "1:759508013826:web:09494aadc8c379b0cd281b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app instance
export { app };
