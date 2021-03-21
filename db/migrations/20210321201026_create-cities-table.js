exports.up = function (knex) {
  return knex.schema.createTable("cities", (citiesTable) => {
    citiesTable.increments("city_id").primary();
    citiesTable.string("name").notNullable();
    citiesTable.integer("population").notNullable();
    citiesTable.string("landmarks").notNullable();
    citiesTable.string("denonym").notNullable();
    citiesTable.integer("founded");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cities");
};
