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
      // filename: './dev.sqlite3'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'the-source-backend',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.HEROKU_POSTGRESQL_PUCE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      // database: 'the-source-backend',
      // user:     'username',
      // password: 'password'
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
