// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b432d.firebaseapp.com",
  projectId: "mern-auth-b432d",
  storageBucket: "mern-auth-b432d.appspot.com",
  messagingSenderId: "1050870937060",
  appId: "1:1050870937060:web:3c519542fc926e6ac803f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);