const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
// Middleware for parsing JSON and urlencoded form data
//Middleware allows us acess to the app's req/res
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Express middleware, we need it for for POST and PUT requests
//they are sending data to the server
// express.json() is a body parser for post request 
// express.urlencoded is a body parser for html post form.

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    //MySQL password
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Query database
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
