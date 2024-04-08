import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5Kd70BwGZeale0ooXWG2b-aBX6gtnzKs",
    authDomain: "lab4-ab669.firebaseapp.com",
    projectId: "lab4-ab669",
    storageBucket: "lab4-ab669.appspot.com",
    messagingSenderId: "1031325939303",
    appId: "1:1031325939303:web:76566598e878332fee86c2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
