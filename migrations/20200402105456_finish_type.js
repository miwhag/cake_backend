
exports.up = function(knex) {
    return knex.schema.createTable('finish_type', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('info').notNullable();
        table.string('image').notNullable();
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('finish_type');
};
