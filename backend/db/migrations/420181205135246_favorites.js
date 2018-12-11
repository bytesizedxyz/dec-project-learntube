exports.up = (knex, Promise) => {
  return knex.schema.createTable('favorites', table => {
    table.integer('user_uuid').unsigned();
    table.integer('video_uuid').unsigned();
    table.foreign('user_uuid').references('users_pkey');
    table.foreign('video_uuid').references('videos_pkey');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('favorites');
};
