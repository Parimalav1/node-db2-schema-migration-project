const express = require('express');
const knex = require('knex');

const carsDb = require('./data/dbConfig.js');
// const carsDb = knex({
//     client: 'sqlite3',
//     connection: {
//       filename: './data/car-dealer.db3'
//     },
//     useNullAsDefault: true
//   });

const router = express.Router();

router.post("/", (req, res) => {
    const car = req.body;

    // carsDb.select('*')
    //     .from('cars')
    carsDb('cars')
        .insert(car)
        .returning('ids')
        .then(cars => {
            res.status(200).json({ data: cars });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
});

router.get("/", (req, res) => {
    // respond with a list of cars fro the database
    carsDb('cars')
        .then(cars => {
            res.status(200).json({ data: cars });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
});

router.get("/:id", (req, res) => {
    // respond with a car from the database

    carsDb('cars')
        .where({id: req.params.id})
        .then(car => {
            res.status(200).json(car);
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
});

router.put("/:id", (req, res) => {
    // Update a car from the database
    const updateCar = req.body;
    carsDb('cars')
        .where({id: req.params.id})
        .update(updateCar)
        .then(count => {
            if(count) {
                res.status(200).json(updateCar);
            } else {
                res.status(404).json({ message: "not found" });
            }  
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
});

router.delete("/:id", (req, res) => {
    // delete a car from the database
    const carId = req.params.id;
    carsDb('cars')
        .where({id: carId})
        .del()
        .then(count => {
            if(count) {
                res.status(200).json(count);
            } else {
                res.status(404).json({ message: "not found" });
            }  
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
});

module.exports = router;