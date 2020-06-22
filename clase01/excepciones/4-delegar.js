try {
  try {
    eval(x);
  } catch( err ) {
    console.log(err.message);
    throw 'Eval no ha ido bien';
  }
} catch( err ) {
  console.log('Catch delegado: ', err);
}