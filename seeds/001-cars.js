
exports.seed = function (knex, Promise) {
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "VIN": "ASD890",
          "Make": "Toyota",
          "Model": "Camry",
          "Mileage": 1234,
          "Transmission Type": "Auto",
          "Title status": "Pending"
        },
        {
          "VIN": "ASD891",
          "Make": "Toyota",
          "Model": "Corolla",
          "Mileage": 1234,
          "Transmission Type": "Auto",
          "Title status": "Pending"
        },
        {
          "VIN": "ASD892",
          "Make": "Toyota",
          "Model": "Prius",
          "Mileage": 1234,
          "Transmission Type": "Auto",
          "Title status": "Pending"
        },
        {
          "VIN": "ASD893",
          "Make": "Honda",
          "Model": "Pilot",
          "Mileage": 1234,
          "Transmission Type": "Auto",
          "Title status": "Pending"
        },
        {
          "VIN": "ASD894",
          "Make": "Honda",
          "Model": "Fit",
          "Mileage": 1234,
          "Transmission Type": "Auto",
          "Title status": "Pending"
        },
        {
          "VIN": "ASD895",
          "Make": "Honda",
          "Model": "Rav4",
          "Mileage": 1234,
          "Transmission Type": "Auto",
          "Title status": "Pending"
        }
      ]);
    });
};
