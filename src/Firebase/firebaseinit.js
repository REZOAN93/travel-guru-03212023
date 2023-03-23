// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoflqAf3Iml8Pt5Xx3MB6VvyY_SXhHBNg",
  authDomain: "fir-auth-bac3a.firebaseapp.com",
  projectId: "fir-auth-bac3a",
  storageBucket: "fir-auth-bac3a.appspot.com",
  messagingSenderId: "329723510844",
  appId: "1:329723510844:web:1ed2961bd543509f470339",
  measurementId: "G-309XTSPDBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;