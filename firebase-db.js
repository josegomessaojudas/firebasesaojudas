// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBLMqYJwxF5_es4ZzwrYi5vWmh9gLXOKf8",
    authDomain: "tarefas-2b012.firebaseapp.com",
    databaseURL: "https://tarefas-2b012-default-rtdb.firebaseio.com",
    projectId: "tarefas-2b012",
    storageBucket: "tarefas-2b012.appspot.com",
    messagingSenderId: "320294662384",
    appId: "1:320294662384:web:121e9bdd5da7a700a69235",
    measurementId: "G-6R7J1MFKP3"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database


