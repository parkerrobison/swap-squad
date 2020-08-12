
const nodemailer = require("nodemailer");
const { primaryKeyAttribute } = require("./models/User");


  async function sendEmail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: 'swapsquadteam@gmail.com',
        pass: 'boycpfiymxjvrscr',
      },
      
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      to: 'parker.robison@hotmail.com',
      subject: 'Hello',
      body: 'This is short',
    });


    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  sendEmail().catch((err) => {
    console.log(err);
  });