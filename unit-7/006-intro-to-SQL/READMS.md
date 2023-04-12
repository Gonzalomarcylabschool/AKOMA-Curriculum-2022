# Intro to SQL

SQL (Structured Query Language) is a programming language designed for managing and querying relational databases. It is used to create, modify, and extract data from databases. SQL allows users to interact with databases by using commands such as SELECT, INSERT, UPDATE, and DELETE to perform a wide range of tasks such as creating tables, reading, updating or deleting data(CRUD).

## So Why learn SQL

SQL is a standard language and is widely used in the industry, including in the management of large amounts of data in enterprises, web applications, and mobile applications. Its syntax is relatively simple, making it easy to learn and use for both beginners and experienced programmers.

## What is a Database (DB)

A database is an organized collection of data that is stored and managed.

### Examples:

* Phone Book
* Shopping List
* To Do list 
* Facebook's User base

They can be stored in many ways:

* On Paper.
* In your mind
* Comments Section
* On a computer (server hint hint)

## Computers + Database

The purpose of a database on a computer is to store and organize large amounts of data in a way that enables efficient storage, retrieval, and management of that data.

![](./Screenshot%202023-04-12%20at%208.50.04%20AM.png)

## Relational Database

A relational database is a type of database that organizes data into one or more tables, each of which has a unique name and consists of columns and rows. In a relational database, the tables are related to each other based on common data elements or fields. This means that data can be retrieved from one or more tables based on the relationships between the tables.

![](https://www.pragimtech.com/blog/contribute/article_images/2220211210231003/what-is-a-relational-database.jpg)

There will be 2 types of relationships that we will cover in the next lectures, *One to Many* and *Many to Many*. More on this in the next lectures. 

## PostgresSQL

PostgreSQL, also known as Postgres, is an open-source relational database management system (RDBMS) that is widely used for enterprise-level applications.

Lets run the intro to SQL practice server so that we can see how this work and how we can use it with some SQL commands.

* INSERT (create)
* SELECT (read)
* UPDATE (update)
* DELETE (delete)

```SQL
INSERT 
INTO books (title, genre, pages, is_movie) 
VALUES ('Dune', 'Sci Fi', 500, false);

INSERT INTO books (title, genre, pages, is_movie) VALUES ('1984', 'Sci Fi', 328, true) RETURNING *;

SELECT * 
FROM books;

UPDATE books
SET is_movie=true
WHERE title='Dune';

DELETE 
FROM books 
WHERE title='Dune';

DELETE 
FROM books;
```

## Select specific tables and conditions

```sql

SELECT title, genre 
FROM books;

SELECT * 
FROM books 
WHERE pages > 250;

SELECT * 
FROM books 
WHERE pages > 250 
OR is_movie 
IS true;

SELECT * 
FROM books 
WHERE pages > 150 
and pages < 300;

SELECT * 
FROM books 
ORDER BY pages

SELECT * 
FROM books 
ORDER BY pages 
DESC 
LIMIT 1;



```

Making an Alias

```sql

SELECT COUNT(*) 
FROM books;

SELECT genre, COUNT(*) 
FROM books 
GROUP BY genre;

SELECT title, is_movie "Already Filmed" 
FROM books;
```