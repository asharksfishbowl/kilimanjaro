import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwf1CkW5fBFYPq5rSDp9wdFM2m52mNbQw",
  authDomain: "kilimanjaro-4c1b5.firebaseapp.com",
  databaseURL: "https://kilimanjaro-4c1b5.firebaseio.com",
  projectId: "kilimanjaro-4c1b5",
  storageBucket: "kilimanjaro-4c1b5.appspot.com",
  messagingSenderId: "862898387439",
  appId: "1:862898387439:web:05f41d763d7f4ea5df1e1a",
  measurementId: "G-F5R18SNW0C"
};

class FirebaseDB {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.auth.signOut();
  }

  async register(firstName, lastName, email, password){
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
  }


	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

  addQuote(quote) {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
      quote
    })
  }

  async getCurrentUserQuote() {
    const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
    return quote.get('quote')
  }
}

export default new FirebaseDB();
