import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCkt9keEOc3jc6vxhBPmA9qMfyB4lVpKd8",
    authDomain: "haligone.firebaseapp.com",
    databaseURL: "https://haligone.firebaseio.com",
    projectId: "haligone",
    storageBucket: "haligone.appspot.com",
    messagingSenderId: "500956983734",
    appId: "1:500956983734:web:20f4f9a55117ef63869117",
    measurementId: "G-9BJLPE5MJ5"
  };


const fire = firebase.initializeApp(firebaseConfig);


export default fire;

