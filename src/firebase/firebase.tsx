// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_FIREBASE_API_KEY,
//   authDomain:  process.env.REACT_FIREBASE_AUTH_DOMAIN,
//   projectId:  process.env.REACT_FIREBASE_PROJECT_ID,
//   storageBucket:  process.env.REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:  process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
//   appId:  process.env.REACT_FIREBASE_APP_ID,
//   measurementId:  process.env.REACT_FIREBASE_MEASURMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM",
  authDomain:  "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM",
  projectId:  "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM",
  storageBucket:  "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM",
  messagingSenderId:  "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM",
  appId:  "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM",
  measurementId:  "AIzaSyANzx6Z-o3S3Eh8saAVH9EJn-8dn1KTDRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);