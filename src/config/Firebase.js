// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMkHASDE6jk5iWFEDQbMrfjHaggfOJzs",
  authDomain: "todo-acaf3.firebaseapp.com",
  projectId: "todo-acaf3",
  storageBucket: "todo-acaf3.appspot.com",
  messagingSenderId: "952184165792",
  appId: "1:952184165792:web:bcb8b6114f43219baac0c5",
  measurementId: "G-H4Q6B0WXSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore(app);
export default db;