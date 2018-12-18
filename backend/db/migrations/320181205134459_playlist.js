const {
  PLAYLISTTABLE,
  USERTABLE
} = require('../../SERVER_CONSTANTS').tableNames;

exports.up = (knex, Promise) => {
  return knex.schema.createTable(PLAYLISTTABLE, table => {
    table
      .uuid('uuid')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title');
    table.uuid('user_uuid').unsigned();
    table
      .foreign('user_uuid')
      .references('uuid')
      .inTable(USERTABLE);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('playlists');
};
