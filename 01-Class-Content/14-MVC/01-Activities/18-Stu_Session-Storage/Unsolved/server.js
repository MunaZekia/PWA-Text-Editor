const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object 
  // It is used to set the cookie's options. contains info about the user
  
  cookie: { 
    // this object is used to set the cookie's options.
    // TODO: Add a comment describing the functionality of the maxAge attribute
    maxAge: 60 * 60 * 1000, 
    // It is to set the cookie's expiration date, the session will expire in 1 hour.
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    httpOnly: true, 
    // the httpOnly is preventing the cookie from being accessed by the client-side JavaScript and it available only on the server side.
    // TODO: Add a comment describing the functionality of the secure attribute
    secure: false,  // It means that cookie is not secure
    // TODO: Add a comment describing the functionality of the sameSite attribute
    sameSite: 'strict', 
    // It is only sent in a first-party context and so it can not be sent with requests initiated by third party website.
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
