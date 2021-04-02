import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCaOWV4BgfDIQ8FwvZZ__2_zxOeMPGJyZY",
  authDomain: "authtest-4d36b.firebaseapp.com",
  databaseURL:
    "https://authtest-4d36b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authtest-4d36b",
  storageBucket: "authtest-4d36b.appspot.com",
  messagingSenderId: "703201036563",
  appId: "1:703201036563:web:2b3c0a0eb78df7986e72e6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
