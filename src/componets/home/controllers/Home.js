import firebase from '../../../firebase.js';

class Home {
  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    callHelloWorld('Hello')
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new Home();
