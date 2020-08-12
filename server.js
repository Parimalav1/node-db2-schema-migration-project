const express = require('express');
const helmet = require('helmet');

const carsRouter = require('./cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

// module.exports = server;
