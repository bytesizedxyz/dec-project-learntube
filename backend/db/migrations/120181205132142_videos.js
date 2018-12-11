exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', table => {
    table
      .uuid('uuid')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title');
    table.string('url');
    table.integer('watch_count');
    table.integer('user_uuid').unsigned();
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('user_uuid').references('users_pkey');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos');
};
