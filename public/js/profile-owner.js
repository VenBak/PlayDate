// DELETE owner
  const delOwnerButtonHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  console.log(id)

      const response = await fetch(`/api/owners/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete owner profile');
      }

  };
  document
    .querySelector('#delete-owner-btn').addEventListener('click', delOwnerButtonHandler);