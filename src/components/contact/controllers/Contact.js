import firebase from '../../../firebase.js';

class Contact {
  async createQuestion(question) {
    try {
      const createQuestion = firebase.functions.httpsCallable('createQuestion');
      const record = await createQuestion(question);
      return record;
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default new Contact();
