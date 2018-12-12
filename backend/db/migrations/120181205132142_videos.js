const { VIDEOTABLE, USERTABLE } = require('../../SERVER_CONSTANTS').tableNames;

exports.up = (knex, Promise) => {
  return knex.schema.createTable(VIDEOTABLE, table => {
    table
      .uuid('uuid')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title');
    table.string('url');
    table.integer('watch_count');
    table.uuid('user_uuid').unsigned();
    table
      .foreign('user_uuid')
      .references('uuid')
      .inTable(USERTABLE);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos');
};
