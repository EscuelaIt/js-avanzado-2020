const person = {
  name: "Miguel",
  city: "Valencia",
  birthday: "21/02",
};

const data = [22, 33, 44];
// data.forEach((item) => console.log(item)); // forEach solamente me sirve para arrays e iterables
// person.forEach((item) => console.log(item)); //esto no funcionaría

Object.keys(person).forEach((item) => console.log(item, person[item]));

for(let key in person) {
  console.log(key, person[key]);
}

for(let item of data) {
  console.log(item);
}