

function resuelveEn1Segundo() {
  console.log('empieza el proceso');
  return new Promise( (resolve, reject) => {
    setTimeout( () => reject('texto ahora del reject'), 4000);
  });
}

resuelveEn1Segundo()
.then( textoRecibido => console.log(textoRecibido) )
.catch( err => console.log('estamos en el catch', err) )
;