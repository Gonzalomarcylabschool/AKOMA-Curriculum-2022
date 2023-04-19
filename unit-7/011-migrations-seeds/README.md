# Migrations and Seeds

## What Are Migrations?
Migrations are special files that run queries on your DB to perform structural updates, or in some cases, data edits. They are designed to be run in a specific order. That way, if anything bad happens, we can "roll back" the latest batch of migrations, apply a fix, and then run the migrations again. To facilitate this, it's common that migration files will have an `up` function (for new changes) and a `down` function (for rollbacks).

### But Why?

Up until this point we have been creating out data base in a very manual way. We want to to be able to write out our JS to make this easier for us. You'll see how this happens as we go through the walkthrough. 

## What Are seeds?
If a migration manages the *architecture* of our tables, then a seed manage the *starting data* of our tables. When you run a seed file, it's like a reset. It will wipe out all existing data, and then populate it with a predetermined data set. This is super helpful when you're getting started.

Once you launch your app and get real user data, seeds are often replaced by "prod dumps". Where the production data from the night before is essentially used for reset instead of your seed data. However, we don't have that yet, so that's why seed files are so helpful.

So What are we going to have by the end of this Lecture:

* Initialized our project with npm and knex.
* Created migrations for a Many To Many relationship.
* Used a seed file to get our DB started.
* Have the skeletons of our JS Models.