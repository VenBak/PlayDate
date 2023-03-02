// EVENT - ADD & DELETE

// For the date picker
start_datePickerId.min = new Date().toLocaleDateString('fr-ca');
end_datePickerId.min = new Date().toLocaleDateString('fr-ca');

// Show the event form and reset the fields
function showEventForm() {
  const eventForm = document.querySelector('form');
  eventForm.reset();
  document.querySelector('.eventForm').style.display = 'block';
  document.querySelector('#submitEvent-btn').style.display = 'block';
}

// Hide the event form after the form has been submitted
function hideEventForm() {
  document.querySelector('.eventForm').style.display = 'none';
  document.querySelector('#submitEvent-btn').style.display = 'none';
}

// Back button for the event form if the user doesn't want to add another event 
function backEventForm() {
  document.querySelector('.eventForm').style.display = 'none';
}

// POST a new EVENT to table
const addEventFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#event-name').value.trim();
  const location_zip = document.querySelector('#event-location_zip').value.trim();
  const description = document.querySelector('#event-description').value.trim();
  const start_date = document.querySelector('.event-start_date').value.trim();
  const end_date = document.querySelector('.event-end_date').value.trim();
  const start_time = document.querySelector('.event-start_time').value.trim();
  const end_time = document.querySelector('.event-end_time').value.trim();

  // CREATE a event
  if (name && location_zip && description && start_date && end_date && start_time && end_time) {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ name, location_zip, description, start_date, end_date, start_time, end_time }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('#submitEvent-btn').addEventListener('click', addEventFormHandler);


// DELETE an event
const delEventHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete event profile');
    }
  }
};

document
  .querySelector('.event-list').addEventListener('click', delEventHandler);
