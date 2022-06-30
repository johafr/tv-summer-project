import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API_KEY,
  authDomain: "tv-summer-project.firebaseapp.com",
  projectId: "tv-summer-project",
  storageBucket: "tv-summer-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-VKN3D3CG01",
  databaseURL:
    "https://tv-summer-project-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithRedirect(auth, provider);
export const signOutWithGoogle = () => {
  auth.onAuthStateChanged((user) => {
    auth.signOut();
  });
};
