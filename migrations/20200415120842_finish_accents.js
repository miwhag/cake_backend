
exports.up = function(knex) {
    return knex.schema.createTable('finish_accents', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.shema.dropTable("finish_accents");

};
