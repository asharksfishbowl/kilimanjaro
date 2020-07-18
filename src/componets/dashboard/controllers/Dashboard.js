import firebase from '../../../firebase.js';

class Dashboard {
  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    callHelloWorld()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new Dashboard();
