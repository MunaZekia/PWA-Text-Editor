const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  console.info("user request has been receieved",  req.method)
  // Your code here
 
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => request received`);
// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received

  // Your code here
  app.get('/api/upvotes', (req, res) => {
    res.json(`${req.method} request received`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
 Your code here

app.post('/api/upvotes', (req, res) => 
{res.json(`${req.method} was received`);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
