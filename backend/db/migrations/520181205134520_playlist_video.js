exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist_video', table => {
    table.increments('order');
    table.integer('playlist_uuid').unsigned();
    table.integer('video_id').unsigned();
    table.foreign('playlist_uuid').references('playlist_pkey');
    table.foreign('video_uuid').references('playlist_pkey');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_video');
};
