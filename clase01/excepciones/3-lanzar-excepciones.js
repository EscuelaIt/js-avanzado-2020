function checkPassword(password) {
  if(password.length < 8) {
    throw 'La clave debe contener al menos 8 caracteres';
  }
  if(password.length > 20) {
    throw 'La longitud máxima de la clave es 20 caracteres'
  }
  return true;
}

//var valid = checkPassword('1234hhhhhhhh');
//console.log('código que podría no no ejecutarse si no llegamos a capturar el error...');

try {
  var valid = checkPassword('qwerfgdfg fd fhfghfgh ghghj ghjghj ghjhj khkgkhk hjk');
} catch ( err ) {
  console.log(err);
  var valid = false;
} 

console.log(valid);