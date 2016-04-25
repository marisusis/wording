var should = require('chai').should(),
  wording = require('../index');

describe('#isWord', function() {
  it('returns false if input is > 1 word', function() {
    wording.word.isWord('hello world').should.equal(false);
  });
  it('returns true if input is 1 word', function() {
    wording.word.isWord('hello').should.equal(true);
  });

});

// describe('#howManyWords', function() {
//   it('returns number of words',function() {
//     wording.word.howManyWords('hello world').should.equal(2);
//   });
// });

describe('#numWords', function() {
  it('returns number of words',function() {
    wording.word.numWords('hello world').should.equal(2);
  });
});