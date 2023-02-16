DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

Drop if the database books_db EXISTS then creat books_db, 
Then use the database you created to 
create a table for biographies
using ID and Name