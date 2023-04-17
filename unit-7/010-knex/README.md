# SQL, Knex, and JavaScript

[Knex](https://knexjs.org/) is a JavaScript query builder. Think of it as Marcy's way to connect a Postgres database and a Node JavaScript project. We will learn knex so that our Express APIs can access data from a persistent storage database.

## 0. Create DB
Run the following to create a database called `playground`. These database will have five tables: `people`, `pets`, `customers`, `orders`, `products`.
```
psql -c "DROP DATABASE playground;"
psql -c "CREATE DATABASE playground;"
psql -d playground -f db.sql
```
Alternatively, you can copy and paste the contents of `db.sql` and run in a SQL terminal or GUI like TablePlus. 

## 2. Initialize Node and Knex

0. `touch playground.js` to create a JS file. 
1. `npm init` to initialize a node project and a `package.json`.
2. `npm install knex` because we will be requiring knex in our JavaScript.
3. `npm install pg` because knex will require this module for us to connect to postgres.
4. `npm install -g knex` so that we can use the following knex command in the terminal globally.
5. `knex init` to create a `knexfile.js`.

## 3. Configure Knexfile
We want to use postgres instead of sqlite in our development environment. Copy and paste the `"staging"` object to the `"development"` object but change the database, user, and password. To make it easier, tell your fellows to use the same credentials they use to connect to TablePlus.
```js
  development: {
    client: 'postgresql',
    connection: {
      database: 'playground',
      user:     'postgres',
      password: '',
      host:     'localhost',
      port:     5432
    }
  }
```

## 4. Set up the JavaScript file
```js
const knexConfig = require("./knexfile").development
const knex = require("knex")(knexConfig)

const getPets = async () => {
    let query = await knex.raw("SELECT * FROM pets");
    let pets = query.rows;
    console.log(pets);
}

const main = async () => {
    await getPets() // Test to see if knex is configured correctly to connect to your database
    knex.destroy()
}

main()
```

## 5. Celebrate

You can now run SQL queries from a JavaScript file. This is important because in the future, you will build an Express API using JavaScript, and you will use `knex` to connect to a real database instead of just an in memeory array!

## 6. Create More Functions for Practice
We wrote a function to get all the pets. Write a function to:
* get one pet.
* get all the people.
* get one person.
* get all the pets that belong to a certain person.
* get all the orders the belong to certain customer.
* get all the products that a certain customer has ever bought.
* get the top 3 most recent orders.
* get the cheapest product.
* get all the customers that have ever bought a certain product.
* get all the books that a certain author has ever written.
* get all the authors of a certain book.

Check out the the [final-code](final-code/playground.js) of what the `playground.js` file would look like.