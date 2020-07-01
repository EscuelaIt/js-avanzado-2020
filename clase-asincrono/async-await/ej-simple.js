function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Terminé de esperar 3 segundos!"), 3000);
  });
}

// function getResponse() {
//   console.log("comienzo la función");
//   waitThreeSeconds()
//     .then( (response) => console.log(response));
//   console.log("terminó la función");
// }

async function getResponse() {
  console.log("comienzo la función");
  const response = await waitThreeSeconds();
  console.log(response);
  console.log("terminó la función");
}

console.log(getResponse());