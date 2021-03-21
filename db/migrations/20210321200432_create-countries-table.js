exports.up = function (knex) {
  knex.schema.createTable("countries", (countriesTable) => {
    countriesTable.increments("country_id").primary();
    countriesTable.string("name").notNullable();
    countriesTable.string("capitalCity").notNullable();
    countriesTable.number("population").notNullable();
    countriesTable
      .integer("continent_id")
      .references("continents.continent_id")
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("countries");
};
