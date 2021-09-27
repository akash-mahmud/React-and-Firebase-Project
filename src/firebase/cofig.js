import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
  var firebaseConfig = {

    apiKey: "AIzaSyAlyo0S0Z7CveIVeA64KHYPLM9PUnT9hX4",

    authDomain: "akash-gallery.firebaseapp.com",

    projectId: "akash-gallery",

    storageBucket: "akash-gallery.appspot.com",

    messagingSenderId: "681446780189",

    appId: "1:681446780189:web:47f45c13ee29d71e9b85f4"

  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };
