
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUWQ7mebBXs2cVad8gN2SQ2s2C3rpK4lU",
  authDomain: "netflix-clone-3ad49.firebaseapp.com",
  projectId: "netflix-clone-3ad49",
  storageBucket: "netflix-clone-3ad49.appspot.com",
  messagingSenderId: "599440690382",
  appId: "1:599440690382:web:309ce417bd20e3a528149f",
  measurementId: "G-VQ88YMLJCH"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



 
export { auth, provider };

