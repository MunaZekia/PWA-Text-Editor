-- Write your Schema Here -- 
DROP DATABASE IF EXISTS cafe_db;
CREATE DATABASE cafe_db;

USE cafe_db;

CREATE TABLE customers (
  id INT NOT NULL,
  order_name VARCHAR(30),
  price INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE menu (
  id INT NOT NULL,
  customer_id INT,
  Order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
);
