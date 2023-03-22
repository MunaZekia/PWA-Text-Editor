const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
// 

// TODO: Add a comment describing the functionality of this expression
// this expression is requiring the connect-session-sequelize package and passing in the session object as an argument. It is used to store session data in the database.
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// session.store is a property of the session object. 
//It is a constructor function that takes in a sequelize connection as an argument. It is used to store session data in the database.
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
  // exphbs.create() is a method that creates a new instance of the express-handlebars object. It takes in an object as an argument.
// TODO: Add a comment describing the functionality of this object
// this object contains the helpers property. The helpers property is an object that contains the helper functions that are used in the handlebars templates.
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// const sess is an object that contains the properties secret, cookie, resave, saveUninitialized, and store.

// TODO: Add a comment describing the functionality of this statement
app.use(session(sess));
// app.use() is a method that takes in a middleware function as an argument. It is used to initialize the session object.

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
