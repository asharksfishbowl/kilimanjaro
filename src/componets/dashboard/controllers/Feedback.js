import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Feedback {
  async addFeedback(feedback) {
    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      try {
        const callAddFeedback = firebase.functions.httpsCallable('addFeedback');
        await callAddFeedback({'feedback':feedback});
      } catch (e) {
        console.log(e.message);
      } finally {
        return console.log('Final Feedback :)');
      }
    }
  }
}

export default new Feedback();
