import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAW6-8stDsUE8tKq5Ai7y5N_XA1Ra9TtdY",
  authDomain: "portfolio-952fd.firebaseapp.com",
  projectId: "portfolio-952fd",
  storageBucket: "portfolio-952fd.appspot.com",
  messagingSenderId: "987573086531",
  appId: "1:987573086531:web:b32d02c41fae288f5827f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore();