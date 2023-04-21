import db from "../src/db/index.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return db.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("uuid");
    table.string("shortURL");
    table.string("longURL");
    table.index(["shortURL", "longURL", "uuid"], "idx_shortURL_longURL_uuid", {
      storageEngineIndexType: "hash",
    });
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return db.schema.dropTable("users");
};
