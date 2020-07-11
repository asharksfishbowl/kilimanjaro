import firebase from '../../../firebase.js';

class Home {
  showMsg(message){
    alert(message);
  }

  helloWorld(){
    const helloWorld = firebase.functions.httpsCallable('helloWorld');
    helloWorld()
      .then()
      .catch((err) => {
          alert(err.message);
      })
  }
}

export default new Home();
