function Range(min, max) {
  this.min = min;
  this.max = max;

  var isEqualMin = function (min) {
    return this.min === min ? true : false;
  }
  var isEqualMax = function (max) {
    return this.max === max ? true : false;
  };

  this.isEqual = function (range) {
    return isEqualMin(range.min) && isEqualMax(range.max) ? true : false;
  }
}

let range1 = new Range(1, 4);
let range2 = new Range(4, 5);
console.log(range1);
console.log(range2);

