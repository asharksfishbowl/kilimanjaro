import firebase from '../../../firebase.js';

import swal from '@sweetalert/with-react';


// Course Images
import SoftwareImg from '../assets/software.png';
import MusicImg from '../assets/music.jpg';
import PhotoImg from '../assets/photos.jpg';
import ArtImg from '../assets/art.jpg';
import CookingImg from '../assets/cooking.jpg';
import RecycleImg from '../assets/recycle.jpg';

// TODO: Make this firbase driven
const courses = [{
  key: 1,
  image: SoftwareImg,
  link: '/Courses',
  description: 'Here we will dive into code and start with Web Apps and then Android & IOS Next :)'
},{
  key: 2,
  image: MusicImg,
  link: '/Music',
  description: 'Here we will dive into my 25 year madness and passion for sound, creating a full song from the ground up'
},{
  key: 3,
  image: PhotoImg,
  link: '/VideoCreation',
  description: 'Here we will dive into how to create cool photos, everthing from neat editing tricks to everything I have learned with a camera'
},{
  key: 4,
  image: ArtImg,
  link: '/DIY',
  description: 'Here we will dive into ways I like to relax by creating art, all kinds to! :)'
},{
  key: 5,
  image: CookingImg,
  link: '/Cooking',
  description: 'Here we dive into how to create fun, creative and most of all, delicious meals :)'
},{
  key: 6,
  image: RecycleImg,
  link: '/PreciousPlastic',
  description: 'Here we will dive into how recycle material into something new and awesome! :)'
}];

class Dashboard {
  getCourses(){
    return courses;
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
