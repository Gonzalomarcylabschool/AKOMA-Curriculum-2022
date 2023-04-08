const express = require('express'); // import express
const Cars = require('./model-car'); // import Cars class

const app = express();
app.use(express.json());

app.use((req, res, next) => { //middleware to console.log request method/URL, and time and date
  const time = (new Date()).toLocaleString();// store the time and date into a variable
  console.log(`${req.method}: ${req.originalUrl} - ${time}`) //this will be log to the console
  next(); // move on to the next middleware (or route handler)
});

app.use((req, res, next) => {//middleware to add the Cars class to the request
  req.Cars = Cars;
  next()
});

app.get('/cars', (req, res) => {//route to get all of the cars
  res.send(Cars.list());
});

app.post('/cars', (req, res) => { //route to create a new resource 
  const { Cars, body :{ car } } = req;
  const newCar = new Cars(car);
  res.status(201).send(newCar);
})

app.get ('/cars/:id', (req, res) => { // route to get a car by id
  const { Cars, params: { id } } = req;
  const found = Cars.find(Number(id));
  if (!found) res.sendStatus(404); 
  res.send(found)
})

app.patch('/cars/:id', (req, res) => { // route to update a car based on id
  const { Cars, body: { car }, params: { id } } = req;
  const updateCar = Cars.editCar(Number(id), car);
  console.log(updateCar);
  res.status(201).send(updateCar);
})

app.delete('/cars/:id', (req, res) => { //delete a car based on id
  const {Cars, params: { id }} = req;
  const deleted = Cars.delete(Number(id));
  const statusCode = deleted ? 204 : 404;
  res.sendStatus(statusCode);
})

app.delete('/cars', (req, res) => { // delete all of the cars
  res.send(Cars.deleteAll());
})

module.exports = app; // export to the index.js
