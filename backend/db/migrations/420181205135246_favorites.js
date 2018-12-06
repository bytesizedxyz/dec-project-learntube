exports.up = (knex, Promise) => {
  return knex.schema.createTable('favorites', (table) => {
    table.integer('user_id').unsigned();
    table.integer('video_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('video_id').references('id').inTable('videos');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('favorites');
};