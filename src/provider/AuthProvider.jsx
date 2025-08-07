import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = { createUser, setUser, user, signInUser, signOutUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
