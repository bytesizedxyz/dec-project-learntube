exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_views', table => {
    table.increments('id');

    table.uuid('user_uuid').unsigned();
    table.uuid('video_uuid').unsigned();

    table
      .foreign('user_uuid')
      .references('uuid')
      .inTable('users');
    table
      .foreign('video_uuid')
      .references('uuid')
      .inTable('videos');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_views');
};
