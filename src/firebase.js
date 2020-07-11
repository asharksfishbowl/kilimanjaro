import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyCwf1CkW5fBFYPq5rSDp9wdFM2m52mNbQw",
  authDomain: "kilimanjaro-4c1b5.firebaseapp.com",
  databaseURL: "https://kilimanjaro-4c1b5.firebaseio.com",
  projectId: "kilimanjaro-4c1b5",
  storageBucket: "kilimanjaro-4c1b5.appspot.com",
  messagingSenderId: "862898387439",
  appId: "1:862898387439:web:05f41d763d7f4ea5df1e1a",
  measurementId: "G-F5R18SNW0C"
};

firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();
firebase.functions = firebase.functions();

export default firebase;
