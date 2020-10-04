import firebase from '../firebase.js';
import swal from '@sweetalert/with-react';

class CRUD {
  create(collection, record, title, message){
    if (!title) {
      title = "Thanks Shark!!! :)";
    }

    if (!message) {
      message = 'Data saved successfully Shark!!!';
    }

    if(!firebase.auth.currentUser) {
      return swal('Sorry Shark', "You need to sign in first :)", "error");
    }
    else {
      const createRef = firebase.database.ref(collection);
      const pushCreateRef = createRef.push();

      pushCreateRef.set(record, function(error) {
        if (error) {
          console.log(error);
        } else {
          swal(title, message, "success");
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
