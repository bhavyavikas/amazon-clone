import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPEs75qC_SItWFLI7rxdo9MxaGwY09TD4",
    authDomain: "clone-b0e10.firebaseapp.com",
    projectId: "clone-b0e10",
    storageBucket: "clone-b0e10.appspot.com",
    messagingSenderId: "387284851550",
    appId: "1:387284851550:web:3d954544e3127e435fcdcf",
    measurementId: "G-2YCNPJNXPQ"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };