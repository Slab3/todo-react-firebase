import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "todos-auth-react.firebaseapp.com",
  projectId: "todos-auth-react",
  storageBucket: "todos-auth-react.appspot.com",
  messagingSenderId: "692222575183",
  appId: "1:692222575183:web:1318cea8ee55df5829e03a",
  measurementId: "G-BSWV34KMZX"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
