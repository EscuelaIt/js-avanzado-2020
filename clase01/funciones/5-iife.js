
var counter = (function() {
  var counter = 0;

  return function() {
      return counter++;
  }
}());

console.log(counter());
console.log(counter());