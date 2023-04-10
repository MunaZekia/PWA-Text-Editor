const path = require('path');

// TODO: Add comment explaining role of route below
module.exports = (app) =>
//this is the route for the index.html file and 
//it is being exported to the server.js file
  app.get('/', (req, res) => 
  //app.get is a method that takes in a path and a callback function and ('/', (req, res) => is the callback function that is being passed in
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );//res.sendFile is a method that takes in a path and sends the file at that path to the client, in this case it is the index.html file
