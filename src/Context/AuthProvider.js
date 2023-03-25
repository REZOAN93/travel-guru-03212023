import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebaseinit";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const createuserwithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const usersignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateuser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const googleAuth = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = currentUser.uid;
        // ...
        if (currentUser.emailVerified) {
          setUser(currentUser);
        }
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const usersignout = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const authinfo = {
    user,
    googleAuth,
    usersignout,
    createuserwithEmail,
    usersignin,
    updateuser,
    emailVerify
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
