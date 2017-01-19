/* eslint-env mocha */
const app = require('../../server.js');
const should = require('chai').should();
const expect = require('chai').expect;
const server = app.listen();
const request = require('supertest').agent(server);

describe('Fields', () => {
  after((done) => {
    server.close();
    done();
  });

  it('should return a 200 response', (done) => {
    request.get('/v1/example')
    .set('Accept', 'application/json')
    .expect(200, done);
  });
});
