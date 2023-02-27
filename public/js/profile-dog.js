const newFormHandler = async (event) => {
    event.preventDefault();
  
    const owner = document.querySelector('#owner-name').value.trim();
    const dog = document.querySelector('#dog-name').value.trim();
  
    // CREATE a dog
    if (owner && dog) {
      const response = await fetch(`/api/dogs`, {
        method: 'POST',
        body: JSON.stringify({ owner, dog }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create dog profile');
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
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.dog-list')
    .addEventListener('click', delButtonHandler);
  