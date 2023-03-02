// NOTE - THIS BACK BUTTON IS GIVING A REALLY WEIRD ERROR!
function backEditOwnerForm() {
  document.location.replace('/profile');
}


// NOTE - need to edit below for owner form

// const editDogFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#editdog-name').value.trim();
//   const age = document.querySelector('#editdog-age').value.trim();
//   const breed = document.querySelector('#editdog-breed').value.trim();
//   const gender = document.querySelector('#editdog-gender').value.trim();

//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];

//   console.log(id);

//   const response = await fetch(`/api/dogs/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ name, age, breed, gender }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   // IF response is successful, then reload
//   if (response.ok) {
//     document.location.reload();
//   } else {
//     alert(response.statusText);
//   }

// };

// document.querySelector('#submitEdit-btn').addEventListener('click', editDogFormHandler);