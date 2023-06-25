import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

/* eslint-disable react/prop-types */
const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => useContext(AuthContex);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // auth
  const auth = getAuth(app);

  // provicer login
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // Signup with email & pass
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /** Login with emain & password */
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /**
   * Set objarver
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // send authInfo as a value
  const authInfo = {
    user,
    loading,
    providerLogin,
    signUp,
    login,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
