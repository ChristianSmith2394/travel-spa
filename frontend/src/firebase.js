import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQb099rGIIAbyho7htC8LWgHNSXZ3W6SU",
  authDomain: "travel-ckt.firebaseapp.com",
  projectId: "travel-ckt",
  storageBucket: "travel-ckt.appspot.com",
  messagingSenderId: "927333358911",
  appId: "1:927333358911:web:e1428ef808a1c40e7e878a",
  measurementId: "G-C3L26P154Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
