var should = require('chai').should(),
  wording = require('../index'),
  isWord = wording.isWord;

describe('#isWord', function() {
  it('returns false if input is > 1 word', function() {
    isWord('hello world').should.equal(false);
  });
  it('returns true if input is 1 word', function() {
    isWord('hello').should.equal(true);
  });

});