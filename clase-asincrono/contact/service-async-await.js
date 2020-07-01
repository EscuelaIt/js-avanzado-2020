const url = 'https://randomuser.me/api/';

export const getUsers = function($quantity) {
  return new Promise( async (resolve, reject) => {
    try {
      let response = await fetch(`${url}?results=${$quantity}`)
      if (response.status == 200) {
        let responseText = await response.text();
        let users = JSON.parse(responseText).results;
        resolve(users);
      } else {
        throw 'Respuesta incorrecta del servidor';
      }
    } catch(e) {
      reject( e );
    }
  })
}

export const getQuantity = function() {
  return new Promise( async (resolve, reject) => {
    try {
      let response = await fetch("/clase-asincrono/contact/quantity.json");
      if (response.status == 200) {
        let responseText = await response.text();
        let quantity = JSON.parse(responseText).quantity;
        resolve(quantity);
      } else {
          throw "Respuesta incorrecta del servidor";
      }
    } catch(e) {
      reject(e);
    }
  })
}