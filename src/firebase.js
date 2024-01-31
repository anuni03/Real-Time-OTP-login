// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6faQeuDHVfk-S15_yrcnj10ZMT9Di56Q",
  authDomain: "otp-proj-1de02.firebaseapp.com",
  projectId: "otp-proj-1de02",
  storageBucket: "otp-proj-1de02.appspot.com",
  messagingSenderId: "1054951812322",
  appId: "1:1054951812322:web:9205e99badea7cd7e482bb",
  measurementId: "G-LG27HGR8FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
