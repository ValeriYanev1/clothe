import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAO6h66me6zI4qttKG0JVQhYQkV3OV5Ldo",
    authDomain: "crwn-db-6df9b.firebaseapp.com",
    projectId: "crwn-db-6df9b",
    storageBucket: "crwn-db-6df9b.appspot.com",
    messagingSenderId: "635468378935",
    appId: "1:635468378935:web:aadf4a444fcc0410f8e0b2",
    measurementId: "G-SKVC8E4BV0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;