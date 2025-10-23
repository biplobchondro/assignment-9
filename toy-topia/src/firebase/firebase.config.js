// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjyGQqVWl7KwRhRO35zrBMe8Gsgj55EHc",
  authDomain: "toy-topia-8e9a8.firebaseapp.com",
  projectId: "toy-topia-8e9a8",
  storageBucket: "toy-topia-8e9a8.firebasestorage.app",
  messagingSenderId: "590406292669",
  appId: "1:590406292669:web:0806bc582144ef5a6fd3d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;