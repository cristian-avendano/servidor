const {Pool} = require('pg');
const {env} = require('../properties/properties');

const connectionString = env;

const pool = new Pool({
  connectionString ,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {db:pool};
