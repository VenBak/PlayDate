// console.log("Check 1 page");

let signupBtn = document.querySelector("#submit-btn");
signupBtn.addEventListener('click', (event) => {
  // console.log("Check 2 click listener");
  ownerValidation(event);
  dogValidation(event);
  signupFormHandler(event);
});

async function signupFormHandler(event) {
  // console.log("Check 3 formHandler");
  event.preventDefault();
  // OWNER Model columns for the intake form - 
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const first_name = document.querySelector('#first_name-signup').value.trim();
  const last_name = document.querySelector('#last_name-signup').value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();
  const location_zip = document.querySelector('#location_zip-signup').value.trim();
  const description = document.querySelector('#description-signup').value.trim();

  console.log(username, password, first_name, last_name, gender, location_zip, description)

  let dog = getDogInfo();
  // POST to Owner table
  if (username && password && first_name && last_name && gender && location_zip && description) {
    const response = await fetch('/api/owners', {
      method: 'POST',
      body: JSON.stringify({ username, password, first_name, last_name, gender, location_zip, description, dogs: [dog] }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');;
    } else {
      console.log(response.statusText);
    }
  }
}

const getDogInfo = () => {
  const name = document.querySelector('#dog-name-signup').value.trim();
  const age = document.querySelector('#dog-age-signup').value.trim();
  const breed = document.querySelector('#dog-breed-signup').value.trim();
  const gender = document.querySelector('#dog-gender-signup').value.trim();

  console.log(name, age, breed, gender)
  // POST to Dog table
  // CURRENTLY AN ISSUE WHERE OWNER & DOG NOT LINKED ON SIGN UP.maybe return owner first and then post dog ?
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
      console.log("Adding Dog Error", response.statusText);
    }
  }
}

//Validations


async function ownerValidation(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passwordlength = document.querySelector('#password-signup').value.trim().length
  const first_name = document.querySelector('#first_name-signup').value.trim();
  const last_name = document.querySelector('#last_name-signup').value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();
  const location_zip = document.querySelector('#location_zip-signup').value.trim();
  const ziplength = document.querySelector('#location_zip-signup').value.trim().length
  const description = document.querySelector('#description-signup').value.trim();

  const usernameError = document.querySelector('.no-username-msg')
  const passwordError = document.querySelector('.no-password-msg')
  const passwordlengthError = document.querySelector('.password-length-msg')
  const firstnameError = document.querySelector('.no-firstname-msg')
  const lastnameError = document.querySelector('.no-lastname-msg')
  const noZipError = document.querySelector('.no-zipcode-msg')
  const stringZipError = document.querySelector('.string-zipcode-msg')
  const zipLengthError = document.querySelector('.zipcode-length-msg')
  const descriptionError = document.querySelector('.no-description-msg')

  var zipCheck = Number(location_zip);
  var stringZipCode = Number.isNaN(zipCheck);


  if (!username) {
    usernameError.classList.remove("d-none")
  } else {
    usernameError.classList.add("d-none")
  }

  if (!password) {
    passwordError.classList.remove("d-none")
  } else if (passwordlength < 8 || passwordlength > 16) {
    passwordError.classList.add("d-none")
    passwordlengthError.classList.remove("d-none")
  } else {
    passwordError.classList.add("d-none")
    passwordlengthError.classList.add("d-none")
  }

  if (!first_name) {
    firstnameError.classList.remove("d-none")
  } else {
    firstnameError.classList.add("d-none")
  }

  if (!last_name) {
    lastnameError.classList.remove("d-none")
  } else {
    lastnameError.classList.add("d-none")
  }

  if (!location_zip) {
    noZipError.classList.remove("d-none")
    stringZipError.classList.add("d-none")
    zipLengthError.classList.add("d-none")
  } else if (stringZipCode == true) {
    noZipError.classList.add("d-none")
    stringZipError.classList.remove("d-none")
    zipLengthError.classList.add("d-none")
  } else if (ziplength !== 5) {
    noZipError.classList.add("d-none")
    stringZipError.classList.add("d-none")
    zipLengthError.classList.remove("d-none")
  } else {
    noZipError.classList.add("d-none")
    stringZipError.classList.add("d-none")
    zipLengthError.classList.add("d-none")
  }

  if (!description) {
    descriptionError.classList.remove("d-none")
  } else {
    descriptionError.classList.add("d-none")
  }

  if (!username || !password || !first_name || !last_name || !gender || !location_zip || stringZipCode == true || ziplength !== 5 || !description || passwordlength < 8 || passwordlength > 16) {
    return
  }
}

async function dogValidation(event) {
  const name = document.querySelector('#dog-name-signup').value.trim();
  const age = document.querySelector('#dog-age-signup').value.trim();
  const breed = document.querySelector('#dog-breed-signup').value.trim();

  const nameError = document.querySelector('.no-dog-name-msg')
  const ageError = document.querySelector('.no-dog-age-msg')
  const stringAgeError = document.querySelector('.string-age-msg')
  const maxAgeError = document.querySelector('.max-dog-age-msg')
  const breedError = document.querySelector('.no-dog-breed-msg')

  if (!name) {
    nameError.classList.remove("d-none")
  } else {
    nameError.classList.add("d-none")
  }

  if (!age) {
    ageError.classList.remove("d-none")
    stringAgeError.classList.add("d-none")
    maxAgeError.classList.add("d-none")
  } else if (age > 35) {
    ageError.classList.add("d-none")
    stringAgeError.classList.add("d-none")
    maxAgeError.classList.remove("d-none")
  } else {
    ageError.classList.add("d-none")
    stringAgeError.classList.add("d-none")
    maxAgeError.classList.add("d-none")
  }

  if (!breed) {
    breedError.classList.remove("d-none")
  } else {
    breedError.classList.add("d-none")
  }

  if (!name || !age || age > 35 || !breed) {
    return
  }
}