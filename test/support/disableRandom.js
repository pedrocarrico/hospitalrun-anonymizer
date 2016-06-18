// Remove randomness from tests
module.exports = function() {
  Math.random = function() {
    return 0;
  };

  return true;
}();
