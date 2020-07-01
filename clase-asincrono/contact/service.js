const url = 'https://randomuser.me/api/';

export const getUsers = function(quantity) {
  return new Promise( (resolve, reject) => {
    fetch(`${url}?results=${quantity}`)
      .then((response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          throw "Respuesta incorrecta del servidor";
        }
      })
      .then((responseText) => {
        let users = JSON.parse(responseText).results;
        resolve(users);
      })
      .catch( err => reject( err ) );
  })
}

export const getQuantity = function() {
  return new Promise( (resolve, reject) => {
    fetch("/clase-asincrono/contact/quantity.json")
      .then((response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          reject("Respuesta incorrecta del servidor en getQuantity");
        }
      })
      .then((responseText) => {
        let quantity = JSON.parse(responseText).quantity;
        resolve(quantity);
      })
      .catch( err => reject('este es el texto del error' + err) );
  })
}