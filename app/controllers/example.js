
const wrap = require('co-express');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const request = require('request');
const promise = require('bluebird');

// #######################################
// ##       Routing example             ##
// #######################################

const callback = function (req, res) {
  // do something
  res.send('callback example');
};

router.get('/example', callback);
module.exports = router;
