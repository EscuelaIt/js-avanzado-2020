class Juego {
  constructor(params = {}) {
    this.name = params.name || "Sin nombre";
    this.designer = params.designer || "Desconocido";
    this.players = params.players || "Sin determinar";
  }

  show() {
    console.log("El Juego", this.name, "ha sido diseñado por", this.designer);
  }
}

var juego1 = new Juego();
var juego2 = new Juego({ name: "Carcassonne" });
var juego3 = new Juego({
  name: "Terraforming Mars",
  designer: "Jacob Fryxelius",
  players: "1 - 5",
});

console.log(juego1);
console.log(juego2);
console.log(juego3);
juego3.show();