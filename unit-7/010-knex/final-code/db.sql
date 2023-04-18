--SQL to create our database and data--

DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS author_book;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE people (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT);
INSERT INTO people (id, first_name, last_name) VALUES (1, 'Ann', 'Duong');
INSERT INTO people (id, first_name, last_name) VALUES (2, 'Reuben', 'Ogbonna');
INSERT INTO people (id, first_name, last_name) VALUES (3, 'Maya', 'Bhattacharjee');

CREATE TABLE pets (id INTEGER PRIMARY KEY, name TEXT, species TEXT, owner_id INTEGER);
INSERT INTO pets (id, name, species, owner_id) VALUES (1, 'Khalo', 'dog', 3);
INSERT INTO pets (id, name, species, owner_id) VALUES (2, 'Juan Pablo', 'dog', 2);
INSERT INTO pets (id, name, species, owner_id) VALUES (3, 'Bora', 'bird', 1);
INSERT INTO pets (id, name, species, owner_id) VALUES (4, 'Tora', 'dog', 1);
INSERT INTO pets (id, name, species, owner_id) VALUES (5, 'Frida', 'cat', 3);
INSERT INTO pets (id, name, species, owner_id) VALUES (6, 'Pon Juablo', 'cat', 2);
INSERT INTO pets (id, name, species, owner_id) VALUES (7, 'Kora', 'cat', 1);

CREATE TABLE customers (
id INTEGER PRIMARY KEY,
name TEXT,
email TEXT
);
CREATE TABLE products (
id INTEGER PRIMARY KEY,
name TEXT,
price NUMERIC
);
CREATE TABLE orders (
id INTEGER PRIMARY KEY,
customer_id INTEGER,
product_id INTEGER,
purchase_date DATE
);

INSERT INTO customers (id, name, email) VALUES (1, 'Ann', 'ann@marcylabschool.org');
INSERT INTO customers (id, name, email) VALUES (2, 'Reuben', 'ann@marcylabschool.org');
INSERT INTO customers (id, name, email) VALUES (3, 'Maya', 'ann@marcylabschool.org');

INSERT INTO products (id, name, price) VALUES (1, 'Chair', 15.99);
INSERT INTO products (id, name, price) VALUES (2, 'Table', 28.75);
INSERT INTO products (id, name, price) VALUES (3, 'Book', 3.88);
INSERT INTO products (id, name, price) VALUES (4, 'Pencil', 0.21);

INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (1, 2, 4, '03-01-2000');
INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (2, 3, 2, '04-15-2005');
INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (3, 3, 1, '06-25-2006');
INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (4, 2, 2, '08-23-2008');
INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (5, 1, 1, '01-13-2010');
INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (6, 2, 3, '05-19-2011');
INSERT INTO orders (id, customer_id, product_id, purchase_date) VALUES (7, 1, 2, '09-05-2015');

CREATE TABLE authors(
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL
);

CREATE TABLE books(
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
published_year INT NOT NULL
);

CREATE TABLE author_book(
id SERIAL PRIMARY KEY,
author_id INT REFERENCES authors(id),
book_id INT REFERENCES books(id)
);

INSERT INTO authors(first_name, last_name) VALUES('James', 'Baldwin');
INSERT INTO authors(first_name, last_name) VALUES('Langston', 'Hughes');
INSERT INTO authors(first_name, last_name) VALUES('Maya', 'Angelou');
INSERT INTO books(title, published_year) VALUES('Learn to Git With It', 2015);
INSERT INTO books(title, published_year) VALUES('HTML for Dummies', 2018);
INSERT INTO books(title, published_year) VALUES('Advanced JavaScript', 2009);
INSERT INTO books(title, published_year) VALUES('Starting Express', 2010);
INSERT INTO books(title, published_year) VALUES('Node for Newbies', 2020);
INSERT INTO author_book(author_id, book_id) VALUES(1, 3);
INSERT INTO author_book(author_id, book_id) VALUES(2, 1);
INSERT INTO author_book(author_id, book_id) VALUES(3, 2);
INSERT INTO author_book(author_id, book_id) VALUES(1, 5);
INSERT INTO author_book(author_id, book_id) VALUES(3, 4);
INSERT INTO author_book(author_id, book_id) VALUES(2, 5);
INSERT INTO author_book(author_id, book_id) VALUES(3, 3);							
										
										
										
										
										
										
										
										
										