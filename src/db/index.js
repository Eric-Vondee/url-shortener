import knex from "knex";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../../config/index.js";

// const db = knex({
//   client: "postgresql",
//   connection: {
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     database: DB_NAME,
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
