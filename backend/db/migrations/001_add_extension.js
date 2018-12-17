exports.up = (knex, Promise) => {
  return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
};

exports.down = (knex, Promise) => {
  return knex.schema.raw('DROP EXTENSION IF EXISTS "uuid-ossp";')
};