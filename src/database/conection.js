const { Pool} = require('pg');

const connectionString = process.env.DATABASE_URL;
//const connectionString = 'postgres://iqextvrkiedaon:90d6876f26aa28fd8acda1b9e30f1e79408af6739c14adb0b4ea5779be0a914e@ec2-54-164-238-108.compute-1.amazonaws.com:5432/dctvi0jo0dnv6p'

const pool = new Pool({
  connectionString ,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {db:pool};
