import { getQuantity, getUsers } from '../contact/service';

function getDate() {
  return new Date();
}
function waitFiveSeconds() {
  return new Promise( (resolve) => {
    setTimeout( () => resolve('Terminé de esperar 5 segundos!'), 5000);
  });
}
function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Terminé de esperar 1 segundos!"), 4000);
  });
}

Promise.all([
  getUsers(5),
  getQuantity(),
  getDate(),
  waitFiveSeconds(),
  waitOneSecond(),
  "Valor literal",
])
  .then((results) => console.log(results))
  .catch((err) => console.log(err));

