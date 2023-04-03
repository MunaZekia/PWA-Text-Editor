const express = require("express");
const mongodb = require("mongodb").MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/numbersDB`;
// this include the database name and the collection name
let db;

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
]; // this is the data that we are going to insert into the database

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    db.collection("numberList").deleteMany({});
    db.collection("numberList").insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("Data inserted");
      // this code will insert the data into the database
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`); \// this is the port that we are going to use
    });
  }
);

app.use(express.json());

// TODO: Update route to use cursor methods
app.get("/read", (req, res) => {
  db.collection("numberList")// this method returns a collection object
    .find()//find() method returns all documents in a collection.
    .sort({ number: -1 }) // sort() sorts is in descending order
    .skip(1) // skips first returned document
    .limit(5) //.limit method is to change a query result set,  we wanted to get the first 5 documents in a collection, you can use the limit() method to limit the result set to 5 documents. 
    //limit is used to limit the number of documents that are returned from the query. and skip is used to skip the first document in the result set.
    //sort is used to sort the documents in a collection in ascending or descending order. and find is used to find all the documents in a collection.
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
      //toarray() method returns an array that contains all the documents in a collection.
    });
    // cursor methods are used to change the query result set
});

//this means that it will return the first 5 documents in the database and it will be in descending order and it will be in an array format
