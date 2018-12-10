let { connection } = require('./.dbconfig.js');

module.exports = {
  development: {
    client: 'pg',
    connection,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
