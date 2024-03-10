// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBfyLrANUn7diXpKuOsEtHJoU_ydpm6jYs",
    authDomain: "clouddevs-marketplace.firebaseapp.com",
    projectId: "clouddevs-marketplace",
    storageBucket: "clouddevs-marketplace.appspot.com",
    messagingSenderId: "365058165551",
    appId: "1:365058165551:web:f243d5f81d8a40c8b4afda"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth;