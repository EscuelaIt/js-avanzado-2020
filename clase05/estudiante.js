class Student {

  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  defineYourself() {
    return `${this.name} es estudiante de ${this.course}º curso`;
  }

  completeCourse() {
    this.course++;
  }
}

// let miguel = new Student("Miguel", "3");
// miguel.completeCourse();
// console.log(miguel.defineYourself());

class Erasmus extends Student {
  constructor(name, course, country) {
    super(name, course);
    this.country = country;
  }

  defineYourself() {
    let definition = super.defineYourself();
    return definition + ' y proviene de ' + this.country;
  }
}

// let alvaro = new Erasmus('Alvaro', '4', 'Portugal');
// console.log(alvaro.defineYourself());
// alvaro.completeCourse();
// console.log(alvaro.defineYourself());

module.exports = {
  Student,
  Erasmus
} 