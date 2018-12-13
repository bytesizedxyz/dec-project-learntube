const {
  FAVORITES,
  USERTABLE,
  VIDEOTABLE
} = require('../../SERVER_CONSTANTS').tableNames;

exports.up = (knex, Promise) => {
  return knex.schema.createTable(FAVORITES, table => {
    table.uuid('user_uuid').unsigned();
    table.uuid('video_uuid').unsigned();
    table
      .foreign('user_uuid')
      .references('uuid')
      .inTable(USERTABLE);
    table
      .foreign('video_uuid')
      .references('uuid')
      .inTable(VIDEOTABLE);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('favorites');
};
