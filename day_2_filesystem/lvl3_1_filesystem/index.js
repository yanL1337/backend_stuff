import fs from "fs";

//! function die text hinzufügt oder neu erstellt
const exists = (text) => {
  //fs.existsSync("./test");
  fs.writeFile("./unterordner/test", text + "\n", { flag: "a" }, () => {});
};

//! ordner erstellen und dann function ausf+rhen
fs.mkdir("./unterordner", () => {
  exists("hallo");
});
