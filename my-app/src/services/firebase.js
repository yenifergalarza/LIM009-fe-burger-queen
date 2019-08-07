// Your web app's Firebase configuration
import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDgGKewsPUQPwai71E-FePagG6XcHk0pOA",
  authDomain: "burguerqueen-666.firebaseapp.com",
  databaseURL: "https://burguerqueen-666.firebaseio.com",
  projectId: "burguerqueen-666",
  storageBucket: "burguerqueen-666.appspot.com",
  messagingSenderId: "221577019452",
  appId: "1:221577019452:web:1e57418e8a1d93d9"
};
export const firebaseInit = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export const productsData = firestore.collection("menu");

export const ordersData = firestore.collection("pedidos");
