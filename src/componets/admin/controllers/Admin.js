// import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

class Admin {

  // TODO: tie this to socials
  like(){
    swal('Thanks for Liking', "Sorry the feature isn't ready yet but we are working on it :)", "success");
  };

  // TODO: tie this to socials
  share(){
    swal('Thanks for Sharing', "Sorry the feature isn't ready yet but we are working on it :)", "success");
  };
}

export default new Admin();
