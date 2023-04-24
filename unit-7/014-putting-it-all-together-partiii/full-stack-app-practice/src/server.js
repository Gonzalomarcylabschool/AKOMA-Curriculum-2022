//*import modules*
const path = require('path');//path 
const express = require('express');//express
const routes = require('./routes');//routes
const logRoutes = require('./middleware/log-routes')// log 
require('dotenv').config();//.env

//*express methods*
const app = express(); //express function

const publicDir = path.join(__dirname, '..', 'public');//set the path for our static resources (front end html css js)
const staticServer = express.static(publicDir);// set the static resource
app.use(staticServer); // .use for the static resources

app.use(express.json()); //.use for the json method
app.use(logRoutes); //.use for the log 
app.use(routes); //.use for the routes

module.exports = app; //export 