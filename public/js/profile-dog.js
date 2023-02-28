const newDogFormHandler = async (event) => {
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
        location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

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
    .querySelector('.new-dog-form')
    .addEventListener('submit', newDogFormHandler);
  
  document
    .querySelector('.dog-list')
    .addEventListener('click', delButtonHandler);
  