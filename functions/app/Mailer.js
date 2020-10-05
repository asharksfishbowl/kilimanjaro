// NOTE: Trying to seperate the functions out
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors');

/**
* Here we're using Gmail to send
*/
exports.sendMail = functions.https.onCall((request, response) => {
    return cors(request, response, () => {
        const from = request.from;
        const to = request.to;
        const message = request.message;
        const accessKey = 'Firebase';
        const secretKey = 'jpvzffpwvczgmqef';

        let transporter = nodemailer.createTransport(smtpTransport({
          service: 'gmail',
          auth: {
              user: sesAccessKey,
              pass: sesSecretKey
          }
        }));

        const html = `
          <div>
            <h4>Information</h4>
            <ul>
              <li>
                Email - ${email || ""}
              </li>
            </ul>
            <h4>Message</h4>
            <p>${message || ""}</p>
          </div>
        `;

        const mailOptions = {
            to: to,
            from: from,
            cc: "supermaario5@gmail.com, dcmiguel07@gmail.com",
            subject: "Message from a potenial client",
            html: html,
            text: html
        };
        // returning result
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
              console.log(error.message);
            }
            console.log(info);
            response.send({
              success: true,
              message: 'Mail Sent'
            }).catch(() => {
              response.status(500).send("error");
            });
        });
    });
});
