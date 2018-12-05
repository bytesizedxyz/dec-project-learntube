exports.up = (knex, Promise) => {
  return knex.schema.createTable('favorites', table => {
    table.foreign('user_uuid').references('users.id');
    table.foreign('video_id').references('videos.id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('favorites');
};
