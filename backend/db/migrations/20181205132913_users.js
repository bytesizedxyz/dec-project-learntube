exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('username');
    table.unique('email');
    table.string('password');
    table.bool('is_admin');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
