// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCagMX3EfXEZD9tFu8pwab1PUlkeN3vX4c",
  authDomain: "netflix-gpt-88cee.firebaseapp.com",
  projectId: "netflix-gpt-88cee",
  storageBucket: "netflix-gpt-88cee.appspot.com",
  messagingSenderId: "680493221098",
  appId: "1:680493221098:web:ef982632afc283e8f80393",
  measurementId: "G-WL3PMR0E6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth: any = getAuth()