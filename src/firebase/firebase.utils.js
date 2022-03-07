import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCHJl4aad3Jg6GcW97IdVaVAueDR732aKY",
  authDomain: "crwn-db-4f03d.firebaseapp.com",
  projectId: "crwn-db-4f03d",
  storageBucket: "crwn-db-4f03d.appspot.com",
  messagingSenderId: "226311996003",
  appId: "1:226311996003:web:23b898470df4d1f86b2e56"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export  const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;