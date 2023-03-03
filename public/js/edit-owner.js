// EDIT THE OWNER 

function backEditOwnerForm() {
  document.location.replace('/profile');
}

// NOTE - need to edit below for owner form

const editOwnerFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#editowner-username').value.trim();
  const location_zip = document.querySelector('#editowner-location_zip').value.trim();
  const first_name = document.querySelector('#editowner-first_name').value.trim();
  const last_name = document.querySelector('#editowner-last_name').value.trim();
  const gender = document.querySelector('#editowner-gender').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);
  
  const response = await fetch(`/api/owners/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ username, location_zip, first_name, last_name, gender }),
    headers: { 'Content-Type': 'application/json' },
  });

  // IF response is successful, then reload
  if (response.ok) {
    document.location.replace(`/profile`);
  } else {
    alert(response.statusText);
  }

};

document.querySelector('#submitOwnerEdit-btn').addEventListener('click', editOwnerFormHandler);