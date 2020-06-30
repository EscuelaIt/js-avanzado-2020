class Range {
  min;
  max;
  static typeee = 'rango normal';

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  show() {
    console.log(`[${this.min} - ${this.max}]`);
  }
}

let range1 = new Range(1, 5);
range1.show();
console.log(Range.type);