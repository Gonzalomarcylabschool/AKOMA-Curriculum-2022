const path = require('path');
const express = require('express'); // import express
const logRoutes = require('./middleware/log-routes');
const carRoutes = require('./routes');


const app = express();

app.use(express.json());
app.use(logRoutes);
app.use(carRoutes);



module.exports = app; // export to the index.js
