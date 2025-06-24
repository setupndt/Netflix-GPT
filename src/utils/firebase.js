// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYR_Ruq7Oj3Jwe4uiWWft1J3-6C9EyboI",
  authDomain: "netflix-gpt-9090.firebaseapp.com",
  projectId: "netflix-gpt-9090",
  storageBucket: "netflix-gpt-9090.firebasestorage.app",
  messagingSenderId: "768824680680",
  appId: "1:768824680680:web:4930267a8f31505a92a95d",
  measurementId: "G-37L69PT453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
