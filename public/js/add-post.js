async function newFormHandler(event) {
  event.preventDefault();

  // get all fields from form
  const post_title = document.querySelector("#post-title").value.trim();
  const post_text = document.querySelector("#post-text").value.trim();
  const item_name = document.querySelector("#item-name").value.trim();
  const item_description = document
    .querySelector("#item-description")
    .value.trim();
  const item_quantity = document.querySelector("#item-quantity").value.trim();
  const item_condition = document.querySelector("#item-condition").value.trim();
  if (
    !post_title ||
    !post_text ||
    !item_name ||
    !item_quantity ||
    !item_condition ||
    !item_description
  ) {
    alert("Please fill out all required fields");
    return;
  }

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title: post_title,
      post_text: post_text,
      item_name: item_name,
      item_description: item_description,
      item_quantity: item_quantity,
      item_condition: item_condition,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/my-stuff");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
