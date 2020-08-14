// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Swap Squad - Somebody wants to trade!',
  text: 'Looks like somebody wants to trade with you. please check your message',
  html: '<strong>Swap Squad! Making trade fun and easy</strong>',
};
sgMail.send(msg);