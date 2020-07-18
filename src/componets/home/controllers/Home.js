import React from 'react';
import firebase from '../../../firebase.js';
import SweetAlert from 'react-bootstrap-sweetalert';

class Home {
  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');

    callHelloWorld('Hello')
      .then(
        (result) =>
          <SweetAlert
            success
            onConfirm={(response) => this.onRecieveInput(response)}
            title="We connected!!!"
          >
            {result}
          </SweetAlert>
      )
      .catch(
        (error) =>
          <SweetAlert
            error
            onConfirm={(response) => this.onRecieveInput(response)}
            title="Oops World"
          >
            Error = {error.message} Error
          </SweetAlert>
      );
  }
}

export default new Home();
