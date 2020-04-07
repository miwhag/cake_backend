
exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.increments();
        table.string("first_name");
        table.string("last_name");
        table.string("username");
        table.string("password_digest");
    })
  
};

exports.down = function(knex) {
    return knex.shema.dropTableIfExists("user")
};



