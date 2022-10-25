import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    // apiKey: "AIzaSyBpugV8U4_hq0RYD8h0WVCnE6kV-p4StBM",
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "mood-meter-3b4c3.firebaseapp.com",
    projectId: "mood-meter-3b4c3",
    storageBucket: "mood-meter-3b4c3.appspot.com",
    messagingSenderId: "524875890329",
    appId: "1:524875890329:web:94248c250c509385508208",
    measurementId: "G-M3FWJMCT7N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };