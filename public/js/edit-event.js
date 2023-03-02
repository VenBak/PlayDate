// For the date picker
start_datePickerId.min = new Date().toLocaleDateString('fr-ca');
end_datePickerId.min = new Date().toLocaleDateString('fr-ca');

// Back button for the event form if the user doesn't want to add another event 
function backEditEditForm() {
  document.location.replace('/profile');
}

const editEventFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#editevent-name').value.trim();
  const location_zip = document.querySelector('#editevent-location_zip').value.trim();
  const description = document.querySelector('#editevent-description').value.trim();
  const start_date = document.querySelector('.editevent-start_date').value.trim();
  const end_date = document.querySelector('.editevent-end_date').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);

  const response = await fetch(`/api/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, location_zip, description, start_date, end_date }),
    headers: { 'Content-Type': 'application/json' },
  });

  // IF response is successful, then reload
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }

};

document.querySelector('#submitEventEdit-btn').addEventListener('click', editEventFormHandler);
