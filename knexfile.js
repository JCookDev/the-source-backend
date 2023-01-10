// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      port: 5432,
      user: "postgres",
      password: "postgres",
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
