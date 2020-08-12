// - The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title (clean, salvage, etc.), 
// but this information is not always immediately known.

exports.up = function(knex) {
  return knex.schema.createTable('cars',tbl  => {
       // primary key
       tbl.increments("id");

       // make the name unique(no duplicates allowed), also required
        tbl.string('VIN', 128).notNullable().unique();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission type').notNullable();
        tbl.string('title status');
  });
};

// describes how to undo the changes from the up() function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};


// exports.up = function (knex) {
//     return knex.schema.table("armors", tbl => {
//         // adds a new column to an existing table
//         tbl.float("weight").notNullable().defaultTo(10);
//     });
// };

// exports.down = function (knex) {
//     return knex.schema.table("armors", tbl => {
//         tbl.dropColumn("weight");
//     });
// };
