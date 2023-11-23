export const sorter = (arrayNumbers, arrayCars) => {
  arrayNumbers.sort((a, b) => a - b);
  arrayCars.sort((a, b) => a.localeCompare(b));

  console.log(arrayCars);
  console.log(arrayNumbers);
};
