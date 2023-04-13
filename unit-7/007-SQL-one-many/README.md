# One-to-Many Relationship

In SQL, a one-to-many relationship is a type of relationship between two tables where one record in the first table (known as the "parent" table) corresponds to one or more records in the second table (known as the "child" table).

This relationship is established by using a foreign key in the child table that references the primary key in the parent table. For example, consider two tables: "customers" and "orders". Each customer can have many orders, but each order belongs to only one customer. Therefore, the "customers" table is the parent table, and the "orders" table is the child table.

## Primary key vs Foreign key

In SQL, a primary key is a column or a set of columns in a table that uniquely identifies each row in that table. The primary key constraint ensures that each value in the column or columns is unique and not null, meaning that there cannot be two or more rows with the same primary key value.

Example: There are 2 Gonzalo's at Marcy now! But are we the same Gonzalo? NO! There for we would have 2 different Primary Keys

|person_id|name|
|--|--|
|1|Gonzalo|
|2|Gonzalo|

In SQL, a foreign key is a column or a set of columns in one table that refers to the primary key of another table. The foreign key establishes a relationship between the two tables, allowing data to be retrieved from multiple tables using a single query.

Example: A bunch of us have the marcy laptops or Mac books and each one would have a primary key, also the people have primary keys, but the laptops all have foreign keys show who they belong to:

|person_id|name|
|--|--|
|1|Gonzalo|
|2|Gonzalo|
|3|Isaac|
|4|Ashley|
|5|Randy|

|laptop_id|laptop|owner_id|
|--|--|--|
|1|marcy laptop|3|
|2|Mac laptop|1|
|3|marcy laptop|2|
|4|Mac laptop|4|
|5|marcy laptop|5|

Let's figure out who these laptops belong to?

```sql
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS pets;

CREATE TABLE people (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT);


-- SELECT * FROM people;

CREATE TABLE pets (id INTEGER PRIMARY KEY, name TEXT, species TEXT, owner_id INTEGER);

-- SELECT * FROM people JOIN pets ON people.id = pets.owner_id;

```

```sql
INSERT INTO people (id, first_name, last_name) VALUES (1, 'Ann', 'Duong');
INSERT INTO people (id, first_name, last_name) VALUES (2, 'Reuben', 'Ogbonna');
INSERT INTO people (id, first_name, last_name) VALUES (3, 'Maya', 'Bhattacharjee');

-- SELECT * FROM people;

INSERT INTO pets (id, name, species, owner_id) VALUES (1, 'Khalo', 'dog', 3);
INSERT INTO pets (id, name, species, owner_id) VALUES (2, 'Juan Pablo', 'dog', 2);
INSERT INTO pets (id, name, species, owner_id) VALUES (3, 'Bora', 'bird', 1);
INSERT INTO pets (id, name, species, owner_id) VALUES (4, 'Tora', 'dog', 1);
INSERT INTO pets (id, name, species, owner_id) VALUES (5, 'Frida', 'cat', 3);
INSERT INTO pets (id, name, species, owner_id) VALUES (6, 'Pon Juablo', 'cat', 2);
INSERT INTO pets (id, name, species, owner_id) VALUES (7, 'Kora', 'cat', 1);
```

practice quires
```sql
SELECT * FROM pets WHERE species='cat';
SELECT COUNT(*) FROM pets WHERE species='cat';
```

## `JOIN` 
When you want to find information about something that is related on two tables you need to use `JOIN`. Going back to the laptop we can join the two table together and write queries to find out information that we need.

|person_id|name|laptop_id|laptop|owner_id|
|--|--|--|--|--|
|1|Gonzalo|2|Mac laptop|1|
|2|Gonzalo|3|marcy laptop|2|
|3|Isaac|1|marcy laptop|3|
|4|Ashley|4|Mac laptop|4|
|5|Randy|5|marcy laptop|5|

Let's take a look at our spread sheet and see how we can join these tables;

```sql
SELECT * FROM people JOIN pets; 
```
## Data Types

There are several data types in SQL that are used to store different types of data. Here are some of the commonly used SQL data types:

INTEGER - Used to store whole numbers (positive or negative).

BIGINT - Used to store very large whole numbers (positive or negative).

DECIMAL/NUMERIC - Used to store exact decimal values with a specified precision and scale.

FLOAT/REAL - Used to store approximate floating-point numbers with a specified precision.

CHAR - Used to store fixed-length character strings.

VARCHAR - Used to store variable-length character strings.

DATE - Used to store dates (year, month, day).

TIME - Used to store times (hours, minutes, seconds).

TIMESTAMP - Used to store date and time values.

BOOLEAN - Used to store boolean values (true or false).