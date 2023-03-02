// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
app.engine('handlebars', hbs.engine); 
// This is setting up the handlebars engine

app.set('view engine', 'handlebars');
// This is setting the view engine to handlebars


app.use(express.static(path.join(__dirname, 'public')));
// This is setting the public folder as a static folder
app.use(require('./controllers/dish-routes'));
// This is requiring the dish-routes.js file

// Starts the server to begin listening

app.listen(PORT, () => {
   // This is logging the server listening on the port
  console.log('Server listening on: http://localhost:' + PORT);
});
