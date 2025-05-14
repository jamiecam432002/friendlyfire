"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Use automatic initialization
// https://firebase.google.com/docs/app-hosting/firebase-sdks#initialize-with-no-arguments
const firebaseConfig = {
  apiKey: "AIzaSyAHqBFSc3aRC2zV-Vo3DGHw7BdL23FrbGo",
  authDomain: "friendlyfire-e8a94.firebaseapp.com",
  projectId: "friendlyfire-e8a94",
  storageBucket: "friendlyfire-e8a94.firebasestorage.app",
  messagingSenderId: "695407578953",
  appId: "1:695407578953:web:185979cfd9cc2db6ee1498",
};
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
