exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table
      .uuid('uuid')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('username');
    table.string('email').unique();
    table.string('password');
    table.bool('is_admin');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
