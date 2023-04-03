const express = require('express'); 
// this is the express server

const mongodb = require('mongodb').MongoClient;
// this is the mongodb client, which is used to connect to the database


const app = express(); // this is the express server

const port = 3001;// this is the port number

const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`; 
// this is the connection string, 
//it has the protocol, the host, the port, and the database name
// the protocol is mongodb
//it is the address of the database and the name of the database

let db;// this is the database and it is a global variable because it is used in multiple functions in the server
// the fuctions are the routes

mongodb.connect( // this is the connection to the database
  connectionStringURI,// this is the connection string and it is the address of the database and the name of the database
  { useNewUrlParser: true, useUnifiedTopology: true },// this is the options object, the options are used to configure the connection
  (err, client) => { // this is the callback function, it is called when the connection is established
    db = client.db();// this means that  the database that is returned from the connection
    app.listen(port, () => { // this is the express server listening on the port
      console.log(`Example app listening at http://localhost:${port}`); // this is the console log that tells us that the server is listening on the port. and it is a template literal which means that we can use the port variable inside the string
    });
  }
);

app.use(express.json()); // this is the middleware that is used to parse the body of the request. in this case it is json

app.post('/create', (req, res) => { // this is the route that is used to create a document in the database, which is a book in the book collection
  db.collection('bookCollection').insertOne( // this is the method that is used to insert a document into the database
    { title: req.body.title, author: req.body.author },// this is the document that is inserted into the database, it is an object with the title and the author
    (err, results) => {// this is the callback function, it is called when the document is inserted into the database and it is passed the error and the results
      if (err) throw err;// this is the error handling, if there is an error then it is thrown
      res.json(results);// this is the response that is sent back to the client, it is the results of the insert
    }
  );
});

app.post('/create-many', function (req, res) {// this is the route that is used to create many documents in the database, which is a book in the book collection. 
  db.collection('bookCollection').insertMany(// this is the method that is used to insert many documents into the database and it passes an array of documents wichh are objects with the title and the author
    [
      {"title" : "Oh the Places We Will Go!"},// this is the first document
      {"title" : "Diary of Anne Frank"}// this is the second document
    ], 
    (err,results) => {// this is the callback function, it is called when the documents are inserted into the database and it is passed the error and the results
      if (err) throw err; // this is the error handling, if there is an error then it is thrown
      res.json(results);// this is the response that is sent back to the client, it is the results of the insert
    }
  );
});

app.get('/read', (req, res) => {// this is the route that is used to read a document from the database, which is a book in the book collection 

  
  db.collection('bookCollection')// this is the method that is used to read a document from the database
    .find({})// this is the method that is used to find a document in the database and it is passed an object with the title and the author
    .toArray((err, results) => {// this is the method that is used to convert the cursor or the results of the find into an array and it is passed the error and the results
      if (err) throw err;// this is the error handling, if there is an error then it is thrown
      res.send(results);// this is the response that is sent back to the client, it is the results of the find
    });
});
