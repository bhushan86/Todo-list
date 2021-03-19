import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
  apiKey: "AIzaSyACL6cGPvhLREO4QI3e5ACrsc6WgUqvFLM",
  authDomain: "to-do-app-cp-6fba3.firebaseapp.com",
  databaseURL: "https://to-do-app-cp-6fba3-default-rtdb.firebaseio.com",
  projectId: "to-do-app-cp-6fba3",
  storageBucket: "to-do-app-cp-6fba3.appspot.com",
  messagingSenderId: "734836675199",
  appId: "1:734836675199:web:fa2d0e0b3d5dc0396d654a",
  measurementId: "G-MHNSFYVL74"
    });

    const db = firebaseApp.firestore();
    export default db;






