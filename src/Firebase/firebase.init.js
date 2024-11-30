// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcguYwl96GjtBD5QacnC3YSEO1GW4HbYE",
  authDomain: "simple-firebase2-f3102.firebaseapp.com",
  projectId: "simple-firebase2-f3102",
  storageBucket: "simple-firebase2-f3102.firebasestorage.app",
  messagingSenderId: "907186961889",
  appId: "1:907186961889:web:b5433d2fc5dd39a52466a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);