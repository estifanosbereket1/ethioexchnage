// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgpp0CgW7ZkSnbaoBYM2_kjXoY9Uo_ps",
  authDomain: "ethiocurrency.firebaseapp.com",
  projectId: "ethiocurrency",
  storageBucket: "ethiocurrency.appspot.com",
  messagingSenderId: "523090938404",
  appId: "1:523090938404:web:5f9280f2ac6b5a64faa6b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
