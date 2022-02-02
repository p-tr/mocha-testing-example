const assert = require('assert');
const axios = require('axios');
const app = require('@@app');
const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});

describe('API', function() {
  let server = null;

  before(function() {
    server = app.listen(3000);
  });

  after(function() {
    server.close();
  });

  describe('GET /', function() {

    it('must say "Hello World !"', function(done) {
      api.get('/').then(function(response) {
        try {
          assert.equal(response.data, 'Hello World !');
          done();
        } catch(err) {
          done(err);
        }
      }).catch(done);
    });
  });
});
