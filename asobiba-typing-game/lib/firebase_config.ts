import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey : process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCV19YXsvvjErIpQBUJ50vWABunfR88vcg",
//   authDomain: "happynewyearapp-5e807.firebaseapp.com",
//   projectId: "happynewyearapp-5e807",
//   storageBucket: "happynewyearapp-5e807.firebasestorage.app",
//   messagingSenderId: "28176754006",
//   appId: "1:28176754006:web:3ed74e9d4de0f27a7762f7",
//   measurementId: "G-FRSD9B2S7S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);