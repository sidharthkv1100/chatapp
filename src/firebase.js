import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxrPGYp_EYeYtWWPEP34Utw5USMKPJTNY",
  authDomain: "react-chat-app-c92a8.firebaseapp.com",
  projectId: "react-chat-app-c92a8",
  storageBucket: "react-chat-app-c92a8.appspot.com",
  messagingSenderId: "864073835846",
  appId: "1:864073835846:web:7daed5778d9602ed56b147",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
