// DOG - ADD & DELETE

// Show the dog form and reset the fields
function showNewDogForm() {
  const dogForm = document.querySelector('form');
  dogForm.reset();
  document.querySelector('.dogForm').style.display = 'block';
  document.querySelector('#submitDog-btn').style.display = 'block';
}

// // Hide the dog form after the form has been submitted
// function hideNewDogForm() {
//   document.querySelector('.dogForm').style.display = 'none';
//   document.querySelector('#submitDog-btn').style.display = 'none';
// }

// Back button for the dog form if the user doesn't want to add another dog 
function backDogForm() {
  document.querySelector('.dogForm').style.display = 'none';
}

// POST a new DOG to table
const addDogFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#dog-name').value.trim();
  const age = document.querySelector('#dog-age').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const gender = document.querySelector('#dog-gender').value.trim();

  // CREATE-POST a dog from OWNER profile page
  if (name && age && breed && gender) {
    const response = await fetch('/api/dogs', {
      method: 'POST',
      body: JSON.stringify({ name, age, breed, gender }),
      headers: { 'Content-Type': 'application/json' },
    });
    // IF response is successful, then go to the profile
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('#submitDog-btn').addEventListener('click', (event) => {
  dogValidation(event);
  addDogFormHandler(event);
});

// DELETE a dog
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete dog profile');
    }
  }
};
document
  .querySelector('.dog-list').addEventListener('click', delButtonHandler);



//Validations
function dogValidation(event) {
  event.preventDefault();
  const name = document.querySelector('#dog-name').value.trim();
  const age = document.querySelector('#dog-age').value.trim();
  const ageLength = age.length;
  const breed = document.querySelector('#dog-breed').value.trim();

  const nameError = document.querySelector('.no-dog-name-msg')
  const ageError = document.querySelector('.no-dog-age-msg')
  const maxAgeError = document.querySelector('.max-dog-age-msg')
  const breedError = document.querySelector('.no-dog-breed-msg')

  if (!name) {
    nameError.classList.remove("d-none")
  } else {
    nameError.classList.add("d-none")
  }

  if (!age) {
    ageError.classList.remove("d-none")
    maxAgeError.classList.add("d-none")
  } else if (ageLength > 2) {
    ageError.classList.add("d-none")
    maxAgeError.classList.remove("d-none")
  }
  else if (age > 35) {
    ageError.classList.add("d-none")
    maxAgeError.classList.remove("d-none")
  } else {
    ageError.classList.add("d-none")
    maxAgeError.classList.add("d-none")
  }

  if (!breed) {
    breedError.classList.remove("d-none")
  } else {
    breedError.classList.add("d-none")
  }

  if (!name || !age || ageLength > 2 || age > 35 || !breed) {
    return
  }
}