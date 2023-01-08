// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      port: 5432,
      user: "yooaymxaeevied",
      password: "9d4d1c5942323783ca8eb93cf52c833830d129c06f7f124ef9e8a0f7817b2393",
      database: "the-source-backend",
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.HEROKU_POSTGRESQL_PUCE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
