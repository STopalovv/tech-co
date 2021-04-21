import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1yLNOaTw1XQixmNMswNIuf0oq6QUmErs",
    authDomain: "tech-co.firebaseapp.com",
    projectId: "tech-co",
    storageBucket: "tech-co.appspot.com",
    messagingSenderId: "374758450905",
    appId: "1:374758450905:web:6c0ef13486980d704300c8",
    measurementId: "G-TQ4WE83SR6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
