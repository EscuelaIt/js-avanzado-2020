const { Student, Erasmus } = require('./estudiante.js');

class College {
  constructor(name, placesAvailable) {
    this.name = name;
    this.placesAvailable = placesAvailable;
    this.students = [];
    College.NetworkEnroll(this);
  }

  static NetworkEnroll(college) {
    College.network.push(college);
  }

  static searchForPlace() {
    return College.network.find(element => element.placesAvailable > 0);
  }

  enrollStudent(student) {
    if (this.placesAvailable > 0) {
      this.students.push(student);
      this.placesAvailable--;
    } else {
      let avaliableCollege = College.searchForPlace();
      console.log(student.name + ' prueba a inscribirte en ');
      avaliableCollege.show();
    }
  }

  show() {
    console.log(`${this.name} tiene ${this.students.length} estudiantes y ${this.placesAvailable} vacantes`);
  }

  static get network() {
    College.networkColleges = College.networkColleges || [];
    return College.networkColleges;
  }

}

const upm = new College('UPM', 1);
const uv = new College('Universidad de Valencia', 5);

let student = new Student("Marco", 1);
let student2 = new Erasmus("Jhon", 3, "Alemania");
let student3 = new Erasmus("Noa Smith", 3, "Netherlands");

upm.enrollStudent(student);
uv.enrollStudent(student2)
upm.enrollStudent(student3);
upm.show();