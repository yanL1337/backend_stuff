import fs from "fs/promises";

//! planes datei erstellen
export const setup = () => {
  fs.access("./planes.json")
    .then((data) => console.log(data))
    .catch((err) => fs.writeFile("./planes.json", "[]"));
};
//! planes anzeigen (alle)
export const allPlanes = () => {
  return fs
    .readFile("./planes.json", { encoding: "utf8" })
    .then((data) => JSON.parse(data));
};
//! planes löschen
export const removePlane = (id) => {
  allPlanes().then((data) => {
    data.forEach((elt, index) => {
      if (elt.id === id) {
        data.splice(index, 1);

        fs.writeFile("./planes.json", JSON.stringify(data));
      }
    });
  });
};
//! planes erhalnten (einzeln)
export const getSinglePlane = (id, res) => {
  allPlanes().then((data) => {
    data.forEach((elt, index) => {
      if (elt.id === id) {
        //console.log();
        res.end(JSON.stringify(data.splice(index, 1)));
        //fs.writeFile("./planes.json", JSON.stringify());
      }
    });
  });
};
//! planes erstellen
export const savePlane = (plane) => {
  allPlanes()
    .then((data) => {
      data.push(plane);
      return data;
    })
    .then((newArray) =>
      fs.writeFile("./planes.json", JSON.stringify(newArray))
    );
};
//! planes eigenschaften ändern
export const changePlane = (id, content) => {
  allPlanes().then((data) => {
    data.forEach((elt, index) => {
      if (elt.id === id) {
        let changedPlane = { ...elt, ...content };
        data.splice(index, 1, changedPlane);
        fs.writeFile("./planes.json", JSON.stringify(data));
      }
    });
  });
};
