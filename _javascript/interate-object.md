//https://davidwalsh.name/object-keys

var person = {
  firstName: 'David',
  lastName: 'Walsh',
  // ...
};

//trait gives the key
//person[trait] gives the value

Object.keys(person).forEach(function(trait) {
  console.log('Person ', trait,': ', person[trait]);
});
