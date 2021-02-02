import firebase from '../../../firebase.js';

class Blog {

  // Gets the full list of blogs
  getBlogs(setBlogs) {
    firebase.database.ref('blogs').on('value', function(snapshot){
      let result = [];
      snapshot.forEach(data => {
        let record = data.val();
        record.id = data.key;
        result.push(record);
      });
      if (result && result.length > 0) {
        console.log(result);
        setBlogs(result);
        return result;
      }
      else {
        setBlogs([]);
        return ['Nothing Yet'];
      }
    });
  };

  getBlogById(id, setBlog) {
    console.log(id);
    firebase.database.ref('blogs/' + id).on('value', function(snapshot){
      let result = snapshot.val();
      if (result) {
        result.id = id;
        console.log(result);
        setBlog(result);
        return result;
      }
      else {
        console.log('fuckels');
        setBlog([]);
        return ['Nothing Yet'];
      }
    });
  }
}

export default new Blog();
