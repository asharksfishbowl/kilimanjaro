// NOTE: Trying to seperate the functions out
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors');

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
exports.sendMail = functions.https.onCall((data, response) => {
    cors(data, response, () => {
        const email = data.email;
        const message = data.message;

        const mailOptions = {
            from: email,
            to: "asharksfishbowl@gmail.com",
            cc: "supermaario5@gmail.com, dcmiguel07@gmail.com",
            subject: "Message from a potenial client",
            html: "<h1>"+ message +"</h1>"
        };
        // returning result
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
              console.log(error);
              throw new functions.https.HttpsError('unknown', error.message, error);
              response.send(error.toString());
            }
            response.send('Mail Sent');
        });
    });
});
