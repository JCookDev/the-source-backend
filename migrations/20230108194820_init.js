/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('music', table => {
        table.increments('id')
        table.string('cover_art', 500)
        table.string('artist', 250)
        table.string('genre', 250)
        table.string('title', 250)
        table.string('audio_file', 500)
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   
};
