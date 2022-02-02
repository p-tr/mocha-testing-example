const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when value not present', function() {
      assert.equal([ 'a', 'b', 'c' ].indexOf('z'), -1);
    });
  });
});
