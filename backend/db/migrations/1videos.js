exports.up = (knex, Promise)  => {
    return knex.schema.createTable('videos', (table) => {
      table.increments();
      table.string('name');
      table.string('')
    });
  };
  
  exports.down = (knex, Promise) => {
  return knex.schema.dropTable('industry');
  };