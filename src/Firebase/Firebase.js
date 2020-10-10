import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAY9vpLdTGXGxI-TdBfnvB9D_yQ0nceJuo",
    authDomain: "mume-db.firebaseapp.com",
    databaseURL: "https://mume-db.firebaseio.com",
    projectId: "mume-db",
    storageBucket: "mume-db.appspot.com",
    messagingSenderId: "307038301045",
    appId: "1:307038301045:web:9f5055d2dbda614192c13c",
    measurementId: "G-8TK09YYMES"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;