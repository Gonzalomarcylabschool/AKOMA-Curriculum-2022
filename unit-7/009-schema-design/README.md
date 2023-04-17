# Schema Design 

### Key Terms:
+ Domain Modeling
+ Relationships
+ Schema Design
+ Entity relationships


### Essential Questions:
+ What are some of the important tradeoffs to consider when doing domain modeling?
+ What's the difference between a one-to-one, one-to-many and many-to-many relationship? How do we model those using SQL?

## Domain Modeling

First of all, what is a domain? In the context of what we are talking about today a domain refers to a specific area or subject matter that the software is intended to address. 

Domain modeling is the process of creating a conceptual model of a particular domain, which represents the key concepts, relationships, and constraints within that domain. This is what helps developers understand the problem domain and design a solution that meets the requirements of the stakeholders.

For example, if a software system is designed to manage a library, the domain would include concepts such as books, authors, borrowers, loans, and fines. These concepts are related to each other, and the rules they are following are specific to the domain of library management.

They main idea is to create a structure in an organized manner that effectively addresses the problems or challenges within the domain.

## Schema Design

Domain modeling and schema design are closely related as they both involve the creation of a structured representation of a particular problem domain. Domain modeling is focused on understanding the key concepts, relationships, and constraints within a particular domain, while schema design is focused on creating a structured representation of the data that will be stored in a database.

The domain model provides the foundation for the schema design. It defines the key entities, attributes, and relationships within the domain, like we mentioned before with the example of the library.

In other words, the domain model provides a high-level understanding of the domain, while the schema design provides the detailed implementation of that understanding in the database.

An effective schema design should be based on a well-defined and accurate domain model, as this will help to ensure that the database accurately represents the requirements of the business and its stakeholders. The schema design should reflect the key concepts and relationships identified in the domain model, while also taking into account factors such as performance, scalability, and security.

## Making Entity Relationship Diagrams (ERDs)

Here are some best practices to follow when working on Entity Relationship Diagrams (ERDs):

_Identify the entities_: Start by identifying the entities (objects, concepts, or things) that you want to model. Think about what data needs to be stored for each entity, and what relationships exist between them.

EX:`product`, `customer`. 

_Define the attributes_: For each entity, define the attributes (or properties) that describe it. These attributes should be atomic, meaning they cannot be further divided into smaller components.

EX: 
For the `product` entity:
* `product_id` 
* `product_name`
* `description`
* `price`
* `inventory_count`

For the `customer `entity
* `customer_id`
* `first_name`
* `last_name`
* `email`
* `phone_number`

_Determine the relationships_: Identify the relationships between the entities, and specify the cardinality (the number of instances of one entity that can be associated with a single instance of another entity).

For this relationship, "Product" can be ordered by multiple "Customers", and each "Customer" can order multiple "Products". This creates a many-to-many relationship between the "Product" and "Customer" entities, which we would need to model using a junction table. We'll look at that in a bit.

_Avoid redundancy_: Avoid duplicating information in your ERD. Each piece of information should be stored only once, in a single entity or relationship.

_Normalize your data_: Normalize your data to eliminate redundancy and improve data consistency. This involves organizing your data into separate tables, and eliminating any repeating groups or multivalued attributes.

To normalize our data, we might create separate tables for "Product", "Customer", and "Order". The "Order" table would act as the junction table between "Product" and "Customer", and would contain foreign keys to both of those tables.

For the `order` entity
`order_id`
`product_id`
`customer_id`
`order_date`

_Use clear notation_: Use a clear and consistent notation for your ERD, such as the Crow's Foot notation or the Chen notation. Make sure to label all entities, attributes, and relationships clearly.

![](./Screenshot%202023-04-17%20at%2010.54.52%20AM.png)
Test your design: Once you have created your ERD, test it by running sample queries against your database. This will help you identify any potential issues or inefficiencies in your design.

```SQL
CREATE TABLE Product (
  product_id INTEGER PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  inventory_count INTEGER NOT NULL
);

CREATE TABLE Customer (
  customer_id INTEGER PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

CREATE TABLE Order (
  order_id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL,
  customer_id INTEGER NOT NULL,
  order_date DATE NOT NULL,
  FOREIGN KEY (product_id) REFERENCES Product(product_id),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

-- Insert some sample data
INSERT INTO Product (product_id, product_name, description, price, inventory_count)
VALUES (1, 'Product 1', 'A description of product 1', 9.99, 10),
       (2, 'Product 2', 'A description of product 2', 19.99, 5),
       (3, 'Product 3', 'A description of product 3', 29.99, 0);

INSERT INTO Customer (customer_id, first_name, last_name, email, phone_number)
VALUES (1, 'John', 'Doe', 'johndoe@example.com', '123-456-7890'),
       (2, 'Jane', 'Doe', 'janedoe@example.com', '987-654-3210');

INSERT INTO Order (order_id, product_id, customer_id, order_date)
VALUES (1, 1, 1, '2022-01-01'),
       (2, 2, 1, '2022-01-02'),
       (3, 1, 2, '2022-01-03');

-- Sample queries
-- List all products
SELECT * FROM Product;

-- List all customers
SELECT * FROM Customer;

-- List all orders
SELECT * FROM Order;

-- List all orders for a specific customer
SELECT * FROM Order WHERE customer_id = 1;

-- List all orders for a specific product
SELECT * FROM Order WHERE product_id = 1;

```

## Design a domain with 5 tables


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


### Learning Assignments:
- **Article:** [Schema Design](https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9).
- **Artilce:** [ONE-TO-MANY Database Relationships](https://blog.supportgroup.com/getting-started-with-relational-databases-one-to-many-relationship)
- **Article:** [ONE-TO-ONE & MANY-TO-MANY Database Relationships](https://blog.supportgroup.com/getting-started-with-relational-databases-one-to-one-and-many-to-many-relationships)
- **Article:** [How To Implement One to One, One to Many and Many to Many Relationships When Designing A Database](https://medium.com/@emekadc/how-to-implement-one-to-one-one-to-many-and-many-to-many-relationships-when-designing-a-database-9da2de684710) 
- **Article:** [What is Entity Relationship Diagram](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)
- **Article:** [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)

### Practice:
2. [Practice Exercises](./practice)


