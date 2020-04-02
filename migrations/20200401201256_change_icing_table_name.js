
exports.up = function(knex) {
    return knex.schema.renameTable('icing_flavors', 'frosting_flavors')
};

exports.down = function(knex) {
    return knex.schema.dropTable('frosting_flavors_flavors');
};
