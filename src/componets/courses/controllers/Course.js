import firebase from '../../../firebase.js';

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
}

export default new Course();
