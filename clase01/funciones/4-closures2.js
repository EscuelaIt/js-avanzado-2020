function greeter(name) {
  return function() {
    console.log('hola', name);
  }
}

var greeetToMiguel = greeter('Miguel');
greeetToMiguel();
greeetToMiguel();
greeetToMiguel();

var greeetToAlvaro = greeter('A');
greeetToAlvaro();
greeetToAlvaro();
greeetToAlvaro();
greeetToAlvaro();