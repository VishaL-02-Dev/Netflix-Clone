// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut,} from "firebase/auth";
import { getFirestore, collection, addDoc,} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESG_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASURE_ID,
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
