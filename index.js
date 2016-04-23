module.exports = {};

module.exports.word = {
  isWord: function(s) {
    return (String(s).match(/(\w+)\S/g).length == 1);
  },
  howManyWords: function(s) {
    return String(s).match(/(\w+)\S/g).length;
  }
}