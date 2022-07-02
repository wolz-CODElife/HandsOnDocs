// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_L-ItkFv2UGb8pWtlxhca0B-d2Pykuf8",
  authDomain: "handsondocz.firebaseapp.com",
  projectId: "handsondocz",
  storageBucket: "handsondocz.appspot.com",
  messagingSenderId: "282844263010",
  appId: "1:282844263010:web:b7d6bc211e73f1e0eed73b",
  measurementId: "G-03T3HZ4F3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);