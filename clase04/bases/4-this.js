function Range(min, max) {
  this.min = min;
  this.max = max;

  //let that = this;

  this.middlePoint = function () {
    return (this.min + this.max) / 2;
  };

  // this.show = function () {
  //   let middle = middlePoint.bind(this)();
  //   console.log(`[${this.min} - ${this.max}] medio: ${middle}`);
  // };

  this.show = function () {
    setTimeout(function() {
      let middle = this.middlePoint();
      console.log(`[${this.min} - ${this.max}] medio: ${middle}`);
    }.bind(this), 2000);
  };
}

let range1 = new Range(10, 20);
range1.show();