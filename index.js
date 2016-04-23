module.exports = {
  isWord: function(s) {
    return (String(s).match(/(\w+)\S/g).length == 1);
  }
}