import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArVnwqD85AfVAKnv7JhNg4bsK1cNhd46U",
  authDomain: "aula-firebase-b8878.firebaseapp.com",
  databaseURL: "https://aula-firebase-b8878-default-rtdb.firebaseio.com",
  projectId: "aula-firebase-b8878",
  storageBucket: "aula-firebase-b8878.appspot.com",
  messagingSenderId: "469733912441",
  appId: "1:469733912441:web:1c325d1a29acfebd4fc9a8",
  measurementId: "G-QPY5KZ21P1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;
