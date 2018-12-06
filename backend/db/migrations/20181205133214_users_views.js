exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_views', table => {
    table.increments('id');
    table.foreign('user_id').references('users.id');
    table.foreign('video_id').references('videos.id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_views');
};
