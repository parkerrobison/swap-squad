const router = require("express").Router();
const sgMail = require('@sendgrid/mail');
const {
  User,
  Post
} = require('../../models');
const withAuth = require('../../utils/auth');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/request", (req, res) => {
  async function sendEmail() {

    //current user id
    const user = await User.findOne({
      where: {
        id: req.session.user_id
      }
    });
    //post id current post
    const post_item = await Post.findOne({
      where: {
        id: req.body.post_id
      }
    });
    //author currently post
    const author_post = await User.findOne({
      where: {
        id: post_item.user_id
      }
    });

    // email template

    const msg = {
      to: author_post.email,
      from: 'noreplyswapsquad@gmail.com',
      subject: 'Swap Squad - Somebody wants to trade!',
      text: 'Hello ' + author_post.username + ', \n Looks like user ' + user.username + ' email: ' + user.email + ' wants to trade in regards to the post with this title: ' + post_item.title + '! Please contact them and start your trade.',
      
    };
    await sgMail.send(msg);

    res.status(204).send();

  }

  sendEmail().catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;