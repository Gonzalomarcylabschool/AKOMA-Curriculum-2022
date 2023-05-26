const knex = require('../knex');

class Book {
  constructor({ id, tile, author }) {
    this.id = id;
    this.tile = tile;
    this.author = author;
  }

  static async list() {
    const query = 'SELECT * FROM books';
    const { rows } = await knex.raw(query);
    return rows.map((books) => new Book(books));
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE books;');
  }
}

module.exports = Book;
