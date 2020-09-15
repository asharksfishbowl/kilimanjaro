import firebase from '../firebase.js';
import swal from '@sweetalert/with-react';

class CRUD {
  create(collection, record, key){
    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      firebase.database.ref(collection + '/' + key).set(record, function(error) {
        if (error) {
          console.log(error);
        } else {
          swal('Data saved successfully Shark!!!', "Thanks :)", "success");
          return record;
        }
      });
    }
  };

  read(collection, key){
    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      return firebase.database.ref(collection + '/' + key).once('value').then(function(snapshot) {
        var record = (snapshot.val()) || 'Sorry Shark, No Record Found';
        return record;
      });
    }
  };

  delete(collection, record){
    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      firebase.database.ref(collection + '/' + record).remove().then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    }

  };
}

export default new CRUD();
