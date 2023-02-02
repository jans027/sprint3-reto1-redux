import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import {auth} from '../Firebase/firebaseConfig'


const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password, displayName, phoneNumber) => {
    return createUserWithEmailAndPassword(auth, email, password, displayName, phoneNumber);

  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };


  const singInWithFacebook = () => {
    
  const facebookProvider = new FacebookAuthProvider();
  return signInWithPopup(auth, facebookProvider)
  
      }



  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        singInWithFacebook,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
  
}


