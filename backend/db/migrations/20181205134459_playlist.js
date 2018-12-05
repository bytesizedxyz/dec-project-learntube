exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist', table => {
    table.increments('id').primary();
    table.text('title');
    table.number('uuid');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist');
};
