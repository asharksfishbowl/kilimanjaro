import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Course {
  getLessons(setLessons){
    firebase.database.ref('lessons').on('value', function(snapshot){
      let result = [];
      snapshot.forEach(data => {
        let record = data.val();
        record.id = data.key;
        result.push(record);
      });
      if (result && result.length > 0) {
        console.log(result);
        setLessons(result);
        return result;
      }
      else {
        setLessons([]);
        return ['Nothing Yet'];
      }
    });
  };

  // TODO: tie this to socials
  like(){
    swal('Thanks for Liking', "Sorry the feature isn't ready yet but we are working on it :)", "success");
  };

  // TODO: tie this to socials
  share(){
    swal('Thanks for Sharing', "Sorry the feature isn't ready yet but we are working on it :)", "success");
  };
}

export default new Course();
