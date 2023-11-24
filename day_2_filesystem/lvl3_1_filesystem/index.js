import fs from "fs";
import { exists } from "./function.js";

//! ordner erstellen und dann function ausf+rhen
fs.mkdir("./unterordner", () => {
  exists("hallo");
});
