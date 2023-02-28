console.log("Check 1");

let signupBtn = document.querySelector("#submit-btn");
signupBtn.addEventListener('click', (event) => {
  console.log("Check 2");

  signupFormHandler(event);
  postDog(event);
});

async function signupFormHandler(event) {
  console.log("IN HERE");
  event.preventDefault();
  // OWNER Model columns for the intake form - 
  // we are not initially asking for picture 
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const first_name = document.querySelector('#first_name-signup').value.trim();
  const last_name = document.querySelector('#last_name-signup').value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();
  const location_zip = document.querySelector('#location_zip-signup').value.trim();
  const description = document.querySelector('#description-signup').value.trim();

  console.log(username, password, first_name, last_name, gender, location_zip, description)
  // // POST to Owner table
  if (username && password && first_name && last_name && gender && location_zip && description) {
    const response = await fetch('/api/owners', {
      method: 'POST',
      body: JSON.stringify({ username, password, first_name, last_name, gender, location_zip, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    // IF response is successful, then call posting to DOG table
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }



}

const postDog = async (event) => {
  event.preventDefault();

  // DOG Model columns for the intake form - 
  // we are not initially asking for picture 
  const name = document.querySelector('#dog-name-signup').value.trim();
  const age = document.querySelector('#dog-age-signup').value.trim();
  const breed = document.querySelector('#dog-breed-signup').value.trim();
  const gender = document.querySelector('#dog-gender-signup').value.trim();

  console.log(name, age, breed, gender)
  // POST to Dog table
  if (name && age && breed && gender) {
    const response = await fetch('/api/dogs', {
      method: 'POST',
      body: JSON.stringify({ name, age, breed, gender }),
      headers: { 'Content-Type': 'application/json' },
    });

    // IF response is successful, then go to the profile
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
}