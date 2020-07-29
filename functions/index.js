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

exports.addFeedback = functions.https.onCall((data, context) => {
  const feedback = data.feedback;

  // Checking attribute.
  if (!(typeof feedback === 'string') || feedback.length === 0) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
      'one arguments "text" containing the message text to add.'
    );
  }

  // Checking that the user is authenticated.
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' +
      'while authenticated.'
    );
  }

  // Authentication / user information is automatically added to the request.
  const uid = context.auth.uid;
  const name = context.auth.token.name || null;
  const picture = context.auth.token.picture || null;
  const email = context.auth.token.email || null;

  // Saving the new message to the Realtime Database.
  const sanitizedFeedback = sanitizer.sanitizeText(feedback); // Sanitize the message.
  return admin.database().ref('/feedbacks').push({
    feedback: sanitizedFeedback,
    author: { uid, name, picture, email },
  }).then(() => {
    console.log('New Record Created');
    return { feedback: sanitizedFeedback };
  })
    .catch((error) => {
      throw new functions.https.HttpsError('unknown', error.message, error);
    });
});
