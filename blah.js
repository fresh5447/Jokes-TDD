var arr = [
  { name: "Doug", age: 18  },
  { name: "John", age: 18  },
  { name: "Suzie", age: 18  },
  { name: "Doug", age: 17  },
]

var getNames = arr.filter(function(item) {
  item.age === 18
}).map(function(item){
  return { name: item.name}
}).find(function(item){
  return item.name == "Doug"
});

// var namesArray = arr.find(function(item){
//   return item.age == 17;
// }).map().filter().forEach()

console.log(getNames)
