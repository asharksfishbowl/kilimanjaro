// NOTE: Trying to seperate the functions out
const functions = require('firebase-functions');
exports.helloWorld = functions.https.onCall((data, response) => {
  let message = data + ' ' + 'World';
  return message;
});
