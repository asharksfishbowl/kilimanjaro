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
        const record = await callAddFeedback({'feedback':feedback});
        return record;
      } catch (e) {
        console.log(e.message);
      } 
    }
  };

  async getFeedbacks() {
    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      try {
        const callGetFeedback = firebase.functions.httpsCallable('getFeedbacks');
        const feedbacks = await callGetFeedback();
        return feedbacks;
      } catch (e) {
        console.log(e.message);
      }
    }
  };
}

export default new Feedback();
