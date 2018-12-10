exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', table => {
    table.increments("id").primary();
    table.string('name');
    table.string('url');
    table.integer("watch_count");
    table.integer('user_id').unsigned();
    table.foreign("user_id").references('id').inTable('users');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos');
};
