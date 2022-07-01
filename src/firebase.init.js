// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATaNi9BlNxYuKFXcDUL2e9HwuxDr0Ao_0",
    authDomain: "task1-4a319.firebaseapp.com",
    projectId: "task1-4a319",
    storageBucket: "task1-4a319.appspot.com",
    messagingSenderId: "779402616726",
    appId: "1:779402616726:web:d518a139d9e53a619587b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;