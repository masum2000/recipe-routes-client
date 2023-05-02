// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajCSu9whuTYWF4QDX7agypq1ylG9zSgA",
  authDomain: "recipe-routes-client.firebaseapp.com",
  projectId: "recipe-routes-client",
  storageBucket: "recipe-routes-client.appspot.com",
  messagingSenderId: "184163295665",
  appId: "1:184163295665:web:2be2f0c7eb74e144a59d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;