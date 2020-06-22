function greet(name) {
  if(validateName()) {
    console.log('Hola ' + name);
  };

  function validateName() {
    return (name.length > 1) ? true : false;
  }
  
}


greet('');
greet('Miguel');

// validateName('pepe'); // da error