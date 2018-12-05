exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist_video', table => {
    table.increments('order');
    table.foreign('playlist_id').references();
    table.foreign('video_id').references();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_video');
};
