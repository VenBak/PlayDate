var dogForm = document.querySelector('form');


// Show the dog form and reset the fields
function showForm() {
    dogForm.reset();
    document.querySelector('.dogForm').style.display = 'block';
    document.querySelector('#submitDog-btn').style.display = 'block';
  }

// Hide the dog form after the form has been submitted
function hideForm() {
  document.querySelector('.dogForm').style.display = 'none';
  document.querySelector('#submitDog-btn').style.display = 'none';
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
  document.querySelector('#submitDog-btn').addEventListener('click', addDogFormHandler);




  // // DELETE a dog
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/dogs/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete dog profile');
  //     }
  //   }
  // };
  
 
  
  // document
  //   .querySelector('.dog-list')
  //   .addEventListener('click', delButtonHandler);
  