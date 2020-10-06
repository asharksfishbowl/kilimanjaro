import firebase from '../../../firebase.js';

class Contact {
  async sendQuestion(question) {
    try {
      const sendMail = firebase.functions.httpsCallable('sendMail');
      const record = await sendMail(question);
      return record;
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default new Contact();
