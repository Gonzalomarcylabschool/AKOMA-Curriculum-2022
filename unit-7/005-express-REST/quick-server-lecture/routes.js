const express = require('express');
const carsControllers = require('./controllers/cars');


const router = express.Router();

router.get('/cars', carsControllers.destroyAll);