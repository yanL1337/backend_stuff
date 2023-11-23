import { arrayCars, numbers } from "./data.js";
import {
  onlyFirst,
  allExceptFirst,
  allExceptLast,
  onlyLast,
  removeSelected,
  removeDuplicates,
  showLength,
  randomBetween,
  firstLetterCapital,
  allCapital,
  secondParamFirstLetter,
} from "./functions.js";

console.log(arrayCars);
onlyFirst(arrayCars);
allExceptLast(arrayCars);
onlyLast(arrayCars);
allExceptFirst(arrayCars);
removeSelected(arrayCars, "audi");
removeDuplicates(numbers);
showLength(numbers);
randomBetween(1, 10);
firstLetterCapital("hallo");
allCapital("hallo");
secondParamFirstLetter("Test", "q");
