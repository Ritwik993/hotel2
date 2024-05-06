// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjyqYWEEl5lApkuNpPG6ZBRVXepoAcus",
  authDomain: "fir-ee1f5.firebaseapp.com",
  projectId: "fir-ee1f5",
  storageBucket: "fir-ee1f5.appspot.com",
  messagingSenderId: "719158188214",
  appId: "1:719158188214:web:54fb3a66949cef5ab5ae17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);