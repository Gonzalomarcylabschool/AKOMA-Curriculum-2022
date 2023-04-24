require('dotenv').config();

const env = process.evn.NODE_ENV || 'development';
const config = require = ('../../../knexfile') [env];

module.exports = require('knex')(config);
