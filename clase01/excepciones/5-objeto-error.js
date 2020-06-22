
function showUser(user) {
  if( user.name && user.age ) {
    console.log(user.name, 'tiene', user.age, 'años.');
  } else {
    throw new Error('Usuario mal formado');
  }
}

let user = {
  name: 'Miguel',
  age: 45
}

try {
  showUser(user);
} catch( err ) {
  console.log('error capturado!');
  console.log(err.message);
} finally {
  console.log('el usuario era', user);
}
