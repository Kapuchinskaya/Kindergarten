import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/app";
import "firebase/database";

import { kindergartenDB } from "./temp/kindergarten-export";

const firebaseConfig = {
  apiKey: "AIzaSyBttZUQDkh7fF7OsTon1XCec6UnznT7j0g",
  authDomain: "kindergarten-study.firebaseapp.com",
  projectId: "kindergarten-study",
  storageBucket: "kindergarten-study.appspot.com",
  messagingSenderId: "1074721020838",
  appId: "1:1074721020838:web:f30d566b40e46072ed4d67",
  measurementId: "G-4RPY4TWTGQ",
};

firebase.initializeApp(firebaseConfig);

//passing data to FB

const DB = firebase.firestore();
const newsCollection = DB.collection("news");
const forParentsCollection = DB.collection("forParents");

// kindergartenDB.news.forEach((item) => {
//   newsCollection.add(item);
// });
// kindergartenDB.forParents.forEach((item) => {
//   forParentsCollection.add(item);
// });

export { firebase, newsCollection, forParentsCollection };
