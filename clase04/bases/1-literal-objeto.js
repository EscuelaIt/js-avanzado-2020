var juego = {
  name: "Colonos de Catán",
  designer: "Klaus Teuber",
  players: "3, 4",
  categories: ["strategy", "family"],
  age: {
    minimunRecomended: 10,
    maximum: 99,
    usersMinimun: 8,
  },
  publishers: [
    {
      name: "Kosmos",
      distributionCountry: "Germany",
    },
    {
      name: "Devir",
      distributionCountry: "España",
    },
  ],

  show: function () {
    console.log("El Juego", this.name, "ha sido diseñado por", this.designer);
  },
};

console.log(juego.players);
juego.show();
