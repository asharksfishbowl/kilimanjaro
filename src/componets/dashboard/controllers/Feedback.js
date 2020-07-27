import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Feedback {
  async createFeedback(feedback) {
    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      try {
        const callCreateFeedback = firebase.functions.httpsCallable('addFeedback');
        await callCreateFeedback(feedback);
      } catch (e) {
        console.log(e.message);
      } finally {
        return console.log('here');
      }
    }
  }
}

export default new Feedback();
