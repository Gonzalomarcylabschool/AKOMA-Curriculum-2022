const knex = require('./knex')
// const { generateId } = require("../utils");

// All of the code for the cars live in this Cars class.
class Cars {
  static async create(make, model, year, color) {
    try {
      const dbInsert = await knex.raw(`
      INSERT INTO cars (make, model, year, color) 
      VALUES (?, ?, ?, ?) 
      RETURNING *`, [make, model, year, color]);
      const newCar = dbInsert.rows[0];
      return newCar;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const dbList = await knex.raw(`
      SELECT * 
      FROM cars`);
      return dbList.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const dbCar = await knex.raw(`
      SELECT * 
      FROM cars 
      WHERE id = ?`, [id]);
      return dbCar.rows[0] || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async updateCompletion(id, make, model, year, color) {
    try {
      const dbUpdate = await knex.raw(`
      UPDATE cars
      SET make = ?, model = ?, year = ?, color = ?
      WHERE id = ?
      returning *
      `, [make, model, year, color, id]);
      return dbUpdate.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const result = await knex.raw(`DELETE FROM cars WHERE id = ?`, [id]);
      return result.rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      await knex.raw('TRUNCATE cars');
      return true;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}