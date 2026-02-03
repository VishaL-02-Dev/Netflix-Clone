// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut,} from "firebase/auth";
import { getFirestore, collection, addDoc,} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_hMcV8zNpCAt_upqb8Hl7iggQ4etsOCQ",
  authDomain: "netflix-clone-50178.firebaseapp.com",
  projectId: "netflix-clone-50178",
  storageBucket: "netflix-clone-50178.firebasestorage.app",
  messagingSenderId: "1069871996573",
  appId: "1:1069871996573:web:e02e1bb541a0ec1b37fe74",
  measurementId: "G-KWDPNG4DJ6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const signup = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    email,
    authProvider: "local",
    createdAt: new Date(),
  });
};

export const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  await signOut(auth);
};
