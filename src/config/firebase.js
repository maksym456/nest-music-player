import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXZebmGPlvSqPvay_eZp44dWiMkeeSu-4",
  authDomain: "nest-music-player.firebaseapp.com",
  projectId: "nest-music-player",
  storageBucket: "nest-music-player.firebasestorage.app",
  messagingSenderId: "660223894776",
  appId: "1:660223894776:web:0a20fbfed55f153ff8070d",
  measurementId: "G-9R9M3HLZCW"
};

const defaultProject = initializeApp(firebaseConfig);

console.log(defaultProject.name);

let auth = getAuth(defaultProject);
let firestore = getFirestore(defaultProject);

export { auth, firestore };