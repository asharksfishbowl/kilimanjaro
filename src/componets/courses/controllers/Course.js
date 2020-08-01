import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

// Course Images
import SoftwareImg from '../assets/software.png';

// TODO: Make this firbase driven
const courses = [{
  key: 1,
  image: SoftwareImg,
  link: '/courses',
  description: 'Here we will dive into code and start with Web Apps and then Android & IOS Next :)'
},{
  key: 2,
  image: MusicImg,
  link: '/MusicCreation',
  description: 'Here we will dive into my 25 year madness and passion for sound, creating a full song from the ground up'
},{
  key: 3,
  image: PhotoImg,
  link: '/VideoCreation',
  description: 'Here we will dive into how to create cool photos, everthing from neat editing tricks to everything I have learned with a camera'
}];

class Course {
  getCourses(){
    return courses;
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

export default new Dashboard();
