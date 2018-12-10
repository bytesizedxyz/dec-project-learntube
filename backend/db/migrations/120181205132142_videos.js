exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', table => {
    table.increments("id").primary();
    table.string('title');
    table.string('url');
    table.integer("watch_count");
    table.integer('posted_by').unsigned();
    table.foreign('posted_by').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos');
};
