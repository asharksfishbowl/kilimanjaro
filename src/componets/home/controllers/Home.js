import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Home {
  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    callHelloWorld('Hello')
      .then(
        (result) => {swal(result.data, "Thanks for saying hello shark :)", "success")}
      )
      .catch(
        (error) => {swal(error.message, "We're still lost :(", "error")}
      );
  }
}

export default new Home();
