var jsonMalFormado = `
{
  "valor": 4
}
`;

// var objeto = JSON.parse(jsonMalFormado);


try {
  var objeto = JSON.parse(jsonMalFormado);
} catch( err ) {
  console.log('Se ha producido un error:', err.message);
  var objeto = {};
} finally {
  console.log('El objeto', objeto);
} 


