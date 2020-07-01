import { Contact } from './contact';

import { getUsers, getQuantity } from './service-async-await';


/**
 * USANDO SIN UN SERVICIO
 */

  // fetch('https://randomuser.me/api/?results=10')
  //   .then( response => {
  //     if(response.status == 200) {
  //       return response.text();
  //     } else {
  //       throw "Respuesta incorrecta del servidor"
  //     }
  //   })
  //   .then( responseText => {
  //     let users = JSON.parse(responseText).results;
  //     users.forEach(user => new Contact(user) );
  //   })
  //   .catch( err => {
  //     console.log(err);
  //   })
  // .finally( () => console.log('Los usuarios han sido cargados') )

/**
 * USANDO CON UN SERVICIO
 */
// getUsers(30)
//   .then((users) => users.forEach((user) => new Contact(user)))
//   .catch((err) => console.log(err));


/**
 * ENCADENANDO VARIAS PROMESAS SECUENCIALMENTE
 */

//  getQuantity()
//    .then((quantity) => getUsers(quantity))
//    .then((users) => users.forEach((user) => new Contact(user)))
//    .catch((err) => console.log(err));

async function run() {
  try {
    const quantity = await getQuantity();
    const users = await getUsers(quantity);
    users.forEach((user) => new Contact(user));
  } catch(err) {
    console.log(err);
  }
}

run();

// async function getUsersAwait() {
//   let url = "https://randomuser.me/api/?results=5";
//   try {
//     const response = await fetch(url);
//     if (response.status == 200) {
//       const responseText = await response.text();
//       let users = JSON.parse(responseText).results;
//       users.forEach((user) => new Contact(user));
//     } else {
//       throw "Respuesta incorrecta del servidor";
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

// getUsersAwait();