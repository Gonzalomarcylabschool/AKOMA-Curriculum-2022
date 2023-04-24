//*import modules*
const express = require('express');//express
const carsControllers = require('./controllers/cars-controller')//controllers
//models

//*express methods for router*
const router = express.Router();//set the router function

//router.use for the model
router.get('/cars', carsControllers.list);
router.get('/cars/:id', carsControllers.find );
router.post();
router.patch();
router.delete();
router.deleteAll();

module.exports = router// routes to the controllers
