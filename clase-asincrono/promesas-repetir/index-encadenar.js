function createRandomResolvedPromise(target) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = Math.random() * 10;
      console.log("Esta ejecución Number vale", number);
      if (number > target) {
        resolve(number);
      } else {
        reject("Number no es suficientemente alto");
      }
    }, 500);
  });
}

function executeUntilResolve(target) {
  return new Promise((resolve, reject) => {
    createRandomResolvedPromise(target)
      .then((number) => resolve(number))
      .catch((err) =>
        executeUntilResolve(target).then((number) => resolve(number))
      );
  });
}

executeUntilResolve(9)
  .then((number) =>
    console.log("------- finalmente resuelta con valor", number)
  )
  .then(() => executeUntilResolve(8))
  .then((number) =>
    console.log("------- finalmente segunda resuelta con valor", number)
  );
