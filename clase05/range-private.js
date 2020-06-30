class Range {
  #length;
  #origin;

  constructor(min, max) {
    this.#origin = min;
    this.#length = max - min;
  }
  get min() {
    return this.#origin;
  }
  get max() {
    return this.#origin + this.#length;
  }
  set min(min) {
    let distance = min - this.#origin;
    this.#origin = min;
    this.#length -= distance;
  }
  show() {
    console.log(`[${this.min} <-> ${this.max}]`);
    //this.#privateMethod();
  }
  #privateMethod = function () {
    console.log("Esto es un método privado");
  }
}

let range1 = new Range(2, 5);
range1.show()
range1.min = 1;
console.log(range1.length);
range1.show();
console.log(range1);

const type = "lalala";