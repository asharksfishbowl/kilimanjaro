import firebase from '../../../firebase.js';

class Feedback {
  create(feedback) {
    if(!firebase.auth.currentUser) {
      return alert('Not authorized')
    }
    else {
      try {
        firebase.functions.createFeedback(feedback);
      } catch (e) {
        console.log(e.message);
      } finally {
        return console.log('here');
      }
    }
  }
}

export default new Feedback();
