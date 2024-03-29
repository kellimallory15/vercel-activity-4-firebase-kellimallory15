import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzY-bVucsiX76937CUuT-OUYV6UCWbn6U",
    authDomain: "subscriptions-407d9.firebaseapp.com",
    projectId: "subscriptions-407d9",
    storageBucket: "subscriptions-407d9.appspot.com",
    messagingSenderId: "637693266076",
    appId: "1:637693266076:web:47dc95e7b5d1aa464b0559"  
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
