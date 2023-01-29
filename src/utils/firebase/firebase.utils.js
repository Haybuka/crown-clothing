// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//we need collection referencebecause it lets us write to a brand new collection (just like the doc and document).
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth();


// using google provider, we can signin using its AuthProvider
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//using google redirects & google provider if not popup
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


//databsse usage starts here
export const db = getFirestore();

//to add a json as a collection on firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('done')
}

//to pull said collection off firestore
export const getCategoriesAndDocuments = async () => {
    //reference the collection on database
    const collectionRef = collection(db, 'categories');
    // after, you create a query using the returned value from database
    const q = query(collectionRef)

    //using the query, you can get a snapshot of the categories using the getDocs method
    const querySnapshot = await getDocs(q);

    //query snapshot is where the collection lies, and using reduce we can pull out & accumulate data
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc
    }, {})

    return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    //the doc takes in the database,the collection name , and the of the document to reference usingthe Auth
    //    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    //on the userSnapshot fromgetDoc,we have access to an exist function to check if a db has bee created
    //    console.log(userSnapshot.exists())

    //running further checks to utilize db

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userDocRef
    //if user does not exist
    // create / set the document with the data from userAuth in my collection

    //if user data exists
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)