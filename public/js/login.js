const loginFormHandler = async (event) => {
    event.preventDefault();

    // Obtain value from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/owners/login', { // TO DO - get the name of the route used for logging in
            method: 'POST',
            body: JSON.stringify({ username, password }),
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

async function noInputValidation(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const passwordlength = password.length

    const usernameError = document.querySelector('.username-error-msg')
    const passwordError = document.querySelector('.password-error-msg')

    if (!username) {
        usernameError.classList.remove("d-none")
        passwordError.classList.remove("d-none")
    } else {
        usernameError.classList.add("d-none")
        passwordError.classList.add("d-none")
    }

    if (!password || passwordlength < 8 || passwordlength > 16) {
        usernameError.classList.remove("d-none")
        passwordError.classList.remove("d-none")
    } else {
        usernameError.classList.add("d-none")
        passwordError.classList.add("d-none")
    }

    if (!username || !password || passwordlength < 8 || passwordlength > 16) {
        return
    }
}




document
    .querySelector('.login-form')
    .addEventListener('submit', noInputValidation, loginFormHandler);