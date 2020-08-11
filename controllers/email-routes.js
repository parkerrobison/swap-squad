const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/send-email-form", (req, res) => {
  async function sendEmail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com", 
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PW, 
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      to: req.body.to,
      subject: req.body.subject,
      body: req.body.body,
    });

    res.json({
      message: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  sendEmail().catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
