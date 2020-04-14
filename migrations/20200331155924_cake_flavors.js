exports.up = function(knex) {
    return knex.schema.createTable('cake_flavors', (table) => {
        table.increments()
        table.string('name')
        table.string('image')
        table.string('cake_color')
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cake_flavors');
};