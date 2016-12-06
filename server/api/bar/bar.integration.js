'use strict';

var app = require('../..');
import request from 'supertest';

var newBar;

describe('Bar API:', function() {
  describe('GET /api/bars', function() {
    var bars;

    beforeEach(function(done) {
      request(app)
        .get('/api/bars')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          bars = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      bars.should.be.instanceOf(Array);
    });
  });

  describe('GET /api/bars/:id', function() {
    var bar;

    beforeEach(function(done) {
      request(app)
        .get(`/api/bars/${newBar._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          bar = res.body;
          done();
        });
    });

    afterEach(function() {
      bar = {};
    });

    it('should respond with the requested bar', function() {
      bar.name.should.equal('New Bar');
      bar.info.should.equal('This is the brand new bar!!!');
    });
  });
});
