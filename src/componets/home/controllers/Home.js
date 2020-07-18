import firebase from '../../../firebase.js';

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
