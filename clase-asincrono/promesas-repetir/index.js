function createRandomResolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = Math.random() * 10;
      console.log("Esta ejecución Number vale", number);
      if (number > 9) {
        resolve(number);
      } else {
        reject("Number no es suficientemente alto");
      }
    }, 500);
  });
}

function executeUntilResolve() {
  return new Promise((resolve) => {
    createRandomResolvedPromise()
      .then((number) => resolve(number))
      .catch(() => executeUntilResolve().then((number) => resolve(number)));
  });
}

executeUntilResolve()
  .then((number) =>
    console.log("finalmente resuelta con valor", number)
  );