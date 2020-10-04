const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sanitizer = require('../sanitizer.js');

exports.addFeedback = functions.https.onCall((data, context) => {
  const feedback = data.feedback;
  // Checking attribute.
  if (!(typeof feedback === 'string') || feedback.length === 0) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
      'one arguments "feedback" containing the message text to add.'
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
    timestamp: admin.database.ServerValue.TIMESTAMP,
  }).then(() => {
    return { feedback: sanitizedFeedback, success:true };
  })
  .catch((error) => {
    throw new functions.https.HttpsError('unknown', error.message, error);
  });
});
