const knex = require('../knex');

class Friend {
  constructor({ id, first_name, last_name }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
  }

  static async list() {
    const query = 'SELECT * FROM friends';
    const { rows } = await knex.raw(query);
    return rows.map((friends) => new Friend(friends));
  }

  static async find(id) {
    const query = 'SELECT * FROM friends WHERE id = ?';
    const { rows: [friend] } = await knex.raw(query, [id]);
    return friend ? new Friend(friend) : null;
  }

  static async findByFirstName(firstName) {
    const query = 'SELECT * FROM friends WHERE first_name = ?';
    const { rows: [friend] } = await knex.raw(query, [firstName]);
    return friend ? new Friend(friend) : null;
  }

  static async create(firstName, lastName) {
    const query = `INSERT INTO friends (first_name, last_name)
      VALUES (?, ?) RETURNING *`;
    const { rows: [friend] } = await knex.raw(query, [firstName, lastName]);
    return new Friend(friend);
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE friends;');
  }

  update = async (username) => { // dynamic queries are easier if you add more properties
    const [updatedFriend] = await knex('friends')
      .where({ id: this.id })
      .update({ username })
      .returning('*');
    return updatedFriend ? new Friend(updatedFriend) : null;
  };
}

module.exports = Friend;
