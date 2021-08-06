import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCARTUhmbdwj-NJe6l9_qO72_0gy5tN6bU",
  authDomain: "twitter-mini-eeff4.firebaseapp.com",
  projectId: "twitter-mini-eeff4",
  storageBucket: "twitter-mini-eeff4.appspot.com",
  messagingSenderId: "437183924522",
  appId: "1:437183924522:web:440439463a882ddaa87653",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
