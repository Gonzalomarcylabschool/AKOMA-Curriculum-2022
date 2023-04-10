const express = require('express');
const carsController = require('./cont/cars');
const addModel = require('./middleware/add-models');

const router = express.Router();

router.use(addModel);

router.get('/cars' )
router.delete('cars', carsController.destroyAll); // DELETE ALL
router.delete('cars/:id', carsController.destroy); // DELETE ALL
router.get('cars', carsController.list);
router.get('cars/:id', carsController.find);
router.post('cars', carsController.create);
router.patch('cars/:id', carsController.update);

module.exports = router;