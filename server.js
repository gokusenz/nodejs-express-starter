'use strict';

require('dotenv').config();

const fs        = require('fs');
const join      = require('path').join;
const express   = require('express');
const task		= process.env.NODE_ENV || 'development';
const port      = process.env.NODE_PORT || 8080;
const app       = express();
const mongoose  = require('mongoose');
const configMongo = require('./config/mongoose');
const models    = join(__dirname, 'app/models');

// Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(join(models, file)));

// Bootstrap routes
require('./config/express')(app);
require('./app/routes')(app);

let database = configMongo.db.host + ":" + (process.env.DB_PORT || 27017) + "/" + configMongo.db.database;

mongoose.connect(database).connection;

if (task != 'test') {
  app.listen(port, () => {
    console.log('Service started on port ' + port);
  });
}

module.exports = app