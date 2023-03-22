const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // if the user is not logged in, redirect to the login page
  // otherwise, call the next() method
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
