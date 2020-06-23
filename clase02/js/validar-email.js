import { validateEmail as isValidEmail } from './modules/validate-email.js';

import tres from './modules/meses.js';
console.log(tres);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("email").addEventListener('input', function () {
    let msg = isValidEmail(this.value)
      ? "El email es válido"
      : "Eso no es un email";
    document.getElementById('msg').innerText = msg;
  });
});