function counter() {
  var i = 0;
  return function() {
    return i++;
  }
}

var contador1 = counter();
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
