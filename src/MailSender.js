const nodemailer = require('nodemailer');

class MailSender {
    constructor() {
        this._transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_ADDRESS,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }

    sendEmail(targetEmail, content) {
        const message = {
            from: 'rzsakmir@gmail.com',
            // from: 'Notes App', // tidak di kenali oleh gmail dan tidak sesuai dengan email yang dikirimkan
            to: targetEmail,
            subject: 'Pamer',
            text: `Send Mail Use NodeMailer and Message Broker`,
            attachments: [
                {
                    filename: 'resume.pdf',
                    content,
                    // path: 'resume.pdf' //for send file
                }
            ],
        };

        return this._transporter.sendMail(message);
    };
}

module.exports = MailSender;
