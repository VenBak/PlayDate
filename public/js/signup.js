const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
    const locationZip = document.querySelector('#locationZip-signup').value.trim();
    const description = document.querySelector('#description-signup').value.trim();
  
    if (username && password && firstName && lastName && gender && locationZip && description) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, firstName, lastName, gender, locationZip, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  