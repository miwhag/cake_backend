
exports.up = function(knex) {
    return knex.schema.createTable('finish_styles', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('finish_type_id').references('id').inTable('finish_type');
        table.integer('finish_color_id').references('id').inTable('finish_colors');
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('finish_styles');
};
