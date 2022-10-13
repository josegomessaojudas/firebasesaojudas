// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// incluir as configurações obtidas no firebase console 
//
const firebaseConfig = {
    apiKey: "AIzaSyC-SzbEFoxED5N_x9s_fSXN2v1lILCqT3Q",
    authDomain: "usabilidademanhamooca.firebaseapp.com",
    databaseURL: "https://usabilidademanhamooca-default-rtdb.firebaseio.com",
    projectId: "usabilidademanhamooca",
    storageBucket: "usabilidademanhamooca.appspot.com",
    messagingSenderId: "284528801514",
    appId: "1:284528801514:web:4e6de97ad24959ef3c0993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
