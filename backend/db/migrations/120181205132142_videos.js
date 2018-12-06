exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', table => {
    table.uuid('uuid').primary();
    table.string('name');
    table.string('url');
    table.integer('watch_count');
    table.integer('user_uuid').unsigned();

    table.foreign('user_uuid').references('users_pkey');
  });
};
// alter table "videos" add constraint "videos_user_uuid_foreign" foreign key("user_uuid") references "users"("uuid")

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos');
};
