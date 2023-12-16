// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD-14YPK6Cd4QGmKXrzJdx5UD3rjQuMQTM",
  authDomain: "event-finder-ecb3a.firebaseapp.com",
  projectId: "event-finder-ecb3a",
  storageBucket: "event-finder-ecb3a.appspot.com",
  messagingSenderId: "384984205653",
  appId: "1:384984205653:web:04b8ba0547292564e307dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);