
exports.up = function(knex) {
    return knex.schema.createTable('finish_colors', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('color').notNullable();
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('finish_colors');
};
