// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBIvb1OsgWKAVnbotQlsa18upphmumwgB0',
    authDomain: 'bloggg-58123.firebaseapp.com',
    projectId: 'bloggg-58123',
    storageBucket: 'bloggg-58123.firebasestorage.app',
    messagingSenderId: '904244822605',
    appId: '1:904244822605:web:28764aaebfcc4a60fad204',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
