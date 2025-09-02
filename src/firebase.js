// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAlKpUnpjgHF2RMkcSBjYUmFXGTNBG5IVM",
    authDomain: "renter-app-8f419.firebaseapp.com",
    projectId: "renter-app-8f419",
    storageBucket: "renter-app-8f419.firebasestorage.app",
    messagingSenderId: "9909699646",
    appId: "1:9909699646:web:911a4f10a9b6e42a1e3d6f"
  };

  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 
export const auth = getAuth(app);
export { RecaptchaVerifier, signInWithPhoneNumber };
export { db };




