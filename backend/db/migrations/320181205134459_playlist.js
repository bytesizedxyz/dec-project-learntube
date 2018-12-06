exports.up = (knex, Promise) => {
  return knex.schema.createTable('playlist', table => {
    table.increments('id').primary();
    table.text('title');
    table.integer('user_id').unsigned();
    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('playlist');
};
