
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCuYBmagC2H31c86f7iYjWeSiGbNbrEVs",
  authDomain: "blogproject-42f85.firebaseapp.com",
  projectId: "blogproject-42f85",
  storageBucket: "blogproject-42f85.appspot.com",
  messagingSenderId: "1071164306996",
  appId: "1:1071164306996:web:e18b497c171ca02d9efc61"
};


const app = initializeApp(firebaseConfig);



export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
console.log("User authenticated:", auth.currentUser);