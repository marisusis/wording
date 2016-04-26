module.exports = {};

module.exports.word = {
  isWord: function(s) {
    return (String(s).match(/(\w+)\S/g).length == 1);
  },
//   howManyWords: function(s) {
//     return String(s).match(/(\w+)\S/g).length;
//   },
  numWords: function(s) {
    return String(s).split(/\s/g).length;
  },
  toVerb: function(s) {
    if (s.charAt(s.length-1)=='r') {
      return s+'s';
    }
  }
}
