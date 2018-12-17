exports.up = (knex, Promise) => {
  return knex.raw('create extension if not exists "uuid-ossp"');
};

exports.down = (knex, Promise) => {
  return knex.raw('drop extension if not exists "uuid-ossp"');
};
