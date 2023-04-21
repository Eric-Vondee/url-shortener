// Update with your config settings.

import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from "./config/index.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
  staging: {
    client: "postgresql",
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
