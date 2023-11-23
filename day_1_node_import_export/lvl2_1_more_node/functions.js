export const moreThenEnough = (array) => {
  let newArr = array.filter((item) => item.population > 100000);
  console.log(newArr);
};

export const lessThenEnough = (array) => {
  let newArr = array.filter((item) => item.population < 100000);
  console.log(newArr);
};
