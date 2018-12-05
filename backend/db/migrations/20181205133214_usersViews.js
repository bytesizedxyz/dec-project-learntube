exports.up = (knex, Promise) => {
  return knex.schema.createTable('userViews', table => {
    table.increments('id');
    table.foreign('userId').references('users.id');
    table.foreign('videoId').references('videos.id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('userViews');
};
