
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
        //vin, make, model, mileage, transmission type, title status.
      tbl.string("vin", 17).unique().notNullable();
      tbl.text('make', 13).notNullable();
      tbl.text('model', 15).notNullable();
      tbl.float('mileage').notNullable();
      tbl.text('transmission').defaultTo(null);
      tbl.text('title').defaultTo(null);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars')
};
