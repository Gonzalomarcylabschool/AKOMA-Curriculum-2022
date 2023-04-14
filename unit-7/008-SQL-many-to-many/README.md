# Many to Many

In yesterdays lecture we learned about the **One to Many** relationship that can occur in SQL. Lets take a look at an example of another **One to Many** relationship.

Here we have a table called instructors:

|instructor_id|instructor_name|
|--|--|
|1|Ben|
|2|Gonzalo|
|3|Jowel|


Here we have a table called fellows:

|fellow_id|fellow_name|teacher_id|
|--|--|--|
|1|Ashley|3|
|2|Ashley|2|
|3|Gabe|1|
|4|Vincent|2|
|5|Nayan|1|

Here is the ERD for these tables:
![](./Screenshot%202023-04-14%20at%208.43.42%20AM.png)
What are the primary keys and what are the foreign keys?
<details><summary>Answer</summary>
Primary keys:

For the fellows table it's 

</details>

### Quick note on keys:

Surrogate Keys: A surrogate key, on the other hand, is a primary key that is not based on any natural attribute of the entity, but is instead created solely for the purpose of identifying the record. Surrogate keys are typically integers generated by the database system, such as an auto-incrementing ID column.

Natural keys: A natural key is a primary key that is based on a unique attribute of the entity that the table represents. For example, in a table representing employees, the employee ID number could be a natural key. The natural key is often a value that is meaningful to the business and is already known, such as a customer's phone number or a product's SKU number.

Question: What kind of keys are we using on these tables?
<details><summary>Answer</summary>

Surrogate Keys

</details>

## Back to the tables
|instructor_id|instructor_name|fellow_id|fellow_name|teacher_id|
|--|--|--|--|--|
|1|Ben|3|Gabe|1|
|2|Gonzalo|4|Vincent|2|
|3|Jowel|1|Ashley|3|
|2|Gonzalo|2|Ashley|2|
|1|Ben|5|Nayan|1|

So what SQL code do use to make this table? 

<details><summary>Answer</summary>

SELECT * FROM instructors JOIN fellows ON instructors.instructor_id = fellow.teacher_id

</details>

## Many to Many 

In SQL, a many-to-many relationship is a type of relationship between two tables, where each record in one table can be associated with multiple records in the other table, and vice versa. This type of relationship requires a third table, called a junction table, to connect the two tables.

For example, consider a database that tracks the relationship between students and the courses they are enrolled in. A student can enroll in multiple courses, and a course can have multiple students. In this case, we would create three tables: a students table, a courses table, and a junction table to connect them.

![](https://www.datensen.com/blog/wp-content/uploads/2021/10/many-to-many-relationship-1.png)

The junction table, also known as an intersection table or a linking table, contains foreign keys that reference the primary keys of the two related tables. Each row in the junction table represents a pairing of a student with a course they are enrolled in.

Here is a simple ERD of Instagram:
![](https://www.sensedeep.com/images/blog/instagram-erd.avif)

Check out the [article](https://www.sensedeep.com/blog/posts/stories/building-instagram-with-dynamoDB-and-OneTable.html) where this came from!

## Metal Model and SQL example with a store.

Lets take a look at this [Example](https://docs.google.com/spreadsheets/d/1UsdmFP4Wtcob0WrUBjmsaWY9RD5-Xo1wmCD21HG1huY/edit#gid=2108260734) and the SQL code we can use to see the Many to Many relationship that exist


```sql
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS orders;

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

SELECT * FROM customers;
```

Here is another example using books:

```sql
DROP TABLE IF EXISTS author_book;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

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

SELECT * FROM author_book;
```