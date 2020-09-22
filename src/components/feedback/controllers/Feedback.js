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

  getFeedbacks(setFeedbacks){
    firebase.database.ref('feedbacks')
      .on('value', function(snapshot){
        let result = [];
        snapshot.forEach(data => {
          let record = data.val();
          result.push(record.feedback);
        });
        if (result && result.length > 0) {
          setFeedbacks(result);
        }
        else {
          setFeedbacks([
            'Control is not convinced',
            'But the computer has the evidence',
            'No need to abort'
          ]);
        }
        return result;
    });
  }
}

export default new Feedback();
