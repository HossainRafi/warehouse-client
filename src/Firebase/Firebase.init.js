// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpf5B5tTtxSv9msUxp76icPqnhlAj81jA",
  authDomain: "warehouse-8c8c8.firebaseapp.com",
  projectId: "warehouse-8c8c8",
  storageBucket: "warehouse-8c8c8.appspot.com",
  messagingSenderId: "950128387970",
  appId: "1:950128387970:web:de100618f9bfddea62d19b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth