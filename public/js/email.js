async function sendEmailRequest(event) {
  console.log("sending email")

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch('/api/email/request', {
    method: 'POST',
    body: JSON.stringify({
      post_id,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  //ideally this should be a modal but I couldn't get it to work.
 window.alert("The owner of this post has been sent an email. They will reach out to you at your email address to negotiate a trade.")
}
console.log("email button ready")
document.querySelector('.email-button').addEventListener('click', sendEmailRequest);
