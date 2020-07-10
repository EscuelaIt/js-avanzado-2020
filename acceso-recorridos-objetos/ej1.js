
const person = {
  name: "Miguel",
  city: "Valencia",
};

console.log(person.name, person.city);

let prop = 'city';
console.log(person[prop]);

let propertyName = "birthday";
let properyValue = "21/02";

person[propertyName] = properyValue;

console.log(person);