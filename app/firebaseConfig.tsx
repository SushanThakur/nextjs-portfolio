import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "sushant-uk.firebaseapp.com",
  projectId: "sushant-uk",
  storageBucket: "sushant-uk.firebasestorage.app",
  messagingSenderId: "893673404658",
  appId: "1:893673404658:web:03ec54671346102252786b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
