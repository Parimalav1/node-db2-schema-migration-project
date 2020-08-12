const knex = require("knex");

const config = require('../knexfile.js');

module.exports = knex(config.development);

//const knexfile = require("../knexfile.js");

// const database = "development";

// module.exports = knex(knexfile[database]);

