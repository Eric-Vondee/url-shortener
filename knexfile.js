// Update with your config settings.

import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } from "./config/index.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
  staging: {
    client: "postgresql",
    connection: {
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
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
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
    },
    pool: {
      min: 2,
      max: 10,
      idleTimeoutMillis: 10000,
      acquireTimeoutMillis: 900000,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
