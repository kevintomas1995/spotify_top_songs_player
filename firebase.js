import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBm_dz4JD3iNix2JTg2vLy4evGzZf84LLE",
    authDomain: "messenger-52b8f.firebaseapp.com",
    projectId: "messenger-52b8f",
    storageBucket: "messenger-52b8f.appspot.com",
    messagingSenderId: "540061137148",
    appId: "1:540061137148:web:4fa2b14b4d7923e7bbff79"
  };

  let app;

  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};