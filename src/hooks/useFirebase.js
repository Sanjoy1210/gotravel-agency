import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

// call initializeAuthentication
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [autherror, setAuthError] = useState('');

  // initialize auth and googleProvider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in using google
  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    // return signInWithPopup(auth, googleProvider);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination);
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // register a new user
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // login with email and password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
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
    autherror,
    setAuthError,
    signInUsingGoogle,
    registerUser,
    loginUser,
    logOut
  }
}

export default useFirebase;