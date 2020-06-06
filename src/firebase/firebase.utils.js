import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHxkp1EbIODX3VIji_p9R-WIuEK_5-rNA",
  authDomain: "react-estore-9099f.firebaseapp.com",
  databaseURL: "https://react-estore-9099f.firebaseio.com",
  projectId: "react-estore-9099f",
  storageBucket: "react-estore-9099f.appspot.com",
  messagingSenderId: "264948349527",
  appId: "1:264948349527:web:323a9fb6683c9136528112",
  measurementId: "G-CT5W07ETCV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


