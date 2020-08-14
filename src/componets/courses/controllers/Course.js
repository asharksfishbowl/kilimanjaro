import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Course {
  getLessons(setLessons){
    firebase.database.ref('lessons').on('value', function(snapshot){
      let result = [];
      snapshot.forEach(data => {
        let record = data.val();
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

  create(lesson){
    firebase.database.ref('lessons/' + lesson.name).set(lesson, function(error) {
      if (error) {
        console.log(error);
      } else {
        swal('Data saved successfully Shark!!!', "Thanks :)", "success");
        return lesson;
      }
    });
  };

  delete(lesson){
    firebase.database.ref('lessons/' + lesson).remove().then(function() {
      console.log("Remove succeeded.")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
  };
}

export default new Course();
