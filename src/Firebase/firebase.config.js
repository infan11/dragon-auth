// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVluPN_YLeO4mgHLf2u9a2bxaDrJe1qi8",
  authDomain: "react-dragon-news-auth-875d3.firebaseapp.com",
  projectId: "react-dragon-news-auth-875d3",
  storageBucket: "react-dragon-news-auth-875d3.appspot.com",
  messagingSenderId: "303103996705",
  appId: "1:303103996705:web:b645e958a2562fa6108460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;