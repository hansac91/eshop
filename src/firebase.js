import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDHoel6-WgStcSX8is-1xnnYlFjGvtfu3Q",
  authDomain: "eshop-e4069.firebaseapp.com",
  projectId: "eshop-e4069",
  storageBucket: "eshop-e4069.appspot.com",
  messagingSenderId: "27508915955",
  appId: "1:27508915955:web:e8378d524026dc5ed40186",
  measurementId: "G-2NRB15Z04Z"
};


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = firebase.auth();

  export { db, auth };
