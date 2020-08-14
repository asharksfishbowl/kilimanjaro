import firebase from '../../firebase.js';
import swal from '@sweetalert/with-react';

class CRUD {
  async create(collection) {
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
        swal('Sorry Shark', e.message, "error");
      }
    }
  };
}

export default new CRUD();
