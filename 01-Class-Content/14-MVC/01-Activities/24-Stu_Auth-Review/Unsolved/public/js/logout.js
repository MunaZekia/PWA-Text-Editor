const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // this expression is making a POST request to the /api/users/logout route
  
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // this redirects the user to the login page/client-side route
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
