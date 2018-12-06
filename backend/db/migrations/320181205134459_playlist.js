exports.up = (knex, Promise) => {
  return knex.schema.createTable('playlist', table => {
    table.uuid('uuid').primary();
    table.string('title');
    table.integer('user_uuid').unsigned();
    table.foreign('user_uuid').references('users_pkey');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('playlist');
};
