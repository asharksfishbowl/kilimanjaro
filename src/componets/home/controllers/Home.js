import React from 'react';
import firebase from '../../../firebase.js';
import SweetAlert from 'react-bootstrap-sweetalert';

class Home {
  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    callHelloWorld()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new Home();
