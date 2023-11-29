import express from "express";
import {
  allPlanes,
  getSinglePlane,
  removePlane,
  savePlane,
  setup,
  changePlane,
} from "./utils/filestorage.js";

const PORT = 1337;
const app = express();

app.use(express.json());
//! planes.json erstellen

setup();

//! Flugzeuige anzeigen lassen
app.get("/api/planes", (req, res) => {
  allPlanes().then((data) => {
    res.json(data);
  });
});

//! Erstelle Flugzeug
app.post("/api/planes", (req, res) => {
  const plane = req.body;
  savePlane(plane);
  res.end();
});

//! Entferne Flugzeug
app.delete("/api/planes", (req, res) => {
  const idDelPlane = req.body;
  removePlane(idDelPlane.id, res);
  res.end();
});

// ! Einzelnes Flugzeug
app.get("/api/plane", (req, res) => {
  const idSinglePlane = req.body;

  getSinglePlane(idSinglePlane.id, res);
});

// ! Flugzeig verändern
app.put("/api/planes", (req, res) => {
  const idPlane = req.body;

  changePlane(idPlane.id, idPlane);
  res.end();
});

app.listen(PORT, () => console.log("Loift"));
