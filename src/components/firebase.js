// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX0LxW9ewJOd65-ZZoj97A80X41kFfFAQ",
  authDomain: "hotel-cddd1.firebaseapp.com",
  projectId: "hotel-cddd1",
  storageBucket: "hotel-cddd1.appspot.com",
  messagingSenderId: "41693815340",
  appId: "1:41693815340:web:2093a20f3293418da8a789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);