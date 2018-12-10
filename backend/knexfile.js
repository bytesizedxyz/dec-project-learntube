const connection = {
  host: process.env.DATABASE_HOST || '127.0.0.1',
  user: process.env.DATABASE_USER || 'postgres',
  port: process.env.DATABASE_PORT || 5433,
  password: process.env.DATABASE_PASSWORD || 'pass',
  database: process.env.DATABASE_NAME || 'testingDatabaseAgain'
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
