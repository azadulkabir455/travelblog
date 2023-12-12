import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAzLWGWu8d0wc3vkWRtBdBcwn6OHt0euf0",
  authDomain: "travel-blog-45539.firebaseapp.com",
  projectId: "travel-blog-45539",
  storageBucket: "travel-blog-45539.appspot.com",
  messagingSenderId: "213619220917",
  appId: "1:213619220917:web:57b403c7b6bd6f5c8379fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)