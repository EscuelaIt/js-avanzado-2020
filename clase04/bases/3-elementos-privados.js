function Coordinate(coordinateX, coordinateY) {
  let x = coordinateX || 0;
  let y = coordinateY || 0;

  this.show = function () {
    console.log(`(${x} , ${y})`);
    log.bind(this)();
  };

  var log = function() {
    console.log(this.isEqualX(4));
  }

  this.getX = function () {
    return x;
  };

  this.getY = function () {
    return y;
  };

  this.isEqualX = function (coordianteX) {
    return x === coordianteX ? true : false;
  };

  this.isEqualY = function (coordianteY) {
    return y === coordianteY ? true : false;
  };

  this.isEqual = function (coordinate) {
    if ( ! this.isEqualX(coordinate.getX())) {
      return false;
    }
    if ( ! this.isEqualY(coordinate.getY())) {
      return false;
    }
    return true;
  };
}

let coordinate1 = new Coordinate(2, 4);
//console.log(coordinate1.x);
let coordinate2 = new Coordinate(3, 6);
let coordinate3 = new Coordinate(2, 4);
coordinate1.show();
console.log(coordinate1.isEqual(coordinate2));
console.log(coordinate1.isEqual(coordinate3));
