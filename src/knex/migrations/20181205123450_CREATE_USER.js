exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('tbl_user', table => {
            table.increments('user_id').primary();
            table.string('username', 30).notNullable();
            table.string('password').notNullable();
            table.string('name', 100).notNullable();
            table.string('lastname', 100).notNullable();
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('tbl_user')
    ])
};
