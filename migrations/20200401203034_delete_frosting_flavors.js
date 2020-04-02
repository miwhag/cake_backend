
exports.up = function(knex) {
    return knex.schema.dropTable('frosting_flavors');
};

exports.down = function(knex) {
  
};
