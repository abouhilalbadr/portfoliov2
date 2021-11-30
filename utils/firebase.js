import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNkmVd72PD9t8L-ctUvEFap4u3Ap_RM2o",
  authDomain: "badrabouhilal-47129.firebaseapp.com",
  projectId: "badrabouhilal-47129",
  storageBucket: "badrabouhilal-47129.appspot.com",
  messagingSenderId: "604647803178",
  appId: "1:604647803178:web:d408629371c8d0af087653",
  measurementId: "G-G6RW4MNX4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export { firestore };
