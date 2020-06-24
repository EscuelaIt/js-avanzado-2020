let micadena = "hohoho";
String.prototype.isValidEmail = function() {
  let email = this.toString();
  if(!email || email == '') {
    return false;
  }
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test( email );
}


String.prototype.eitConcat = function() {
  return this.toString() + ' by EscuelaIT';
}

let curso = "curso de Javascript";

console.log(curso.eitConcat());
console.log(micadena.eitConcat());
console.log("lldldl".isValidEmail());
console.log("miguel@escuela.it".isValidEmail());