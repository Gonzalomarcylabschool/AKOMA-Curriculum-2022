# Understanding Migrations, Seeds, and Knex

- [Understanding Migrations, Seeds, and Knex](#understanding-migrations-seeds-and-knex)
- [Let's Learn A Real SQL Setup System](#lets-learn-a-real-sql-setup-system)
  - [What Are We Making?](#what-are-we-making)
  - [What Are Migrations?](#what-are-migrations)
  - [What Are seeds?](#what-are-seeds)
  - [What Is Knex?](#what-is-knex)
  - [What is NPX](#what-is-npx)
- [Code Along Walkthrough](#code-along-walkthrough)
- [Setting Up Our Project and Connections](#setting-up-our-project-and-connections)
  - [The knexfile](#the-knexfile)
  - [Modifying the knexfile](#modifying-the-knexfile)
  - [final check](#final-check)
- [Create your first migration](#create-your-first-migration)
  - [CLI Command](#cli-command)
  - [Package.json Command](#packagejson-command)
  - [The New Migration File](#the-new-migration-file)
  - [Editing our migration](#editing-our-migration)
  - [timestamps](#timestamps)
- [Running the migration](#running-the-migration)
- [Rolling back](#rolling-back)
    - [Why do we rollback?](#why-do-we-rollback)
- [Check the DB](#check-the-db)
    - [The sequences](#the-sequences)
    - [Migration Tables](#migration-tables)
    - [pets](#pets)
- [Migration Challenge: Owners](#migration-challenge-owners)
- [Owners Migration Answer](#owners-migration-answer)
- [Join Table migration: owner\_pets](#join-table-migration-owner_pets)
  - [Making the migration](#making-the-migration)
  - [Editing the migration file](#editing-the-migration-file)
  - [Foreign keys](#foreign-keys)
- [Models](#models)
  - [Instances and Data Shapes](#instances-and-data-shapes)
  - [Renaming Columns](#renaming-columns)
  - [knex.js](#knexjs)
- [Seeding](#seeding)
  - [commands](#commands)
  - [The Seed File](#the-seed-file)
  - [Editing The Seed](#editing-the-seed)
- [Source of Truth](#source-of-truth)
- [Your turn](#your-turn)


# Let's Learn A Real SQL Setup System
When you work with other devs, they need to be able to reproduce the database structure. What you have been doing up till now is running SQL commands saved in READMEs, but that isn't scalable. In the real world, companies to use migration files to keep track of their DB structure and seed files to populate their initial data.

## What Are We Making?
We're going to make a Many To Many relationship.

- `Owners` have many `Pets` through `owner_pets`
- `Pets` have many `Owners` through `owner_pets` too.

Now, we previously had `pets` and `owners` as a Has Many/Belongs To. And that's one way to do it. But in real life, people can have many pets, but pets can also belong to multiple people (entire families in fact). Let's try that version!

## What Are Migrations?
Migrations are special files that run queries on your DB to perform structural updates, or in some cases, data edits. They are designed to be run in a specific order. That way, if anything bad happens, we can "roll back" the latest batch of migrations, apply a fix, and then run the migrations again. To facilitate this, it's common that migration files will have an `up` function (for new changes) and a `down` function (for rollbacks).

## What Are seeds?
If a migration manages the *architecture* of our tables, then a seed manage the *starting data* of our tables. When you run a seed file, it's like a reset. It will wipe out all existing data, and then populate it with a predetermined data set. This is super helpful when you're getting started.

Once you launch your app and get real user data, seeds are often replaced by prod dumps. Where the production data from the night before is essentially used for reset instead of your seed data. However, we don't have that yet, so that's why seed files are so helpful.


## What Is Knex?
Knex (pronounced [kuh-nex](https://www.youtube.com/watch?v=19Av0Lxml-I&t=521s), get it right or I'll find you -Mike) is a query builder that lets us run SQL queries from JS files. But it's *also* a way to manage our migrations and seeds from the command line. So far you've only used it for queries, but today we're going to walk through how to set up your db with migrations and seeds from scratch!

## What is NPX
We're going to use the `npx` command a lot in this tutorial, so let's explain what it is. tl;dr: `npx` allows us to run command utilities without our `package.json`.

When you run a command like `cd some-dir/`, your computer doesn't know what `cd` *is*. Instead, it has a bunch of places it can check to see if `cd` is a command and what it should do. Our `package.json` `scripts` property *automatically* adds a project's `node_modules` to that list of places to check. So, if you edit your scripts to look like this:

```json
  "scripts": {
    "knex:init": "knex init",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

You could just run `npm run knex:init` and your computer would know what to do. But from the CLI, if we want to reference a command from a `node_modules` package like `knex`, we need to preface the command with `npx`. You'll see us use both the `package.json` scripts, *and* `npx` throughout this tutorial, so you can see the pros and cons of each!

For more information, check out this [article that explains npm vs npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/). `npx` can do some other cool things that we don't have to get into here.

# Code Along Walkthrough
By the end of this tutorial, we're going to have:

> Initialized our project with npm and knex</br>
> Created migrations for a Many To Many relationship </br>
> Used a seed file to get our DB started
> The skeletons of our JS Models

# Setting Up Our Project and Connections
To get started create a new directory and then run:

```bash
git init
npm init --yes
npm install knex pg dotenv
npx knex init
touch .gitignore .env
echo node_modules >> .gitignore
echo .env >> .gitignore
mkdir -p src/db/migrations src/db/seeds src/db/models
git add .
git commit -m "init"
```

That does several things:

1. Initialize our directory with `git` and a `package.json`
2. Install `knex`, `pg` (we need pg to tell knex how to talk to our DB), and `dotenv` (this lets us use a `.env` file for our environment variables)
3. Then we're initializing our project with a `knexfile`. This handles how our project connects to our database in different environments
4. Adds our files and commits

<details><summary>check here for details</summary>

`git init`: Initializes an empty Git repository in the current directory.

`npm init --yes`: Creates a new package.json file with default settings without requiring user input.

`npm install knex pg dotenv`: Installs the knex, pg, and dotenv packages as dependencies for the project.

`npx knex init`: Initializes the Knex CLI configuration file knexfile.js in the current directory.

`touch .gitignore .env`: Creates two new files in the current directory, .gitignore and .env.

`echo node_modules >> .gitignore`: Appends the string node_modules to the end of the .gitignore file.

`echo .env >> .gitignore`: Appends the string .env to the end of the .gitignore file.

`mkdir -p src/db/migrations src/db/seeds src/db/models`: Creates three new directories in the current directory, src/db/migrations, src/db/seeds, and src/db/models, using the -p flag to create parent directories if they do not exist.

`git add` .: Adds all files in the current directory to the Git staging area.

`git commit -m "init"`: Commits the changes in the Git staging area with the commit message "init".
</details>

## The knexfile
A `knexfile` is a special file that `knex` expects to exist in the root of the project. It tells our project how to connect to the database in each environment, as well as other things like locations of files. Out of the box, this is what `knex init` will give you:

```js
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
```

Ignore the stuff at the top, those types are for TypeScript (and VSCode).
As you can see, there are top level properties that correspond to the various kinds of environments our code may run in. You can also see that the DB driver starts as `sqlite` and then changes to `postgres`. Inside each of these objects are config data.

## Modifying the knexfile

We're going to simplify this a bit, make your `knexfile` look like this:

```js
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASS || 'postgres',
      database: process.env.PG_DB || 'postgres',
    },
  },
};
```

We'll just focus on development for now. We're using environment variables with `dotenv`, but also providing some fallbacks just in case. Add any environment variables you need to your `.env` file. Make sure you've already created a database to connect to!

```env
# Replace with your special values like this
PG_HOST=127.0.0.1
PG_PORT=5432
PG_USER='postgres'
PG_PASS='postgres'
PG_DB='postgres'
```

## final check
Your project environment should look like this:

```plaintext
my-knex-project/
↳ node_modules/
↳ src/
  ↳ db/
    ↳ migrations/
    ↳ seeds/
    ↳ models/
↳ .env
↳ .gitignore
↳ knexfile.js
↳ package-lock.json
↳ package.json
```

# Create your first migration
Before we create our migration using the CLI, let's first tell `knex` where we want to save each file. In your `knexfile.js` add the `migrations` property to the `development` object (and require `path`):

```js
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {...},
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
  },
};
```

## CLI Command

Now that `knex` is setup, let's create our first migration with the CLI command:

```bash
npx knex migrate:make create_pets_table
```

## Package.json Command
You can also add that to your package.json

```json
"scripts": {
  "migrate:make": "knex migrate:make",
```

And then to run it in the command line, just use `--` to pass in the filename argument:

```bash
npm run migrate:make -- create_pets_table
```

I personally always recommend putting these scripts into `package.json`. namely because I'm always forgetting the exact syntax for these `knex` CLI commands. That way I can use either the package or NPX without Googling.

## The New Migration File
Anyway, what that command actually *did* was create a new file `src/db/migrations/20230419004627_create_pets_table.js`. It put it there because we configured it to, and the name will always be a timestamp plus whatever you passed in from the command line. The file itself contains:

```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
```

Here we see the `up` and `down` functions we talked about prior. As you can see they're getting a `knex` object as an argument.

(If the old syntax bothers you, you can create a `migration-stub.js` file and [configure the knexfile](https://knexjs.org/guide/migrations.html#custom-migration) to use it instead.)

## Editing our migration
The only real rule is: whatever we do in `up` we have to undo in `down`. Also, don't use `knex.raw` for this, use [the schema builder section of the docs](https://knexjs.org/guide/schema-builder.html). Here's a simple example that fills in our pets table:

```js
exports.up = (knex) => knex.schema.createTable('pets', (table) => {
  table.increments();
  table.string('name');
  table.string('species');
  table.boolean('is_hungry').defaultTo(true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('pets');
```

Both `up` and `down` should return a promise. And `knex.[method]` is a promise, so if there's only one operation in the `up` of `down` function, return it.

Looking at the `up` function, we can see we have some handy utility functions from `knex`. Also note that it's actually all within the `createTable` callback.

Then, for `down`, it's a single liner and we're just dropping the table.

I encourage all of you to check out [the schema builder section of the docs](https://knexjs.org/guide/schema-builder.html) to find out more about these methods.

## timestamps
You might want to track creation and update times for real apps, so check out the `table.timestamps(true, true);` function some time (we won't bother with it here).

# Running the migration
Now that our migration exists, let's run it. The `knex` command:

```bash
npx knex migrate:latest
```

And via `package.json`:

```json
"scripts": {
  "migrate": "knex migrate:latest",
```

```bash
npm run migrate
```

Then you'll see something like this in the terminal:

```bash
Using environment: development
Batch 1 run: 1 migrations
```

Whenever you don't specify the `env`, the default is `development`. This would set it to production:

```bash
NODE_ENV=production npm run migrate
```

You won't need to do that (probably). But it's there if you do!

# Rolling back
Rolling back migrations calls the `down` function.

```bash
npx knex migrate:rollback
```
and the `package.json` version

```json
"scripts": {
  "rollback": "knex migrate:rollback",
```

```bash
npm run rollback
```

### Why do we rollback?
What if you created a table, but realized there was a typo? In order to fix the migration, you first need to roll back the ones you just applied. Then, you can edit the table, and re-apply the edited migration.


# Check the DB
Now let's see what we've got going on in the db:

```bash
➜ migrations-and-seeds$ psql -U postgres -d knex_practice
psql (15.2)
Type "help" for help.

knex_practice=# \d
                List of relations
 Schema |              Name              |   Type   |  Owner
--------+--------------------------------+----------+----------
 public | knex_migrations                | table    | postgres
 public | knex_migrations_id_seq         | sequence | postgres
 public | knex_migrations_lock           | table    | postgres
 public | knex_migrations_lock_index_seq | sequence | postgres
 public | pets                           | table    | postgres
 public | pets_id_seq                    | sequence | postgres

knex_practice=# \d pets
                                     Table "public.pets"
  Column   |          Type          | Collation | Nullable |             Default
-----------+------------------------+-----------+----------+----------------------------------
 id        | integer                |           | not null | nextval('pets_id_seq'::regclass)
 name      | character varying(255) |           |          |
 species   | character varying(255) |           |          |
 is_hungry | boolean                |           |          | true
Indexes:
    "pets_pkey" PRIMARY KEY, btree (id)
```

OK so there's a lot going on here let's talk about it:

### The sequences
When we have auto incrementing ID columns, postgres needs some way to keep track of that. So it auto creates these sequences. Don't worry about them and also don't touch them.

### Migration Tables
By that same token, `knex` needs some way to know what migrations have been applied or how far to rollback. It does this with auto generated tables. Again, don't worry and don't touch.

### pets
This is the table we actually made. the `\d` command will list data about a table. You can see we have an auto incrementing index and and our `is_hungry` defaults to true. It's important to check your work!

# Migration Challenge: Owners
This time, why don't you try creating a migration to make an `owners` table. An owner should have an `id` (`primary key`), `name` (`text`) and `age` (`number`) property. After you do it, scroll down to see the answer.

Migrations should be as focused as possible, so adding the `owners` table should be a *new* migration.

BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>
BLOCK <br/>

# Owners Migration Answer

Run this migration:

```bash
npx knex migrate:make create_owners_table
```

and then the migration itself should look something like:


```js
exports.up = (knex) => knex.schema.createTable('owners', (table) => {
  table.increments();
  table.string('name');
  table.integer('age');
});

exports.down = (knex) => knex.schema.dropTable('owners');
```

# Join Table migration: owner_pets
Alright, now that both our end entities have been created, we can make our join table. The reason this comes last is because we're going to tell postgres that these foreign keys reference the `owners` and `pets` tables. And we can't do that if they don't exist yet. Remember, migration order matters!

## Making the migration
Let's call the table `owner_pets`, because that's the convention when there is no real world entity for a join table.

```bash
npx knex migrate:make create_owner_pets_table
```

## Editing the migration file
This is what we're looking at:

```js
exports.up = (knex) => knex.schema.createTable('owner_pets', (table) => {
  table.increments();
  table.integer('owner_id').references('id').inTable('owners');
  table.integer('pet_id').references('id').inTable('pets');
  table.timestamps(true, true);
});

exports.down = (knex) => knex.schema.dropTable('owner_pets');
```
And inspecting the table after running the migrations gives us this (edited for line length)

```plain
knex_practice=# \d owner_pets
              Table "public.owner_pets"
   Column   |   Type    | C.. | Null |     Default
------------+-----------+-----+------+----------------
 id         | integer   |     | not | nextval(....
 owner_id   | integer   |     |     |
 pet_id     | integer   |     |     |
 created_at | timestamp |     | not | CURRENT_TIMESTAMP
 updated_at | timestamp |     | not | CURRENT_TIMESTAMP

Indexes:
    "owner_pets_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "owner_pets_owner_id_foreign" FOREIGN KEY (owner_id) REFERENCES owners(id)
    "owner_pets_pet_id_foreign" FOREIGN KEY (pet_id) REFERENCES pets(id)
```

## Foreign keys
So technically, a foreign key can literally just be an integer and SQL will still be able to make joins. However, setting it specifically using `references` sets us up for some deletion protection and other neat things. More on that in seeds.

# Models
This is not the point of this exercise, so I'm just gonna give you some bare bones models (no frills like error handling) in this repo. Copy them over. What's important to note is that we don't need models for everything. Very often, you won't need a model for the join class (unless it's a real world entity), and instead you'll build the methods you need on the end class.

## Instances and Data Shapes
It's important that what your model returns is usable. So we're doing extra work to take the raw values like:
```js
[
  {
    ownerId: 1,
    ownerName: 'tom',
    ownerAge: 41,
    petId: 1,
    petName: 'henry',
    petSpecies: 'cat',
    petIsHungry: true
  },
]
```

And instead we'll return:
```js
Owner {
  id: 1,
  name: 'tom',
  age: 41,
  pets: [
    Pet { id: 1, name: 'henry', species: 'cat', isHungry: true }
  ],
}
```
In addition to that, you should also think about adding some instance methods. You can see I've added one to `Owner`, where an instance of `Owner` can `findPets`.

Now as always with these queries, be wary of source of truth. If you ever delete something form the DB, make sure what you are returning is up to date!

Also, there are just...so many ways to do these things. I picked a way that sort of resembles Sequelize, but you don't have to. As you get more experienced you'll want to edit your models or use different approaches, and that's ok. **Do what's best for your application** (assuming it's syntactically correct).

## Renaming Columns
You'll likely run into an issue in your own apps: 2 tables have the same column names. Here, both our `pets` and `owners` have an `id` and `name` property. Now, you *could* preface column names (owner_name, owner_id), but that's clunky. Also any new tables will break that convention and old tables will need migrations. The point is, there's another way.

SQL joins don't care about duplicate column names, it's only JS that does (because objects can't have multiple property names). That means the fix should ideally exist in JS. If you use an Object Relationship Mapper (ORM) like Sequelize, Objection, or Prisma this kind of thing is handled for you under the hood. But since we want you to *really* know your stuff, we'll have to handle it ourselves. You can see I'm accomplishing this with helper functions. Think, what are the trade offs for doing it this way? Is there another way you might prefer?

## knex.js
One last piece of this is the actual `knex.js file`. It's job is to take the `knexfile.js` and apply the environment to it and export the instance of knex that will be used by our models. Here's the default way to do it:

```js
const environment = process.env.NODE_ENV || 'development';
const config = require('../../../knexfile')[environment];
module.exports = require('knex')(config);
```

We do this logic in a separate file and then load that `knex` file. We do this to keep our code DRY.

# Seeding
Alright, home stretch! Now that we have models, we can create a seed file. First, let's tell knex where we want to store the file:

```js
development: {
  client: 'pg',
  connection: { ... },
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  // NEW
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds'),
  },
},
```

## commands
And then lets run the commands

```bash
npx knex seed:make init
```

package.json
```json
"scripts": {
    "seed:make": "knex seed:make",
```

```bash
npm run seed:make -- init
```

## The Seed File
This will create another timestamped file for us, though unlike migrations you'll likely do everything in one file. The reason is simple, you'll probably want access to all the things you create in one place. Anyway, this is what the raw file looks like:

```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
```
Let's change this to what we want: 

```js
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('owners').del()
  await knex('owners').insert([
    {id: 1, name: 'Gonzalo', age: 35},
    {id: 2, name: 'Raven', age: 64},
    {id: 3, name: 'Vincent', age:12}
  ]);
};
```
Now that we changed the information we can run the command. 

```bash
npx knex seed:run
```

## Editing The Seed
On your own, you can go into psql and create some owners, pets, and connections. Now *this* is where our protections come in. If you created any connections, look what happens if we were to try this:

```js
const Owner = require('../models/owner');
const Pet = require('../models/pet');

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('owners').del()
  await knex('pets').del()
};
```

Our console is *freaking out*:

```plaintext
Error while executing "example-migrations-and-seeds/src/db/seeds/init.js" seed: delete from "owners" - update or delete on table "owners" violates foreign key constraint "owner_pets_owner_id_foreign" on table "owner_pets"
```

It's yelling at us because we're trying to delete pets that have dependent owners, and vice versa. If we want to delete an owner or pet, first we have to make sure we've deleted the connecting join table first.

```js
const Owner = require('../models/owner');
const Pet = require('../models/pet');

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('owner_pets').del();
  await knex('owners').del();
  await knex('pets').del();

  const reuben = await Owner.create('Reuben', 32);
  const maya = await Owner.create('Maya', 31)

  await reuben.createPet('Henry', 'cat', Pet);
  const sallyMander = await reuben.createPet('Sally', 'salamander', Pet);

  await maya.addPet(sallyMander.id, Pet);

  console.log(await reuben.getPets(Pet));
  console.log(await maya.getPets(Pet));
};
```

# Source of Truth
As I said before, you need to watch out for this. `Source of Truth` means "Where are you checking for information?" With modern ORMs, we trade perfect source of truth for convenience.

Notice how sometimes an `owner` will have a `.pets` array, but not always. Sometimes you have to call `findWithPets` or `getPets`. Each one checks the DB for pets, but then it saves a static reference to the JS file. That means if we were to `findWithPets`, then delete a pet from the db, our JS code would still have a reference to that now deleted pet. That goes the same for updates!

**The basic rule of thumb is, before making a final return to your API, make *sure* you are returning the most up to date query.**

# Your turn
OK! Those are the all the tools you need to succeed for `knex`. However, it's pretty bare! Our owners can't do a whole lot, and our poor pets can't even find their owners. For practice, why don't you try filling out the models a little more, maybe make a more interesting seed file.

You can also mess around in the console by copying over the `console.js` file here and the console script from the package.json.

```json
"console": "node -r ./src/db/models/console.js",
```

Assuming you have Node 18, you can use a top level await in the REPL too:

```plaintext
npm run console

> example-migrations-and-seeds@1.0.0 console
> node -r ./src/db/models/console.js

Welcome to Node.js v18.14.2.
Type ".help" for more information.
> await Owner.list()
[
  Owner { id: 35, name: 'Reuben', age: 32 },
  Owner { id: 36, name: 'Maya', age: 31 }
]
>
```

Any time you edit your `console.js` file, just exit out of the repl and then reload it to get your changes. Remember, the DB will stay the same across repls!