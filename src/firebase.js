import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCzVkuLk60IJl2taYKaMdOQMafXpv3QMZo",
  authDomain: "tinder-clone-f8f66.firebaseapp.com",
  databaseURL: "https://tinder-clone-f8f66.firebaseio.com",
  projectId: "tinder-clone-f8f66",
  storageBucket: "tinder-clone-f8f66.appspot.com",
  messagingSenderId: "778838746127",
  appId: "1:778838746127:web:61d41c73f2ae175788ef7a",
  measurementId: "G-J2K1GKMXHH"
};

firebase.initializeApp(firebaseConfig);

//access real time data base using firestore()
const database = firebase.firestore();


//export variable 
export default database;