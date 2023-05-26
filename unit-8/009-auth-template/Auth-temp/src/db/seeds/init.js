const User = require('../models/user');
const Friend = require('../models/friend');
const Book = require('../models/book');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
  await Friend.deleteAll();
  await Friend.create('Gonzalo', 'Romero');
  await Friend.create('Leslie', 'Knope');
  await Friend.create('Ben', 'Wyatt');
  await Friend.create('Ron', 'Swanson');
  await Book.deleteAll();
  await Book.create('The Da Vinci Code', 'Dan Brown');
  await Book.create('Digital Fortress', 'Dan Brown');
  await Book.create('The Lost Symbol', 'Dan Brown');
  await Book.create('Inferno', 'Dan Brown');
};
