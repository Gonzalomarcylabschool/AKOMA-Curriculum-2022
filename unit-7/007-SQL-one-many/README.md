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
|6|personal laptop|1|

Let's figure out who these laptops belong to?

## Entity Relationship Diagram (ERD)  

Here we have a diagram of the relationship between person and laptop:
![](./Screenshot%202023-04-13%20at%2010.48.25%20AM.png)


## One to Many `people` to `pets`

One way to know that what kind of relationship you have is just saying it aloud. Does it make sense to say that dog has many owners? NO! She's my dog. But can I say I have many dogs? YES! I have 2 dogs! Let see what the would like on a [spread sheet](https://docs.google.com/spreadsheets/d/1FuMwqEbPTLjct2TXfogmXt49e2bAJt-2o2o3gVPALTg/edit#gid=1490267459). 

Here is the ERD for this relationship:

![](./Screenshot%202023-04-13%20at%2011.03.47%20AM.png)

So in this table we can say the following:

_Has Many_:We say that a person has many pets
_Belongs to_: We say that a pet belongs to a person 

This is a One to Many Relationship.

## Let put this into SQL and check it out on TablePlus 

```sql
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS pets;

CREATE TABLE people (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT);


-- SELECT * FROM people;

CREATE TABLE pets (id INTEGER PRIMARY KEY, name TEXT, species TEXT, owner_id INTEGER);

-- SELECT * FROM pet;

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
-- list all the cats
SELECT * FROM pets WHERE species='cat';
-- count all of the cats
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
|1|Gonzalo|6|personal laptop|1|

Let's take a look at our spread sheet and see how we can join these table. Remember You have to join the tables where they connect.

```sql
-- here we join the tables by people id to owner id
SELECT * FROM people JOIN pets ON people.id = pets.owner_id;
--What are all the pets owned by Ann?
SELECT * FROM people JOIN pets ON people.id = pets.owner_id WHERE people.first_name='Ann';
--Who is the owner of Frida?
SELECT * FROM people JOIN pets ON people.id = pets.owner_id WHERE pets.name='Frida';


-- this is name spaced people.id / pets.name / pets.owner_id ... etc!
```

## `person` + `laptop` 

```sql
CREATE TABLE person (person_id INTEGER PRIMARY KEY, name TEXT);
-- SELECT * FROM person;
CREATE TABLE laptop (laptop_id INTEGER PRIMARY KEY, name TEXT, species TEXT, owner_id INTEGER);
-- SELECT * FROM laptop

-- insert the persons
INSERT INTO person (person_id, name) VALUES (1, 'Gonzalo');
INSERT INTO person (person_id, name) VALUES (2, 'Gonzalo');
INSERT INTO person (person_id, name) VALUES (3, 'Isaac');
INSERT INTO person (person_id, name) VALUES (4, 'Ashley');
INSERT INTO person (person_id, name) VALUES (5, 'Randy');
-- insert the laptops
INSERT INTO laptop (laptop_id , laptop, owner_id) VALUES (1, 'marcy laptop', 3);
INSERT INTO laptop (laptop_id , laptop, owner_id) VALUES (2, 'Mac laptop', 1);
INSERT INTO laptop (laptop_id , laptop, owner_id) VALUES (3, 'marcy laptop', 2);
INSERT INTO laptop (laptop_id , laptop, owner_id) VALUES (4, 'Mac laptop', 4);
INSERT INTO laptop (laptop_id , laptop, owner_id) VALUES (5, 'marcy laptop', 5);
INSERT INTO laptop (laptop_id , laptop, owner_id) VALUES (6, 'personal laptop', 1);
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