const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();
// cwd = current working directory whcih is
// the path to the folder where the server is running
// this is nessary because the server is running in the 
//root folder

const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
//${activity} is a template literal. it came from 
//the const activity above
//$port is a template literal. it came from the const PORT above
  });
});
