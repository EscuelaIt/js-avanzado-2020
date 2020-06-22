//import format from "../../node_modules/date-fns/format/index.js";
import format from "date-fns/format";
import es from "date-fns/locale/es";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn").addEventListener("click", function () {
    let dia = document.getElementById("dia").value;
    let mes = parseInt(document.getElementById("mes").value) - 1;
    let anyo = document.getElementById("anyo").value;

    //let fecha = format(new Date(anyo, mes, dia), "cccc G dd/MM/yyyy");
    let fecha = format(new Date(anyo, mes, dia), "cccc d 'de' MMMM 'de' yyyy", {
      locale: es,
    });

    document.getElementById("date").innerText = fecha;
  });
});