import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADFAXhqw9TkfSatEDjW_aaVma-KWtf1CA",
    authDomain: "linkedin-clone-2bbc7.firebaseapp.com",
    projectId: "linkedin-clone-2bbc7",
    storageBucket: "linkedin-clone-2bbc7.appspot.com",
    messagingSenderId: "852509293636",
    appId: "1:852509293636:web:17706ff343f694ba81d011"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const authen = firebase.auth()

export { db, authen }