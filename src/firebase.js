// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGIN_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
  // apiKey: "AIzaSyBR8XRCvZ1KaEq6VdvtSMbGD4f-SuTIjI0",
  // authDomain: "writer-management-6ff9c.firebaseapp.com",
  // projectId: "writer-management-6ff9c",
  // storageBucket: "writer-management-6ff9c.appspot.com",
  // messagingSenderId: "970675701644",
  // appId: "1:970675701644:web:fa2f019ae1e00304b1b8a9",
  // measurementId: "G-FEYF944X02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app, db, firebaseConfig };
