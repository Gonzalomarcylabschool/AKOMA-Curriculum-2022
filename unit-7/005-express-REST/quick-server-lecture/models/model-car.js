//imported from the utils file 
const { generateId } = require("../utils");

// All of the code for the cars live in this Cars class.
class Cars {
  static #all = [];
  constructor (car) { //constructor for each instance
    this.id = generateId();
    this.car = car;

    Cars.#all.push(this); 
  }

  static list() { // returns the array of all the instances. 
    return Cars.#all;
  }

  static find(carId) { // find a car in the array
    return Cars.#all.find(({ id }) => id === carId); //return the car when found
  }

  static editCar(id, newCarName) { // edit the car
    const car = Cars.find(id);
    if (!car) return null;
    car.car = newCarName;
    return car;// return the car that was edited
  }

  static delete(carId) { // delete a specific car by id
    const carIdx = Cars.#all.findIndex(({ id }) => id === carId);
    if (carIdx < 0 ) return null; // return falsey if array empty

    Cars.#all.splice(carIdx, 1)
    return true; //return true if deleted.
  }

  static deleteAll() { // delete all of the cars 
    if (!Cars.#all.length) return null;

    Cars.#all.length = 0
    return Cars.#all; // return empty array
  }
}

module.exports = Cars; // export to server.js 