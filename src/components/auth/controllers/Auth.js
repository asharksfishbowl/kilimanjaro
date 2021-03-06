
import firebase from '../../../firebase.js';

class Auth {
  login(email, password){
    return firebase.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return firebase.auth.signOut();
  }

  async register(firstName, lastName, email, password){
    await firebase.auth.createUserWithEmailAndPassword(email, password);
    return firebase.auth.currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
  }

	isInitialized() {
		return new Promise(resolve => {
			firebase.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentDisplayName() {
    if (firebase.auth.currentUser) {
      return firebase.auth.currentUser.displayName;
    } else {
      return false;
    }
	}

  isLoggedIn() {
    if (firebase.auth.currentUser) {
      return true;
    } else {
      return false;
    }
	}

  addQuote(quote) {
    if(!firebase.auth.currentUser) {
      return alert('Not authorized')
    }

    return firebase.database.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
      quote
    })
  }

  async getCurrentUserQuote() {
    const quote = await firebase.database.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
    return quote.get('quote')
  }
}

export default new Auth();
