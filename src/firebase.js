// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Yf0YcgCF1f_ruDG4tensOIi9wZ2Mk3w",
  authDomain: "todoapp-1c0d0.firebaseapp.com",
  databaseURL: "https://todoapp-1c0d0-default-rtdb.firebaseio.com",
  projectId: "todoapp-1c0d0",
  storageBucket: "todoapp-1c0d0.appspot.com",
  messagingSenderId: "998865515750",
  appId: "1:998865515750:web:68b68e764b7292f274f727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();