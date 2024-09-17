import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Ek6LBwoeNwFULY4UtIYK4D7uQAGic6k",
  authDomain: "parag-pulsepixal.firebaseapp.com",
  projectId: "parag-pulsepixal",
  storageBucket: "parag-pulsepixal.appspot.com",
  messagingSenderId: "830723688780",
  appId: "1:830723688780:web:5851fbabf66e3bfbc167e9",
  measurementId: "G-JVQTCLY01B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectFirestore, projectStorage};