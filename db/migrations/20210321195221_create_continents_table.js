exports.up = function (knex) {
  return knex.schema.createTable("continents", (contsTable) => {
    contsTable.integer("continent_id").primary();
    contsTable.string("name").notNullable();
    contsTable.integer("numberOfCountries").notNullable().defaultTo(0);
    contsTable.string("biggestCity").notNullable();
    contsTable.integer("population").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("continents");
};
