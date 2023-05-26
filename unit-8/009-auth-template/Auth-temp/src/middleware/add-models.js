const User = require('../db/models/user');
const Friend = require('../db/models/friend');
const Book = require('../db/models/book');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Friend,
    Book,
  };
  next();
};

module.exports = addModels;
