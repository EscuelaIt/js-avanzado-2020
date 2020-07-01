class Counter {
  constructor(element) {
    this.element = element;
    this.cont = 0;
    this.clickHandler = this.increment.bind(this);
    element.addEventListener("click", this.clickHandler);
    element.addEventListener("dblclick", () => this.shake());
  }

  increment() {
    console.log(this);
    this.cont++;
    this.updateElement();
  }

  updateElement() {
    this.element.innerText = this.cont;
  }

  shake() {
    this.element.removeEventListener("click", this.clickHandler)
    this.element.classList.add("shakerclass");
    setTimeout(() => this.element.classList.remove("shakerclass"), 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(function (item) {
    new Counter(item).updateElement();
  });
});
