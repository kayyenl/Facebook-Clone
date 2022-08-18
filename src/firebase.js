import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDBWt6swKdsFmFJWc_eLUmoLuKYJrOXLeU",
    authDomain: "facebook-clone-7ddae.firebaseapp.com",
    projectId: "facebook-clone-7ddae",
    storageBucket: "facebook-clone-7ddae.appspot.com",
    messagingSenderId: "999831750415",
    appId: "1:999831750415:web:a0bc09653592f25d06207a",
    measurementId: "G-N7XJR28HHG"
  };

  // this below will connect out frontend to the backend 
  // we also initialize the authentication and database here.
  // also set up a provider to make google signin possible.
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore()
  const auth = getAuth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth }
  export default db;