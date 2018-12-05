exports.up = (knex, Promise) => {
  return knex.schema.createTable('Users', table => {
    table.increments('id');
    table.string('userName');
    table.unique('email');
    table.string('password');
    table.bool('isAdmin');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Users');
};
