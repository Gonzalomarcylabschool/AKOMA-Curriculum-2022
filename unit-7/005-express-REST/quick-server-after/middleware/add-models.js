const Cars = require('../models/model-car')

const addModel = ((req, res, next) => {//middleware to add the Cars class to the request
  req.Cars = Cars;
  next()
});

module.exports = addModel;