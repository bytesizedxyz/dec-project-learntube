exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist_video', table => {
    table.increments('order');
    table.uuid('playlist_uuid').unsigned();
    table.uuid('videos_uuid').unsigned();
    table.foreign('playlist_uuid').references('playlist_pkey');
    table.foreign('videos_uuid').references('videos_pkey');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_video');
};
