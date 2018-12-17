const {
  PLAYLISTVIDEOTABLE,
  VIDEOTABLE,
  PLAYLISTTABLE
} = require('../../SERVER_CONSTANTS').tableNames;

exports.up = function(knex, Promise) {
  return knex.schema.createTable(PLAYLISTVIDEOTABLE, table => {
    table.increments('order');
    table.uuid('playlist_uuid').unsigned();
    table.uuid('video_uuid').unsigned();
    table
      .foreign('playlist_uuid')
      .references('uuid')
      .inTable(PLAYLISTTABLE);
    table
      .foreign('video_uuid')
      .references('uuid')
      .inTable(VIDEOTABLE);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist_video');
};
