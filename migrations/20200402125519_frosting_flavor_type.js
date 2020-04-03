
exports.up = function(knex) {
    return knex.schema.createTable('frosting_flavor_type', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('frosting_type_id').references('id').inTable('frosting_type');
        table.integer('frosting_flavor_id').references('id').inTable('frosting_flavors');
        table.string('image').notNullable();
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('frosting_flavor_type');
};
