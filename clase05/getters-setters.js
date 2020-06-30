class Person {

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get completeName() {
    return `${this.name} - ${this.surname}`;
  }

  set completeName(complete) {
    let parts = complete.split(' ');
    let surname = '';
    parts.forEach((element, index) => {
      if (index == 0) {
        this.name = element;
      } else {
        surname += element + ' ';
      }
    });
    this.surname = surname.trim();
  }

}

let miguel = new Person('Miguel Angel', 'Alvarez');
console.log(miguel.completeName);
miguel.completeName = "manolo garcía lopez";
console.log(miguel.name);
console.log(miguel.surname);