// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMF4UYWmNb5JbYt3NfSZi9J-JcLHhkScc",
  authDomain: "dragon-news-project-5b519.firebaseapp.com",
  projectId: "dragon-news-project-5b519",
  storageBucket: "dragon-news-project-5b519.firebasestorage.app",
  messagingSenderId: "747578348671",
  appId: "1:747578348671:web:faf25b60fa9097293b1b4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app