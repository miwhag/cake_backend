
exports.up = function(knex) {
    return knex.schema.createTable('frosting_flavors', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('frosting_flavors');
};
