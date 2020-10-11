import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAY9vpLdTGXGxI-TdBfnvB9D_yQ0nceJuo",
    authDomain: "mume-db.firebaseapp.com",
    databaseURL: "https://mume-db.firebaseio.com",
    projectId: "mume-db",
    storageBucket: "mume-db.appspot.com",
    messagingSenderId: "307038301045",
    appId: "1:307038301045:web:9f5055d2dbda614192c13c",
    measurementId: "G-8TK09YYMES"
};


export const createUserProfilDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef)

    const snapshot = await userRef.get();
    console.log(snapshot);

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        console.log(createdAt)

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error) {
            console.log("error creating user", error.message);

        }
        
    }
    return userRef;

}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }


export default firebase;


