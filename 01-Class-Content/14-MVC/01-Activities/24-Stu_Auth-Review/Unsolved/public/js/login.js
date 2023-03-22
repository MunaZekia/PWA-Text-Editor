const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  // this prevents the default action of the event from happening
  // in this case, it prevents the form from submitting
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // these expressions are grabbing the values from the email and password fields
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    // this expression is making a POST request to the /api/users/login route
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
