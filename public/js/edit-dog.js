
// NOTE 1.2: FUTURE DELETE - Form already ready so user doesn't need to click another button.
  // Leaving below in case we change our minds
    // function showEditDogForm() {
    //   document.querySelector('.edit-dog-form').style.display = 'block';
    //   document.querySelector('#submitEdit-btn').style.display = 'block';
    // }

    // // Hide the dog form after the form has been submitted
    // function hideEditDogForm() {
    //   document.querySelector('.edit-dog-form').style.display = 'none';
    //   document.querySelector('#submitEdit-btn').style.display = 'none';
    // }



// Back button for the dog form if the user doesn't want to add another dog 
function backEditDogForm() {
  document.location.replace('/profile');
}

const editDogFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#editdog-name').value.trim();
  const age = document.querySelector('#editdog-age').value.trim();
  const breed = document.querySelector('#editdog-breed').value.trim();
  const gender = document.querySelector('#editdog-gender').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);

  const response = await fetch(`/api/dogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, age, breed, gender }),
    headers: { 'Content-Type': 'application/json' },
  });

  // IF response is successful, then reload
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }

};

document.querySelector('#submitEdit-btn').addEventListener('click', editDogFormHandler);