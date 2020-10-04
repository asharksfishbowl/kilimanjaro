const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sanitizer = require('./sanitizer.js');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
// Example Functions
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

// Add new functions below this line
// TODO: Figure out how to load these functions in a seperate file

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

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asharksfishbowl',
        pass: 'Ilnbvm30@84'
    }
});

// NOTE: Function to send Email
exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const email = req.query.email;
        const message = req.query.message;

        const mailOptions = {
            from: email,
            to: "A Shark's Fishbowl <asharksfishbowl@gmail.com>",
            cc: "supermaario5@gmail.com, dcmiguel07@gmail.com",
            subject: "I'M A PICKLE!!!",
            html: `
              <p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
              <br />
              <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
              <br />
            ` + {message}
        };
        // returning result
        return transporter.sendMail(mailOptions, (error, info) => {
            if(error){
              console.log(error);
              return res.send(error.toString());
            }
            return res.send('Sended');
        });
    });
});
