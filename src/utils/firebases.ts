// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,} from "@firebase/firestore"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh6RH3wAoaMCuT1dDZyT5cNcI4cqt2I1s",
  authDomain: "proyectview-f48f4.firebaseapp.com",
  projectId: "proyectview-f48f4",
  storageBucket: "proyectview-f48f4.appspot.com",
  messagingSenderId: "362590037552",
  appId: "1:362590037552:web:e50d29292f17cbc068eff5",
  measurementId: "G-13LNJ0Y2WC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)