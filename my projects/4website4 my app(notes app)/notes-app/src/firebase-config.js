import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoL1ZBgFNiyt08rvxS3YT-QkH0CNDUtfU",
    authDomain: "notes-app-952a5.firebaseapp.com",
    projectId: "notes-app-952a5",
    storageBucket: "notes-app-952a5.appspot.com",
    messagingSenderId: "856266954562",
    appId: "1:856266954562:web:e6e2699b4fd08f88f21adb",
    measurementId: "G-Z2RF144GYL"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);