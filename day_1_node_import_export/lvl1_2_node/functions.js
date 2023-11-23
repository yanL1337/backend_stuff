export const onlyFirst = (array) => {
  console.log(array[0]);
};
export const allExceptLast = (array) => {
  const newArray = [...array];
  newArray.pop();
  console.log(newArray);
};
export const onlyLast = (array) => {
  console.log(array[array.length - 1]);
};
export const allExceptFirst = (array) => {
  const newArray = [...array];
  newArray.shift();
  console.log(newArray);
};
export const removeSelected = (array, word) => {
  let newArray = [...array].filter((item) => {
    return item == word ? "" : item;
  });
  console.log(newArray);
};
export const removeDuplicates = (array) => {
  let newArray = array.filter((item, index) => {
    return array.indexOf(item) == index;
  });
  console.log(newArray);
};
export const showLength = (array) => {
  console.log("Array ist: " + array.length + " Zeichen lang");
};

// ! Kein array

export const randomBetween = (a, b) => {
  let rand;
  let go = true;
  while (go) {
    rand = Math.random() * 100;
    rand > a && rand < b ? (go = false) : (go = true);
  }
  console.log(Math.round(rand));
};
export const firstLetterCapital = (text) => {
  let newer = text[0].toUpperCase() + text.slice(1, text.length);
  console.log(newer);
};
export const allCapital = (text) => {
  console.log(text.toUpperCase());
};
export const secondParamFirstLetter = (word, param) => {
  word[word.length - 1].toLowerCase() == param.toLowerCase()
    ? console.log(true)
    : console.log(false);
};
