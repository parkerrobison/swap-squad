async function editFormHandler(event) {
  event.preventDefault();

  // turns the http call into a list divided by "/" and grabs the last item in the list (which should be the id)
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // grab both title and text of updated post and assign names
  const title = document
  .querySelector('input[name="post-title"]')
  .value.trim();

  const post_text = document
    .querySelector(`textarea[name="post-text"]`)
    .value.trim();

  // update data in server
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, post_text }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // redirect to "my-stuff" page when response is successful, alert box if not
  if (response.ok) {
    document.location.replace("/my-stuff");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
