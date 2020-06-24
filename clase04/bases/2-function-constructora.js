function Juego( params = {} ) {
  this.name = params.name || 'Sin nombre';
  this.designer = params.designer || "Desconocido";
  this.players = params.players || "Sin determinar";

  this.show = function () {
    console.log("El Juego", this.name, "ha sido diseñado por", this.designer);
  };
}

let juego = new Juego();
let juego1 = new Juego({ name: 'Carcassonne' });
juego1.show();
var juego2 = new Juego({
  name: "Terraforming Mars",
  designer: "Jacob Fryxelius",
  players: "1 - 5",
});

console.log(juego);
console.log(juego2);