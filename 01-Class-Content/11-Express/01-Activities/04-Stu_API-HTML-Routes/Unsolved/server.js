// TODO: Import express
const express = require('express');
// TODO: Import 'terms.json' file
const PORT = 3001;


// TODO: Initialize app variable
const app = express();
const termData = require('./terms.json')

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.get('/terms',(req, res) => {
  res.json(termData);
  );
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
