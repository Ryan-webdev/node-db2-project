
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '2FMDK4KC1DBA45121', make: 'ford', model: "escort", mileage: 200000, "transmission": "automatic", "title": "clean"},
        {id: 2, vin: 'KM8JUCAG6FU035712', make: 'mazda', model: "cx3", mileage: 6000, "transmission": "manual", "title": "salvage"},
        {id: 3, vin: '1NXBU4EE6AZ375437', make: 'dodge', model: "f150", mileage: 150000, "transmission": null, "title": null}
      ]);
    });
};
