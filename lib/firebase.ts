// Firebase configuration for Makarios
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH2_IQVlllC_K3siBbYOsrMfyJAQEtQhA",
  authDomain: "makarios-a8dd3.firebaseapp.com",
  projectId: "makarios-a8dd3",
  storageBucket: "makarios-a8dd3.firebasestorage.app",
  messagingSenderId: "42298603389",
  appId: "1:42298603389:web:4d5e7292c144efcab97e14",
  measurementId: "G-25LPYKESED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics (only in browser and if supported)
export const initAnalytics = async () => {
  if (typeof window !== 'undefined' && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

export default app;
