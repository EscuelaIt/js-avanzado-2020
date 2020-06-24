const simpleJuegoFactory = function() {
  const juegoPrototype = {
    name: "Sin nombre",
    designer: "Desconocido",
    show: function () {
      console.log("El Juego", this.name, "ha sido diseñado por", this.designer);
    },
  };

  return Object.create(juegoPrototype);
}

const simpleJuego1 = simpleJuegoFactory();
console.log(simpleJuego1.name);
simpleJuego1.show();

const juegoFactory = function(params = {}) {
  const juegoPrototype = {
    name: "Sin nombre",
    designer: "Desconocido",
    show: function () {
      console.log("El Juego", this.name, "ha sido diseñado por", this.designer);
    },
  };
  let juego = Object.create(juegoPrototype);
  if(params.name) {
    juego.name = params.name;
  }
  if(params.designer) {
    juego.designer = params.designer;
  }
  return juego;
} 

const juego1 = juegoFactory({ name: 'Carcassonne'});
juego1.show();
const juego2 = juegoFactory({ name: 'Catan', designer: 'Klaus'});
juego2.show();