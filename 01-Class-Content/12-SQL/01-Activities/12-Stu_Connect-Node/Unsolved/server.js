const express = require('express');
const mysql = require('mysql2');
//const express import express and mysql12

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//express can read 
//using the mysql lib to create a connetion to an sql server
//telling node how to connect to classlist_db
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});
// select form a specifc table and consolelog what the resuls are 
app.use((req, res) => {
  res.status(404).end();
});
//app.use is a middleware
//and for any request give it a 404 and end the request
//connect to browser 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
