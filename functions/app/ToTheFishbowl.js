const functions = require('firebase-functions');
exports.toTheFishbowl = functions.https.onRequest((request, response) => {
  response.redirect("asharksfishbowl.com");
});
