// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDsM2aL8mnJHJOPw87OwBXDEsw3wkdu9E",
    authDomain: "blogg-fa5da.firebaseapp.com",
    projectId: "blogg-fa5da",
    storageBucket: "blogg-fa5da.firebasestorage.app",
    messagingSenderId: "257740473172",
    appId: "1:257740473172:web:0793fe5c618a93bf49fec1",
    measurementId: "G-F47B8TH17E"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
