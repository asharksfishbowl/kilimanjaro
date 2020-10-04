// NOTE: Trying to seperate the functions out
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asharksfishbowl@gmail.com',
        pass: 'Ilnbvm30@84'
    }
});

// NOTE: Function to send Email
exports.sendMail = functions.https.onCall((data, request) => {
    cors(data, request, () => {
        const email = data.email;
        const message = data.message;

        const mailOptions = {
            from: "A Shark's Fishbowl <asharksfishbowl@gmail.com>",
            to: "A Shark's Fishbowl <asharksfishbowl@gmail.com>",
            cc: "supermaario5@gmail.com, dcmiguel07@gmail.com",
            subject: "Message from potenial client",
            html: "<h1>hello</h1>"

        };
        // returning result
        return transporter.sendMail(mailOptions, (error, info) => {
            if(error){
              console.log(error);
              throw new functions.https.HttpsError('unknown', error.message, error);
              return request.send(error.toString());
            }
            return request.send('Sended');
        });
    });
});
