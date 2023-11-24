import fs from "fs";

//! Erstellen
fs.writeFile("./blog1.txt", "Hello World", () => {});

//! Überschreiben
fs.writeFile("./blog1.txt", "I bims ein Web Dev", { flag: "r+" }, () => {});

// ! nochmal erstellen
fs.writeFile("./blog2.txt", "Yan ist cool", () => {});

// ! erst löschen (falls vorhanden) dann erstellen
fs.rmdir("./assets", () => {
  fs.mkdir("./assets", () => {});
});

// ! Prüfen ob datei da, wenn ja löschen, sonst erstellen (weil fehler)
fs.rm("./delete.txt", () => {
  fs.writeFile("./delete.txt", "lol", { flag: "w+" }, () => {});
});

//! Datei erstellen und dann umbennen

fs.writeFile("./Hello.txt", "loool", () => {
  setTimeout(() => {
    fs.rename("./Hello.txt", "./HelloWorld.txt", () => {});
  }, 1000);
});
