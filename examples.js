var arr = [
  { name: "Doug", age: 18, gender: "male"  },
  { name: "John", age: 18, gender: "male"  },
  { name: "Suzie", age: 18, gender: "female"  },
  { name: "Doug", age: 17, gender: "male"  },
]


// using map to build an array of data we care about.
var mappedPeople = arr.map(function(item) {
  return { alias: item.name, gender: item.gender }
});
