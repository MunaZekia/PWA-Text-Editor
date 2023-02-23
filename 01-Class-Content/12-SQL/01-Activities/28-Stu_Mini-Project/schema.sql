DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movie_names (
  id INT NOT NULL PRIMARY KEY,
  names VARCHAR(100)
);

CREATE TABLE movie_reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_ID INT,
  review_ID TEXT,
  FOREIGN KEY (movie_name)
  REFERENCES movie_names(id)
  
  
);