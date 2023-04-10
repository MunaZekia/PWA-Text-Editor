const express = require('express');//this is the express package

const app = express(); //this is the express function
const PORT = process.env.PORT || 3001;
//this is the port that the server is listening on

// TODO: Add comment on role of code below
app.use(express.static('../client/dist'));
//this is the middleware that is being used to serve static files. 
// which means that it is being used to serve the client folder, 
//which contains the index.html file
// middleware is a function that has access to the 
//request object (req), 
// express.static is a built in middleware function 
//in express to serve static files
//static means that the files are not changing
//It is being used to serve the index.html file
app.use(express.urlencoded({ extended: true }));
//this is the middleware that is being used to parse incoming requests with urlencoded payloads
// in other words, it is being used to parse the 
//body of the request
app.use(express.json());
//this is the middleware that is being used to parse 
//incoming requests with JSON payloads
// JSON payloads are the data that is being sent to the server 
//from the client

require('./routes/htmlRoutes')(app);
//this is the htmlRoutes file that is being required 
//from the routes folder to the server.js file

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
//this is the method that is being used to start the server


/
