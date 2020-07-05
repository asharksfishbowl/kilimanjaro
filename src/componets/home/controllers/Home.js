import firebase from '../../../firebase.js';

class Home {
  constructor() {
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    console.log(this.auth);
    console.log(this.db);
  }

  helloWorld(){
    const helloWorld = firebase.functions().httpsCallable('helloWorld');
    alert(helloWorld);
  }
}

export default new Home();
