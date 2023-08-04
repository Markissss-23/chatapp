// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbVeWDlRjQY1trHQyZviWpVZp6yXFNF10",
    authDomain: "chat-app-99e9b.firebaseapp.com",
    projectId: "chat-app-99e9b",
    storageBucket: "chat-app-99e9b.appspot.com",
    messagingSenderId: "759704084204",
    appId: "1:759704084204:web:a79d1e969293d6bff54fc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();