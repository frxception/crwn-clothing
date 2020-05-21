import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const cfg = {
    apiKey: "AIzaSyBBmxZ8y9O-Nb7gPHbkHoj2of9-lNpyDao",
    authDomain: "frx-react-course-crwn-db.firebaseapp.com",
    databaseURL: "https://frx-react-course-crwn-db.firebaseio.com",
    projectId: "frx-react-course-crwn-db",
    storageBucket: "frx-react-course-crwn-db.appspot.com",
    messagingSenderId: "131247466806",
    appId: "1:131247466806:web:df2abfe968783c490fab97",
    measurementId: "G-WH86VL9412"
};


firebase.initializeApp(cfg);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


