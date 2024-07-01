// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4hqmSnVy6liY0Dlca6_ooMI_yIUy77Po",
    authDomain: "reactapp-46fbd.firebaseapp.com",
    databaseURL: "https://reactapp-46fbd-default-rtdb.firebaseio.com",
    projectId: "reactapp-46fbd",
    storageBucket: "reactapp-46fbd.appspot.com",
    messagingSenderId: "492562974363",
    appId: "1:492562974363:web:bdfad68942ac84e842a83e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app