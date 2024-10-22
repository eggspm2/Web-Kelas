1// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBMc1163SnWq69IwYXvHAOy4fq0SDInHxU",
  authDomain: "litevi-class.firebaseapp.com",
  projectId: "litevi-class",
  storageBucket: "litevi-class.appspot.com",
  messagingSenderId: "1085526705072",
  appId: "1:1085526705072:web:e837b9a2dc3bd69e008c75",
  measurementId: "G-RXPS99HK2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
