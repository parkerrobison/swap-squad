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
  console.log("email sent")
}
console.log("email button ready")
document.querySelector('.email-button').addEventListener('click', sendEmailRequest);
