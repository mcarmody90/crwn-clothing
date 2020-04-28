import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBsgzrqgE4vCPbdwW0fON881lwhxJMk1Iw",
  authDomain: "crwn-db-c061f.firebaseapp.com",
  databaseURL: "https://crwn-db-c061f.firebaseio.com",
  projectId: "crwn-db-c061f",
  storageBucket: "crwn-db-c061f.appspot.com",
  messagingSenderId: "937126955669",
  appId: "1:937126955669:web:fe3ccdc81a173923cf299c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;