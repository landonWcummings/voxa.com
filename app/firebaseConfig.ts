import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyg-9y4lxXw99tVgHCCzVG3xy3H9K172M",
  authDomain: "voxa-867e6.firebaseapp.com",
  projectId: "voxa-867e6",
  storageBucket: "voxa-867e6.appspot.com",
  messagingSenderId: "629814098214",
  appId: "1:629814098214:web:4a04ced847ed53bfa7e9e7",
  measurementId: "G-EQ43ZTZ687"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
