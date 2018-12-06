exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('user_name');
    table.unique('email');
    table.string('password');
    table.bool('is_admin');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
