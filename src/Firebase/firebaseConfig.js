import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC9mXFlafSY6DT1lQvewhABExcPkUqGQGM",
  authDomain: "prueba01-ef98e.firebaseapp.com",
  projectId: "prueba01-ef98e",
  storageBucket: "prueba01-ef98e.appspot.com",
  messagingSenderId: "400103168629",
  appId: "1:400103168629:web:9347234604f7eaa363b63c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
// const auth=getAuth(app);

export {
    app,
    google,
}