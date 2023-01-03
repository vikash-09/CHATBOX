// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClktcn9qhD-YvwakytF1sgJGQ6reIiCpI",
  authDomain: "chatbox-2532c.firebaseapp.com",
  projectId: "chatbox-2532c",
  storageBucket: "chatbox-2532c.appspot.com",
  messagingSenderId: "832344248204",
  appId: "1:832344248204:web:dbeb87318df470bf1710a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);