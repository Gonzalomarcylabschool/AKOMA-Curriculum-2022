const Cars = require('../db/models/Cars');

const addModel = (req, res, next) => {
  req.Cars = Cars;
  next();
}

module.exports = addModel;