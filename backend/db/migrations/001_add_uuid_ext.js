exports.up = (knex, Promise) => {
  const rawSql = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";';
  knex.raw(rawSql);
};
