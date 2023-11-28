const retPromise = (number) => {
  return new Promise((resolve, reject) => {
    const res = number * number;
    number != null ? resolve(res) : reject("Fehler");
  });
};

const chainMaker2 = (number) => {
  return retPromise(number).then((eins) =>
    retPromise(eins).then((zwei) =>
      retPromise(zwei).then((result) => console.log(result))
    )
  );
};
chainMaker2(3);
