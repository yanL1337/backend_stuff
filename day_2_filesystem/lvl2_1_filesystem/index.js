import data from "./data.json" assert { type: "json" }; //! type angeben wegen json
import fs from "fs";

//! schleife über objekte
data.forEach((elt) => {
  //! schreiben der objekte mit formatierung
  fs.writeFile(
    "./CooleWorte",
    `${elt.id} - ${elt.title} \n ${elt.description}\n \n`,
    { flag: "a" },
    () => {}
  );
});
