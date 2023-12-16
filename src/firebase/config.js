// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuPfmfrNGOfTQMi6nS5oIjaRtkx9kdadE",
  authDomain: "sushizen-ee424.firebaseapp.com",
  projectId: "sushizen-ee424",
  storageBucket: "sushizen-ee424.appspot.com",
  messagingSenderId: "951308381742",
  appId: "1:951308381742:web:624d7a012b9213934b79bf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestoreDB = app.firestore()