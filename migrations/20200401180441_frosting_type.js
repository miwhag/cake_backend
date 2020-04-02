exports.up = function(knex) {
    return knex.schema.createTable('frosting_type', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('info').notNullable();
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('frosting_type');
};