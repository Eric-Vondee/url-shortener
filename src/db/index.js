import knex from "knex";
import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } from "../../config/index.js";

// const db = knex({
//   client: "postgresql",
//   connection: {
//     host: POSTGRES_HOST,
//     user: POSTGRES_USER,
//     password: POSTGRES_PASSWORD,
//     database: POSTGRES_DB,
//   },
//   pool:{
//     min:0,
//     max:7
//   }
// });

// db.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     return db.schema.createTable('users', function(table) {
//       table.increments("id");
//       table.string("uuid");
//       table.string("shortURL");
//       table.string("longURL");
//       table.index(["shortURL", "longURL", "uuid"], "idx_shortURL_longURL_uuid", {
//         indexType: "unique",
//         storageEngineIndexType: "hash",
//       });
//     });
//   }
// });

// const tableExists = await db.schema.hasTable("users");
// console.log(tableExists);
// if (!tableExists) {
//   await db.schema.createTable("users", (table) => {
//     table.increments("id");
//     table.string("uuid");
//     table.string("shortURL");
//     table.string("longURL");
//     table.index(["shortURL", "longURL", "uuid"], "idx_shortURL_longURL_uuid", {
//       indexType: "unique",
//       storageEngineIndexType: "hash",
//     });
//   });
// }
import config from "../../knexfile.js";
const db = knex(config.production);
export default db;
