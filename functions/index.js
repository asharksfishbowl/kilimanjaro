const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onCall((data, context) => {
  response.send("Hello World!");
});

exports.randomNumber = functions.https.onCall((data, context) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});

exports.toTheFishbowl = functions.https.onRequest((data, context) => {
  response.redirect("asharksfishbowl.com");
});
