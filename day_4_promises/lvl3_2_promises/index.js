const moreAsync = (number) => {
  return new Promise((resolve, reject) => {
    if (number) {
      setTimeout(() => {
        resolve(Math.round(Math.random() * 1000));
      }, number);
    } else {
      reject("Fehler lol");
    }
  });
};

Promise.all([moreAsync(2), moreAsync(10)])
  .then((result) => console.log(result))
  .catch((error) => console.log("Fehler keine NUmmer", error));
