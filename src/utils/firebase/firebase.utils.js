// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhh8UQE38viDQLjrD3ke7qoUuBqQ3wKxA",
    authDomain: "crwn-clothing-db-59ede.firebaseapp.com",
    projectId: "crwn-clothing-db-59ede",
    storageBucket: "crwn-clothing-db-59ede.appspot.com",
    messagingSenderId: "697732855808",
    appId: "1:697732855808:web:a067d0233a9d84522200e5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : 'select_account'
})


export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)

//databsse usage starts here
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef =doc(db,'users',userAuth.uid)
   //the doc takes in the database,the collection name , and the of the document to reference usingthe Auth
//    console.log(userDocRef)

   const userSnapshot = await getDoc(userDocRef)
   //on the userSnapshot fromgetDoc,we have access to an exist function to check if a db has bee created
//    console.log(userSnapshot.exists())

   //running further checks to utilize db

   if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date()

    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })
    } catch (error) {
        console.log('error creating user', error.message)
    }
   }

  return  userDocRef
   //if user does not exist
   // create / set the document with the data from userAuth in my collection

   //if user data exists
}