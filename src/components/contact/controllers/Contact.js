import firebase from '../../../firebase.js';

class Contact {
  async sendMessage(message) {
    try {
      const sendMail = firebase.functions.httpsCallable('sendMail');
      const record = await sendMail(message);
      return record;
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default new Contact();
