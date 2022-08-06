import firebase from "firebase";
import "firebase/firestore";
import "firebase-auth";



// ..........Firebase.................



const firebaseConfig = {
    apiKey: "AIzaSyC9mXFlafSY6DT1lQvewhABExcPkUqGQGM",
    authDomain: "prueba01-ef98e.firebaseapp.com",
    projectId: "prueba01-ef98e",
    storageBucket: "prueba01-ef98e.appspot.com",
    messagingSenderId: "400103168629",
    appId: "1:400103168629:web:9347234604f7eaa363b63c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.googleAuthProvider();


export { db, googleAuthProvider, firebase };








