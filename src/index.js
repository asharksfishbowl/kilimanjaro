import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
