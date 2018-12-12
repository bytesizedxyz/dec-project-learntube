exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist_video', table => {
    table.increments('order');
    table.uuid('playlist_uuid').unsigned();
    table.uuid('video_uuid').unsigned();

    table
      .foreign('playlist_uuid')
      .references('uuid')
      .inTable('playlist');
    table
      .foreign('video_uuid')
      .references('uuid')
      .inTable('videos');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_video');
};
