// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqakauR7ARSerVqHQeJEHjSSOAU7JwPYQ",
  authDomain: "banao-mern-task-2-1f827.firebaseapp.com",
  projectId: "banao-mern-task-2",
  storageBucket: "banao-mern-task-2.appspot.com",
  messagingSenderId: "803257744221",
  appId: "1:803257744221:web:5e7fcfbb038cd4282206b4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app