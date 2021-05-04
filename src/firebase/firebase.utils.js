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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log('error creating a user', err.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;