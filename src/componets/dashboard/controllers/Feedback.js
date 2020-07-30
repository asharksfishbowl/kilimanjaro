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

  // TODO: Get this this to pass data back
  async getFeedbacks() {
     if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      try {
        firebase.database.ref('feedbacks')
          .on('value', function(snapshot){
            let result = [];
            snapshot.forEach(data => {
              let record = data.val();
              result.push(record.feedback);
            });
            // console.log(result);
            return result;
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  };
}

export default new Feedback();
