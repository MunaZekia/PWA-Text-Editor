// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This file is part of the controller in the MVC framework and
// it is responsible for handling the routes for the dishes
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// This is the get route for the all page in the views folder 

router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// This is rendering the all page in the views folder
  res.render('all');
});

module.exports = router;
