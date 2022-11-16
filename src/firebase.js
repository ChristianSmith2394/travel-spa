import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFv2geIJBN1aLAzhsaB3-OnDxwNv58LY8",
  authDomain: "ecom-store-cs94.firebaseapp.com",
  projectId: "ecom-store-cs94",
  storageBucket: "ecom-store-cs94.appspot.com",
  messagingSenderId: "506621747136",
  appId: "1:506621747136:web:57e88488ed43486159b225",
  measurementId: "G-5WKYFRH1DV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
