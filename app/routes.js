'use strict';

const express   = require('express');
const wrap      = require('co-express');

module.exports = function (app, passport) {
    // #######################################
    // ##       Prefix route example        ##
    // #######################################
    app.use(`${process.env.URL_PREFIX}`, require('../app/controllers/example'));
    
    /**
    * Error handling
    */
    app.use(function (err, req, res, next) {
        // treat as 404
        if (err.message
          && (~err.message.indexOf('not found')
          || (~err.message.indexOf('Cast to ObjectId failed')))) {
          return next();
        }

        if (err.stack.includes('ValidationError')) {
          res.status(422).json({
            error: 422,
            description: err.stack.TypeError
          });
          return;
        }

        res.status(500).json('500', {
            error: 500,
            // description: 'Internal Server Error'
            description: err.stack
        });
    });

    // assume 404 since no middleware responded
    app.use(function (req, res) {
        res.status(404).json({
          error: 404,
          description: 'Not found',
          url: req.originalUrl,
        });
    });
};