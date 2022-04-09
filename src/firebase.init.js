// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhJosymUJXtEYGtVjq1ddysyfLKgAblqg",
    authDomain: "simple-firebase-authenti-ff341.firebaseapp.com",
    projectId: "simple-firebase-authenti-ff341",
    storageBucket: "simple-firebase-authenti-ff341.appspot.com",
    messagingSenderId: "481980680314",
    appId: "1:481980680314:web:0aee89593808c7b94453c3",
    measurementId: "G-PEQZXBSG8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
