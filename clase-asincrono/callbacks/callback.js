setTimeout( () => console.log('Han pasado 2 segundos'), 2000);
setTimeout( function() {
  console.log('Han pasado 3 segundos')
}, 3000);
console.log('Ejecución inmediata');