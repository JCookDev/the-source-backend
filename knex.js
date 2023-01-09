const knex = require("knex");
const config = require("./knexfile");
const environment = process.env.DATABASE_URL || "development";
const knexConfig = config[environment];
module.exports = knex(knexConfig);

