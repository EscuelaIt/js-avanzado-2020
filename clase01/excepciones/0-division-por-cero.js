let resultado = 10 / 0;
console.log(resultado);
console.log(typeof resultado);
try {
  let resultado = 10 / 0; // división por cero da error
} catch( err ) {
  console.log('Se ha producido una excepción', err);
} finally {
  console.log('Este código se ejecutará siempre');
}