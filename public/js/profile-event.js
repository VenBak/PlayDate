const newFormHandler = async (event) => {
    event.preventDefault();
  
    const owner = document.querySelector('#owner-name').value.trim();
    const event = document.querySelector('#event-name').value.trim();
  
    // CREATE a event
    if (owner && event) {
      const response = await fetch(`/api/events`, {
        method: 'POST',
        body: JSON.stringify({ owner, event }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create event profile');
      }
    }
  };
  
  // DELETE a event
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete event profile');
      }
    }
  };
  
  document
    .querySelector('.new-event-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.event-list')
    .addEventListener('click', delButtonHandler);
  