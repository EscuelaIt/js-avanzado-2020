function Counter(element) {
  this.element = element;
  this.count = 0;

  this.increment = function () {
    console.log(this);
    this.count++;
    this.updateElement();
  };

  this.updateElement = function () {
    console.log(this.count);
    this.element.innerText = this.count;
  };

  element.addEventListener("click", this.increment.bind(this));
}

document.addEventListener("DOMContentLoaded", function () {
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(function (item) {
    new Counter(item).updateElement();
  });
});
