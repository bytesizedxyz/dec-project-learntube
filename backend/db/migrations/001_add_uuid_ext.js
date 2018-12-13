exports.up = (knex, Promise) => {
  const rawSql = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";';
  knex.raw(rawSql);
};

exports.down = (knex, Promise) => {
  const rawSql = 'DROP EXTENSION IF EXISTS "uuid-ossp";';
  return knex.raw(rawSql);
};
