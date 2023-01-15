import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleRedirect = async () => {
    const response = await getRedirectResult(auth);
    if(response){
    const userDocRef = await createUserDocumentFromAuth(response.useruser);

    }
  };
  useEffect(() => {
    //using the use effect and getredirect with auth passed in to have access to user data
    //when the pages redirects them.
    // the auth is the value from authentication.
    // this process is not necessary for popup
    handleRedirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google redirect
      </button>
    </div>
  );
};

export default SignIn;
