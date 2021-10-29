import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

// call initializeAuthentication
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // initialize auth and googleProvider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in using google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // observe user state change
  useEffect(() => {
    const unsubscirbed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscirbed;
  }, []);

  // log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    signInUsingGoogle,
    logOut
  }
}

export default useFirebase;