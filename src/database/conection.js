const {Pool} = require('pg');
const {dbenv} = require('../properties/properties');

const connectionString = dbenv;

const pool = new Pool({
  connectionString ,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {db:pool};
