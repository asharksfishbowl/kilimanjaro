import firebase from '../../../firebase.js';

class Contact {
  async createQuestion(question) {
    try {
      const db = firebase.firestore();
      const record = db.collection("mail").add({
        to: ["asharksfishbowl@gmail.com", 'supermaario5@gmail.com', 'dcmiguel07@gmail.com'],
        from: "nick.marino@asharksfishbowl.com",
        message:{
          subject: "We have a question from " + question.email,
          text: "",
          html: "<h1>" + question.question + "</h1>"
        }
      });
      return {'success':true, 'response':record};
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default new Contact();
