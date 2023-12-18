import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJeEw-lnEwxDtji5hII9lWkHXYdC9adjA",
  authDomain: "house-marketplace-app-25a75.firebaseapp.com",
  projectId: "house-marketplace-app-25a75",
  storageBucket: "house-marketplace-app-25a75.appspot.com",
  messagingSenderId: "894649522608",
  appId: "1:894649522608:web:db3c75c38fd092a89a9e75"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db= getFirestore(initializeApp(firebaseConfig));