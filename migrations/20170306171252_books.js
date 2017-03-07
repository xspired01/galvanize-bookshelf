

exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable().defaultTo('');
    table.string('author').notNullable().defaultTo('');
    table.string('genre').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.text('cover_url').notNullable().defaultTo('');
    table.timestamps('created_at').notNullable().defaultTo(knex.raw('raw()'));
    table.timestamps('updated_at').notNullable().defaultTo(knex.raw('raw()'));
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
