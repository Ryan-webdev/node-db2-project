const express = require('express');
const helmet = require('helmet');
const carsRouter = require('../cars/carRouter')

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Hello welcome to the api</h2>`);
  });

server.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({
    message: 'Oops something went wrong',
  })
})


module.exports = server;