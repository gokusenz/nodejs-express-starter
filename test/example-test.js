'use strict';

const app = require('../server.js'),
    should = require('chai').should(),
    expect = require('chai').expect,
    server = app.listen(),
    request = require('supertest').agent(server);

describe('Fields', () => {
    after((done)=> {
        server.close();
        done();
    });

    it ('should return a 200 response', (done) => {
        request.get('/api/v1/example')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
});