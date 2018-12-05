exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist_video', table => {
    table.increments('order');
    table.integer('playlist_id').unsigned();
    table.integer('video_id').unsigned();
    table.foreign('playlist_id').references('id').inTable('playlist');
    table.foreign('video_id').references('id').inTable('videos');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_video');
};
