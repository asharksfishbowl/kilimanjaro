import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Home {
  async helloWorld(callback){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    await callHelloWorld('Hello')
      .then(
        (result) => {
          if (callback) {
            swal(result.data, "Thanks for saying hello shark :)", "success")
            callback();
          }
        }
      )
      .catch(
        (error) => {
          if (callback) {
            swal(error.message, "We're still lost :(", "error")
            callback();
          }
        }
      );
  }
}

export default new Home();
