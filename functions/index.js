const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onCall((data, response) => {
  let message = data + ' ' + 'World';
  return message;
});

exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});

exports.toTheFishbowl = functions.https.onRequest((request, response) => {
  response.redirect("asharksfishbowl.com");
});

const createRecord = (record => {
  return admin.firestore().collection('records')
    .add(record)
    .then(doc => console.log('record added', doc));
});

exports.create = functions.firestore
  .document('records/{recordId}')
  .onCreate(doc => {
    const data = doc.data();
    const record = {
      content: 'Added a new Record',
      user: `${record.authorFirstName} ${record.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createRecord(record);
  }
);

const createFeedback = (feedback => {
  return admin.firestore().collection('feedbacks')
    .add(feedback)
    .then(doc => console.log('some feedback was added', doc));
});

exports.createFeedback = functions.firestore
  .document('feedbacks/{feedbackId}')
  .onCreate(doc => {
    const data = doc.data();
    const feedback = {
      content: 'Thanks for your feedback! :)',
      user: `${data.authorFirstName} ${data.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      feedback: `${data.feedback}`
    };

    return createFeedback(feedback);
  }
);
