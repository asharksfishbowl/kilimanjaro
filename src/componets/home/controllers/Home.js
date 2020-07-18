import firebase from '../../../firebase.js';

class Home {
  showMsg(message){
    alert(message);
  }

  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    callHelloWorld()
      .then()
      .catch((err) => {
          alert(err.message);
      });
  }
}

export default new Home();
