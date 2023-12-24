// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTT2pr6YPIuiRSnVsj7hY5eBUHunelZo8",
  authDomain: "blogging-app-8d17a.firebaseapp.com",
  projectId: "blogging-app-8d17a",
  storageBucket: "blogging-app-8d17a.appspot.com",
  messagingSenderId: "343786352832",
  appId: "1:343786352832:web:903d4a9005bb82664d7d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);