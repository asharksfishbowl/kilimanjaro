import firebase from '../../../firebase.js';
import swal from '@sweetalert/with-react';

// Course Images
import SoftwareCourseImg from '../assets/software.png';
import MusicCourseImg from '../assets/music.jpg';
import PhotoCourseImg from '../assets/photos.jpg';
import ArtCourseImg from '../assets/art.jpg';
import CookingCourseImg from '../assets/cooking.jpg';
import RecycleCourseImg from '../assets/recycle.jpg';

// TODO: Make this firbase driven
const courses = [{
  key: 1,
  image: SoftwareCourseImg,
  link: '/SoftwareCreation',
  description: 'Here we will dive into code and start with Web Apps and then Android & IOS Next :)'
},{
  key: 2,
  image: MusicCourseImg,
  link: '/MusicCreation',
  description: 'Here we will dive into my 25 year madness and passion for sound, creating a full song from the ground up'
},{
  key: 3,
  image: PhotoCourseImg,
  link: '/VideoCreation',
  description: 'Here we will dive into how to create cool photos, everthing from neat editing tricks to everything I have learned with a camera'
},{
  key: 4,
  image: ArtCourseImg,
  link: '/MakerCreation',
  description: 'Here we will dive into ways I like to relax by creating art, all kinds to! :)'
},{
  key: 5,
  image: CookingCourseImg,
  link: '/MakerCreation',
  description: 'Here we dive into how to create fun, creative and most of all, delicious meals :)'
},{
  key: 6,
  image: RecycleCourseImg,
  link: '/PreciousPlastic',
  description: 'Here we will dive into how recycle material into something new and awesome! :)'
}];

class Dashboard {
  getCourses(){
    return courses;
  };

  helloWorld(){
    const callHelloWorld = firebase.functions.httpsCallable('helloWorld');
    callHelloWorld()
      .then()
      .catch((err) => {
        console.log(err);
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

export default new Dashboard();
