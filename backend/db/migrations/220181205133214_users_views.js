exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_views', table => {
    table.increments('id');
    table.integer('user_uuid').unsigned();
    table.integer('video_uuid').unsigned();
    table.foreign('user_uuid').references('users_pkey');
    table.foreign('video_uuid').references('videos_pkey');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_views');
};
