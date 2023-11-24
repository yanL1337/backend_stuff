import fs from "fs";
export //! function die text hinzufügt oder neu erstellt
const exists = (text) => {
  //fs.existsSync("./test");
  fs.writeFile("./unterordner/test", text + "\n", { flag: "a" }, () => {});
};
