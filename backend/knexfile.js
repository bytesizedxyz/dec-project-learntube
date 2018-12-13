
// One note, if youre using postgres and this doesnt run because "function uuid_generate_v4()" does not exist
// run this query in your database as it's needed to generate the uuid's for multiple tables:
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


// In addition, this is needed in this file so it will read the .env file variables upon running the knex commands.
require('dotenv').config();

// Variables used in the knex commands.
const connection = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
};

const dbConfig = {
  client: 'pg',
  connection,
  migrations: {
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  },
};

module.exports = {
  development: dbConfig,
  test: dbConfig
};
