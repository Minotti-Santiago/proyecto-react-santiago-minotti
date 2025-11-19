import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDAldKWOgPzUjWLRT-w-JCymL6bR-60vHY",
    authDomain: "ecommerce-88020-1dda8.firebaseapp.com",
    projectId: "ecommerce-88020-1dda8",
    storageBucket: "ecommerce-88020-1dda8.firebasestorage.app",
    messagingSenderId: "923882486472",
    appId: "1:923882486472:web:ab0053ae0388b1142b43fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db