const functions = require('firebase-functions');
const admin = require('firebase-admin');

// NOTE: Load Custom Functions Here
const HelloWorld = require('./app/HelloWorld.js');
const RandomNumber = require('./app/RandomNumber.js');
const ToTheFishbowl = require('./app/ToTheFishbowl.js');
const Feedback = require('./app/Feedback.js');
const Mailer = require('./app/Mailer.js');

// Init Functions
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// App Functions
exports.helloWorld = HelloWorld.helloWorld;
exports.randomNumber = RandomNumber.randomNumber;
exports.toTheFishbowl = ToTheFishbowl.toTheFishbowl;
exports.addFeedback = Feedback.addFeedback;
exports.sendMail = Mailer.sendMail;
