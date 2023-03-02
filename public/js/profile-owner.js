// DELETE owner
  const delOwnerButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/owners/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete owner profile');
      }
    }
  };
  document
    .querySelector('#delete-owner-btn').addEventListener('click', delOwnerButtonHandler);
  


