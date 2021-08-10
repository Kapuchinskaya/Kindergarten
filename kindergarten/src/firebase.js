import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/app";
import "firebase/database";
import "firebase/storage";

import { kindergartenDB } from "./temp/kindergarten-export";

const firebaseConfig = {
  apiKey: "AIzaSyBatbrxpi8c4FMfBs1C_2rUUFuXUaKuGJA",
  authDomain: "kindergarten-v1.firebaseapp.com",
  projectId: "kindergarten-v1",
  storageBucket: "kindergarten-v1.appspot.com",
  messagingSenderId: "924111648789",
  appId: "1:924111648789:web:454dafd70729b76ea0761c",
  measurementId: "G-D78L5PBCZH",
};

firebase.initializeApp(firebaseConfig);

//passing data to FB

const DB = firebase.firestore();
const newsCollection = DB.collection("news");
const forParentsCollection = DB.collection("forParents");
const responsesCollection = DB.collection("responses");

// kindergartenDB.news.forEach((item) => {
//   newsCollection.add(item);
// });
// kindergartenDB.forParents.forEach((item) => {
//   forParentsCollection.add(item);
// });
// kindergartenDB.responses.forEach((item) => {
//   responsesCollection.add(item);
// });

export { firebase, newsCollection, forParentsCollection, responsesCollection };
