const takeNumb = (number) => {
  return new Promise((resolve, reject) => {
    if (number != null) {
      setTimeout(() => {
        resolve(number * 2);
      }, 2000);
    } else {
      reject("Fehler");
    }
  });
};

takeNumb(5)
  .then((doubled) => console.log(doubled))
  .catch((error) => console.log(error));
