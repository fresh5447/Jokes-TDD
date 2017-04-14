var jokeData = require('./jokes.json');

var Joker = function() {};

Joker.prototype.all = function (arguments) {
  return jokeData.value.map(function(item) {
    return { joke: item.joke, id: item.id }
  })
}

Joker.prototype.random = function () {
  return this.all()[Math.floor(Math.random() * this.all().length)].joke;
}

Joker.prototype.getJoke = function(id) {
  return this.all().find(function(item){
    return item.id === id
  })
}


module.exports = Joker;
