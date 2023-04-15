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

### Learning Assignments:
- **Article:** [Schema Design](https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9).
- **Artilce:** [ONE-TO-MANY Database Relationships](https://blog.supportgroup.com/getting-started-with-relational-databases-one-to-many-relationship)
- **Article:** [ONE-TO-ONE & MANY-TO-MANY Database Relationships](https://blog.supportgroup.com/getting-started-with-relational-databases-one-to-one-and-many-to-many-relationships)
- **Article:** [How To Implement One to One, One to Many and Many to Many Relationships When Designing A Database](https://medium.com/@emekadc/how-to-implement-one-to-one-one-to-many-and-many-to-many-relationships-when-designing-a-database-9da2de684710) 
- **Article:** [What is Entity Relationship Diagram](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)
- **Article:** [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)

### Practice:
2. [Practice Exercises](./practice)