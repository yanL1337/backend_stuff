const randomNumb = () => {
  return new Promise((resolve, reject) => {
    let numb = Math.round(Math.random() * 10);
    numb < 6 ? reject(numb) : resolve(numb);
  });
};

randomNumb()
  .then((number) => console.log("Zahl ist größer als 6", number))
  .catch((number) => console.log("Zahl ist kleiner als 6", number));
