const loginFormHandler = async (event) => {
    event.preventDefault();

    // Obtain value from the login form
    const username = document.querySelector('#username-login').value.trim(); 
    const password = document.querySelector('#password-login').value.trim(); 

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/owners/login', { // TO DO - get the name of the route used for logging in
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
          } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);