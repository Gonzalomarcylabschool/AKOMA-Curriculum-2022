// const superheroes = require('superheroes');
// const randomHero = superheroes.all;
// console.log(randomHero);


//module example 1
// Using dot notation
// const utils = require('./utils'); // get the whole object
// const roll = utils.rollDie();//use dot notation to get the values

// console.log(`${utils.INSTRUCTOR_NAME} rolled a ${roll}`);

// Using destructuring
// const { rollDie, INSTRUCTOR_NAME } = require("./utils"); 
// const roll = rollDie()

// console.log(`${INSTRUCTOR_NAME} rolled a ${roll}`)

// Using dot notation
const logger = require('./logger')
logger.log(logger.URL);

// Using destructuring
const { log, URL } = require('./logger');
log(URL);
// console.log(module);

