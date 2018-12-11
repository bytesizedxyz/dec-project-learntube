require('dotenv').config();
const connection = {
  host: process.env.DATABASE_HOST || '127.0.0.1',
  user: process.env.DATABASE_USER || 'maverickg59',
  port: process.env.DATABASE_PORT || 5432,
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'perntube'
};

console.log(connection);

const dbConfig = {
  client: 'pg',
  connection,
  migrations: {
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  }
};

module.exports = {
  development: dbConfig,
  test: dbConfig
};
