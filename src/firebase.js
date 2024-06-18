import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1ECPZqJ0CvyHoNdyUCL0yUDomfsoFcAw",
  authDomain: "crud-project-d2e05.firebaseapp.com",
  projectId: "crud-project-d2e05",
  storageBucket: "crud-project-d2e05.appspot.com",
  messagingSenderId: "95779069049",
  appId: "1:95779069049:web:71c47db54ed2801b62c8a8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
    app
}