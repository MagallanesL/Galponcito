import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDHSB4rt4pjZ84LgqbxjZ2Ok1G0ZhuVTBc",
        authDomain: "galponcito-bb96e.firebaseapp.com",
        projectId: "galponcito-bb96e",
        storageBucket: "galponcito-bb96e.firebasestorage.app",
        messagingSenderId: "554913813614",
        appId: "1:554913813614:web:20ea477393f0b8a6a5827f"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);