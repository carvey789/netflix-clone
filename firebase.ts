// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu3xK7b4GRsUWW2lsYQhu3PMAOO97KfRE",
  authDomain: "netflix-clone-5c6d7.firebaseapp.com",
  projectId: "netflix-clone-5c6d7",
  storageBucket: "netflix-clone-5c6d7.appspot.com",
  messagingSenderId: "1099188001002",
  appId: "1:1099188001002:web:ea860b8e820094dce9df93",
  measurementId: "G-WMFY21KPY8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
