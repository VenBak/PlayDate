// For the date picker - prevent picking days before today's date
editEventStart_datePickerId.min = new Date().toLocaleDateString('fr-ca');


// Back button for the event form if the user doesn't want to edit event 
function backEditEventForm() {
  document.location.replace('/profile');
}

// Hide and appear  
function editFromSummary() {
  const eventEditForm = document.querySelector('.edit-event-form');

  document.querySelector('#eventEditCard').style.display = 'block';
  eventEditForm.scrollIntoView({ behavior: 'smooth', block: "start" });
}

const editEventFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#editevent-name').value.trim();
  const location_zip = document.querySelector('#editevent-location_zip').value.trim();
  const description = document.querySelector('#editevent-description').value.trim();
  const start_date = document.querySelector('.editevent-start_date').value.trim();
  const time = document.querySelector('#editevent-time').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);

  const response = await fetch(`/api/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, location_zip, description, start_date, time }),
    headers: { 'Content-Type': 'application/json' },
  });

  // IF response is successful, then reload
  if (response.ok) {
    document.location.reload();
  } else {
    console.log(response.statusText);
  }

};

document.querySelector('#submitEventEdit-btn').addEventListener('click', (event) => {
  eventValidation(event);
  editEventFormHandler(event);
});

//Validations
function eventValidation(event) {
  event.preventDefault();
  const name = document.querySelector("#editevent-name").value.trim();
  const location_zip = document.querySelector('#editevent-location_zip').value.trim();
  const ziplength = location_zip.length;
  const description = document.querySelector("#editevent-description").value.trim();
  const start_date = document.querySelector("#editEventStart_datePickerId").value.trim();
  const time = document.querySelector('#editevent-time').value.trim();

  const nameError = document.querySelector(".no-name-msg");
  const noZipError = document.querySelector('.no-zipcode-msg');
  const zipLengthError = document.querySelector('.zipcode-length-msg');
  const descriptionError = document.querySelector('.no-description-msg');
  const start_dateError = document.querySelector('.no-startdate-msg');
  const timeError = document.querySelector('.no-time-msg');


  if (!name) {
    nameError.classList.remove("d-none")
  } else {
    nameError.classList.add("d-none")
  }

  if (!location_zip) {
    noZipError.classList.remove("d-none")
    zipLengthError.classList.add("d-none")
  } else if (ziplength !== 5) {
    noZipError.classList.add("d-none")
    zipLengthError.classList.remove("d-none")
  } else {
    noZipError.classList.add("d-none")
    zipLengthError.classList.add("d-none")
  }

  if (!description) {
    descriptionError.classList.remove("d-none")
  } else {
    descriptionError.classList.add("d-none")
  }

  if (!start_date) {
    start_dateError.classList.remove("d-none")
  } else {
    start_dateError.classList.add("d-none")
  }

  if (!time) {
    timeError.classList.remove("d-none")
  } else {
    timeError.classList.add("d-none")
  }

  if (!name || !location_zip || ziplength !== 5 || !description || !start_date || !time) {
    return
  }
}
