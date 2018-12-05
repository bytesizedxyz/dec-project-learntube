exports.up = (knex, Promise) => {
  return knex.schema.createTable('Users', table => {
    table.increments('uuid');
    table.string('userName');
    table.string('email');
    table.string('password');
    table.bool('isAdmin');
  });
};
