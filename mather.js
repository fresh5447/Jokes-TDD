var Mather = function(){};

Mather.prototype.sum = function(x,y) {
  return x + y;
};

Mather.prototype.multiply = function(x,y) {
  return x * y;
}

Mather.prototype.square = function(x,y) {
  var sum = this.sum(x,y);
  var squared = this.multiply(sum, sum);
  return squared;
}

module.exports = Mather;
