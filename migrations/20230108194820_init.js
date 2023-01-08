/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tracks', table => {
        table.increments('id')
        table.string('coverart', 500)
        table.string('artist', 250)
        table.string('genre', 250)
        table.string('title', 250)
        table.string('audiofile', 500)
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tracks');
};
