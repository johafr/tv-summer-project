import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnK82UlOTX_3cZRTLYEiURilbdX_NGp8o",
  authDomain: "tv-summer-project.firebaseapp.com",
  projectId: "tv-summer-project",
  storageBucket: "tv-summer-project.appspot.com",
  messagingSenderId: "796886034847",
  appId: "1:796886034847:web:ec3972011c4743f11fb5aa",
  measurementId: "G-VKN3D3CG01",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithRedirect(auth, provider);