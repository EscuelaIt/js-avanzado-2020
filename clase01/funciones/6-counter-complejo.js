
let counter = (function() {
  var counter = 0;

  return {
    get: function() {
      return counter;
    },
    reset: function() {
      counter = 0
    },
    set: function(value) {
      counter = value;
    },
    increment: function() {
      counter++;
    }
  }
}());

console.log(counter.get());
counter.increment()
console.log(counter.get());
counter.set(5);
counter.increment()
console.log(counter.get());
counter.increment()
console.log(counter.get());
counter.reset()
console.log(counter.get());